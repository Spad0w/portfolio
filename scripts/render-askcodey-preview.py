"""Render a 32-second AskCodey feature demo without feature labels.

Usage: python render-askcodey-preview.py SOURCE.mp4 MANROPE.ttf
Requires Pillow and imageio-ffmpeg as render-time dependencies only.
Source is the user-supplied 1280x720, 30 fps AskCodey presentation.
Only clean app footage within 3:11–4:58 is used; source is never modified.
"""
import argparse
import subprocess
import tempfile
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
parser.add_argument('font', type=Path)
args = parser.parse_args()
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
OUT = Path(__file__).resolve().parents[1] / 'public/projects/askcodey'
OUT.mkdir(parents=True, exist_ok=True)
FPS = 30
SIZE = (1600, 900)
font = ImageFont.truetype(str(args.font), 56)
font.set_variation_by_axes([650])


def footage(start, duration, speed=1):
    process = subprocess.Popen([
        FFMPEG, '-v', 'error', '-ss', str(start), '-i', str(args.source),
        '-an', '-vf', f'setpts=(PTS-STARTPTS)/{speed},fps={FPS}',
        '-frames:v', str(round(duration * FPS)), '-f', 'rawvideo',
        '-pix_fmt', 'rgb24', 'pipe:1',
    ], stdout=subprocess.PIPE)
    try:
        for _ in range(round(duration * FPS)):
            data = bytearray()
            while len(data) < 1280 * 720 * 3:
                chunk = process.stdout.read(1280 * 720 * 3 - len(data))
                if not chunk:
                    raise RuntimeError('Incomplete source frame; expected 1280x720 footage')
                data.extend(chunk)
            yield Image.frombytes('RGB', (1280, 720), bytes(data))
    finally:
        process.stdout.close()
        process.wait()
        if process.returncode:
            raise RuntimeError('Video decoder failed')


def smooth(t):
    t = max(0, min(1, t))
    return t * t * (3 - 2 * t)


def move(a, b, t):
    return tuple(x + (y - x) * smooth(t) for x, y in zip(a, b))


# Camera rectangles are (left, top, width), with a 2:1 aspect ratio.
# Each focuses on real pixels; no UI text is reconstructed or overlaid.
WIDE = (72, 100, 1136)
SELECTION = (330, 145, 560)
PROBLEM = (82, 199, 565)
EDITOR = (635, 173, 566)
TESTS = (625, 425, 580)
HINT = (345, 101, 584)
CHAT_CONTEXT = (285, 217, 700)
CHAT_RESPONSE = (450, 239, 380)


def compose(source, camera):
    left, top, width = camera
    height = width / 2
    crop = source.crop((round(left), round(top), round(left + width), round(top + height)))
    canvas = Image.new('RGB', SIZE, '#faf8ff')
    canvas.paste(crop.resize((1536, 768), Image.Resampling.LANCZOS), (32, 104))
    ImageDraw.Draw(canvas).text((1568, 18), 'AskCodey', font=font, fill='#0F172A', anchor='ra')
    return canvas


with tempfile.TemporaryDirectory(prefix='askcodey-render-') as temp:
    temp = Path(temp)
    encoder = subprocess.Popen([
        FFMPEG, '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24',
        '-s', '1600x900', '-r', str(FPS), '-i', 'pipe:0', '-an',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', '23', '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart', str(temp / 'preview.mp4'),
    ], stdin=subprocess.PIPE)
    contact = Image.new('RGB', (1200, 1500), '#eeeeee')
    frame_number = 0
    previous = None
    opening_source = None

    def emit(frame):
        global frame_number, previous
        encoder.stdin.write(frame.tobytes())
        if frame_number % 60 == 0:
            index = frame_number // 60
            x, y = index % 3 * 400, index // 3 * 250
            contact.paste(frame.resize((400, 225)), (x, y))
            ImageDraw.Draw(contact).text((x + 8, y + 229), f'{frame_number / FPS:.0f}s', fill='black')
        if frame_number == 300:
            frame.save(temp / 'poster.webp', quality=90)
        previous = frame
        frame_number += 1

    try:
        # 0–3s: actual question menu selection, source 3:23–3:26.
        for i, source in enumerate(footage(203, 3)):
            if opening_source is None:
                opening_source = source.copy()
            emit(compose(source, move(WIDE, SELECTION, i / 24)))

        # 3–7s: read the selected problem.
        for i, source in enumerate(footage(207, 4)):
            emit(compose(source, move(SELECTION, PROBLEM, i / 24)))

        # 7–8s: chat prompt, then the original coaching exchange.
        transition = previous.copy()
        for i, source in enumerate(footage(276, 1)):
            frame = compose(source, move(CHAT_CONTEXT, CHAT_RESPONSE, i / 29))
            if i < 9:
                frame = Image.blend(transition, frame, smooth(i / 8))
            emit(frame)

        # 8–12s: keep the first coaching exchange still and large enough to read.
        for source in footage(277, 2):
            emit(compose(source, CHAT_RESPONSE))
        for _ in range(60):
            emit(compose(source, CHAT_RESPONSE))

        # 12–16s: populated Python editor. Skip the baked promotional overlay.
        transition = previous.copy()
        for i, source in enumerate(footage(224, 4)):
            frame = compose(source, move(CHAT_RESPONSE, EDITOR, i / 30))
            if i < 12:
                frame = Image.blend(transition, frame, smooth(i / 11))
            emit(frame)

        # 16–19s: actual failed-test results, including expected/actual output.
        for i, source in enumerate(footage(228, 3)):
            emit(compose(source, move(EDITOR, TESTS, i / 24)))

        # 19–23s: contextual AI hint. Faster footage, then a readable hold.
        for i, source in enumerate(footage(231, 2, speed=2)):
            emit(compose(source, move(TESTS, HINT, i / 24)))
        for _ in range(60):
            emit(compose(source, HINT))

        # 23–25.5s: pull back from the hint to see the code correction.
        # Source 4:03–4:10, accelerated 2.8x.
        for i, source in enumerate(footage(243, 2.5, speed=2.8)):
            emit(compose(source, move(HINT, WIDE, i / 30)))

        # 25.5–28s: skip the idle hint, retain final edit/run and passing result.
        # Source 4:19–4:25, accelerated 2.4x.
        for i, source in enumerate(footage(259, 2.5, speed=2.4)):
            emit(compose(source, move(WIDE, TESTS, (i - 30) / 44)))
        # 28–30s: readable hold on all three passing test cases.
        for _ in range(60):
            emit(compose(source, TESTS))

        # 30–32s: return to the original composition and exact opening pixels.
        transition = previous.copy()
        for i in range(60):
            frame = compose(opening_source, move(SELECTION, WIDE, i / 59))
            if i < 18:
                frame = Image.blend(transition, frame, smooth(i / 17))
            emit(frame)
    finally:
        encoder.stdin.close()
        encoder.wait()
    if encoder.returncode or frame_number != 960:
        raise RuntimeError(f'Render failed: {frame_number} frames')
    # Publish only complete outputs, so a running site never sees a partial video.
    (temp / 'preview.mp4').replace(OUT / 'preview.mp4')
    (temp / 'poster.webp').replace(OUT / 'poster.webp')
    contact.save('/private/tmp/askcodey-preview-contact.jpg')
    print(f'Rendered {frame_number} frames; MP4: {(OUT / "preview.mp4").stat().st_size:,} bytes')
