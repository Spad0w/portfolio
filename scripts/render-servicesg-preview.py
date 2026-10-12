"""Render the ServiceSG highlight from the original 1920x1080 demo.

Usage: python render-servicesg-preview.py SOURCE.mp4 MANROPE.ttf POPPINS_SEMIBOLD.ttf
Label font: https://github.com/google/fonts/blob/main/ofl/poppins/Poppins-SemiBold.ttf
Requires Pillow and imageio-ffmpeg (render-time only, not website dependencies).
Source: https://www.youtube.com/watch?v=8cuA-skp3SA
"""
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

if len(sys.argv) != 4:
    raise SystemExit('Usage: render-servicesg-preview.py SOURCE.mp4 MANROPE.ttf POPPINS_SEMIBOLD.ttf')
SOURCE, FONT, LABEL_FONT = sys.argv[1:4]
OUT = Path(__file__).resolve().parents[1] / 'public/projects/servicesg'
OUT.mkdir(parents=True, exist_ok=True)
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
FPS = 30
SIZE = (1600, 900)
font = ImageFont.truetype(FONT, 56)
font.set_variation_by_axes([650])
# Keep the product name in Manrope; Poppins SemiBold styles the green step labels.
label_font = ImageFont.truetype(LABEL_FONT, 56)
LABEL_COLOR = '#306754'  # Sampled from the ServiceScoutSG heading in the recording.


def read_exact(stream, size):
    data = bytearray()
    while len(data) < size:
        chunk = stream.read(size - len(data))
        if not chunk:
            break
        data.extend(chunk)
    return bytes(data)


def footage(start, seconds, speed=3):
    command = [FFMPEG, '-v', 'error', '-ss', str(start), '-i', SOURCE,
               '-an', '-vf', f'setpts=(PTS-STARTPTS)/{speed},fps={FPS}',
               '-frames:v', str(round(seconds * FPS)), '-f', 'rawvideo',
               '-pix_fmt', 'rgb24', 'pipe:1']
    process = subprocess.Popen(command, stdout=subprocess.PIPE)
    try:
        for _ in range(round(seconds * FPS)):
            raw = read_exact(process.stdout, 1920 * 1080 * 3)
            if len(raw) != 1920 * 1080 * 3:
                raise RuntimeError('Incomplete source frame')
            yield Image.frombytes('RGB', (1920, 1080), raw)
    finally:
        process.stdout.close()
        process.wait()
        if process.returncode:
            raise RuntimeError('Source decoding failed')


def smooth(t):
    t = max(0, min(1, t))
    return t * t * (3 - 2 * t)


def lerp(a, b, t):
    return tuple(x + (y - x) * smooth(t) for x, y in zip(a, b))


# Camera: zoom and normalized horizontal/vertical position in the app crop.
# The crop removes desktop/browser chrome and the presenter inset.
QUERY = (1.30, 0.0, 0.05)
ANSWER = (1.60, 0.55, 0.0)
FILTERS = (1.45, 0.05, 0.15)
RESULTS = (1.55, 0.75, 0.65)
SOURCES = (1.60, 1.0, 0.80)


def compose(frame, camera, label):
    zoom, px, py = camera
    width, height = 1440 / zoom, 720 / zoom
    left, top = 230 + (1440 - width) * px, 244 + (720 - height) * py
    crop = frame.crop((round(left), round(top), round(left + width), round(top + height)))
    crop = crop.resize((1536, 768), Image.Resampling.LANCZOS)
    canvas = Image.new('RGB', SIZE, '#faf8ff')
    canvas.paste(crop, (32, 104))
    draw = ImageDraw.Draw(canvas)
    draw.text((32, 18), label.upper(), fill=LABEL_COLOR, font=label_font)
    draw.text((1568, 18), 'ServiceScoutSG', fill='#0F172A', font=font, anchor='ra')
    return canvas


encoder = subprocess.Popen([
    FFMPEG, '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24',
    '-s', '1600x900', '-r', str(FPS), '-i', 'pipe:0', '-an',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '25', '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart', str(OUT / 'preview.mp4')
], stdin=subprocess.PIPE)
contact = Image.new('RGB', (1200, 900), 'white')
frame_number = 0
previous = None
first_source = None


def emit(frame):
    global frame_number, previous
    encoder.stdin.write(frame.tobytes())
    if frame_number in [0, 60, 120, 180, 240, 300, 360, 420, 480]:
        i = [0, 60, 120, 180, 240, 300, 360, 420, 480].index(frame_number)
        contact.paste(frame.resize((400, 225)), ((i % 3) * 400, (i // 3) * 300))
        ImageDraw.Draw(contact).text(((i % 3) * 400 + 8, (i // 3) * 300 + 235),
                                    f'{frame_number / FPS:.0f}s', fill='black')
    if frame_number == 180:
        frame.save(OUT / 'poster.webp', quality=88)
    previous = frame
    frame_number += 1


# 0–3: query; 3–6: answer arrives, both at 3x. Hold answer for 2 seconds.
for i, source in enumerate(footage(38, 6)):
    if first_source is None:
        first_source = source.copy()
    camera = QUERY if i < 90 else lerp(QUERY, ANSWER, (i - 90) / 24)
    emit(compose(source, camera, 'Ask'))
for _ in range(60):
    emit(compose(source, ANSWER, 'Ask'))

# 8–14: filter and compare. Preserve actual changes from the recording.
transition = previous.copy()
for i, source in enumerate(footage(100, 6)):
    camera = FILTERS if i < 90 else lerp(FILTERS, RESULTS, (i - 90) / 30)
    frame = compose(source, camera, 'Compare')
    if i < 9:
        frame = Image.blend(transition, frame, smooth(i / 8))
    emit(frame)

# 14–18: inspect pricing evidence, with a 2-second result hold.
transition = previous.copy()
for i, source in enumerate(footage(116, 2, speed=2)):
    frame = compose(source, lerp(RESULTS, SOURCES, i / 24), 'Inspect sources')
    if i < 9:
        frame = Image.blend(transition, frame, smooth(i / 8))
    emit(frame)
for _ in range(60):
    emit(compose(source, SOURCES, 'Inspect sources'))

# 18–20: return to the exact opening frame for a seamless loop boundary.
transition = previous.copy()
for i in range(60):
    frame = compose(first_source, lerp((1.6, 0.0, 0.05), QUERY, i / 59), 'Ask')
    if i < 18:
        frame = Image.blend(transition, frame, smooth(i / 17))
    emit(frame)
encoder.stdin.close()
encoder.wait()
if encoder.returncode or frame_number != 600:
    raise RuntimeError(f'Render failed: {frame_number} frames')
contact.save('/private/tmp/servicesg-preview-contact.jpg')
print(f'Rendered {frame_number} frames; MP4: {(OUT / "preview.mp4").stat().st_size:,} bytes')
