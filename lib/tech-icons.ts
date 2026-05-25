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
    url: 'https://react.dev'
  },
  'Next.js': {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    url: 'https://nextjs.org'
  },
  'Tailwind CSS': {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    url: 'https://tailwindcss.com'
  },

  // Backend
  'Node.js': {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    url: 'https://nodejs.org'
  },
  'Express': {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    url: 'https://expressjs.com'
  },

  // Database & Tools
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    url: 'https://postgresql.org'
  },
  'MySQL': {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    url: 'https://mysql.com'
  },
  'Git': {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    url: 'https://git-scm.com'
  },

  // Languages
  'Python': {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    url: 'https://python.org'
  },
  'TypeScript': {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    url: 'https://typescriptlang.org'
  },

  // Deployment
  'Vercel': {
    name: 'Vercel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    url: 'https://vercel.com'
  },
  'Docker': {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    url: 'https://docker.com'
  },
  'Flask': {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    url: 'https://flask.palletsprojects.com'
  },

  // Frameworks & Libraries (AI/ML)
  'PyTorch': {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    url: 'https://pytorch.org'
  },
  'TensorFlow': {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    url: 'https://tensorflow.org'
  },
  'Hugging Face Transformers': {
    name: 'Hugging Face',
    icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    url: 'https://huggingface.co'
  },
  'OpenCV': {
    name: 'OpenCV',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    url: 'https://opencv.org'
  },
}

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name]
}
