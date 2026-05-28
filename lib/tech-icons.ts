export interface TechIcon {
  name: string
  icon: string
  url: string
}

export const techIcons: Record<string, TechIcon> = {
  // Frontend
  'React': {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    url: ''
  },
  'Next.js': {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    url: ''
  },
  'Tailwind CSS': {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    url: ''
  },

  // Backend
  'Node.js': {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    url: ''
  },
  'Express': {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    url: ''
  },

  // Database & Tools
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    url: ''
  },
  'MySQL': {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    url: ''
  },
  'Git': {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    url: ''
  },

  // Languages
  'Python': {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    url: ''
  },
  'TypeScript': {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    url: ''
  },

  // Deployment
  'Vercel': {
    name: 'Vercel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    url: ''
  },
  'Docker': {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    url: ''
  },
  'Flask': {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    url: ''
  },

  // Frameworks & Libraries (AI/ML)
  'PyTorch': {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    url: ''
  },
  'TensorFlow': {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    url: ''
  },
  'Hugging Face Transformers': {
    name: 'Hugging Face',
    icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    url: ''
  },
  'OpenCV': {
    name: 'OpenCV',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    url: ''
  },
}

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name]
}
