// Portfolio Data Configuration
// Edit this file to customize your portfolio content

export const personalInfo = {
  name: 'Eugene',
  title: 'Software Developer & Designer',
  tagline: 'I build accessible, pixel-perfect digital experiences for the web.',
  description:
    'Passionate about crafting thoughtful design with robust engineering, creating experiences that not only look great but are meticulously built for performance and usability.',
  email: 'your.email@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
}

export const about = {
  subtitle: 'Software Developer & Designer',
  location: 'Singapore',
  locationNote: 'Open to remote opportunities worldwide',
  focusAreas: {
    primary: 'Full Stack Development & AI Engineering',
    secondary: 'Computer Vision, Web Applications, Machine Learning',
  },
  techHighlights: [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Node.js',
    'Docker',
    'PostgreSQL',
    'PyTorch',
    'TensorFlow',
    'AWS',
  ],
  stats: [
    { value: '4+', label: 'Years Coding' },
    { value: '6+', label: 'Projects Completed' },
    { value: '2', label: 'Companies Worked' },
    { value: '20+', label: 'Technologies' },
  ],
  introduction: [
    'I am an ambitious and driven Software Engineer based in Singapore, with a passion for creating innovative solutions and building impactful products.',
    'I am also a Computer Science graduate from the University of Adelaide, where I gained strong fundamentals in full-stack development and machine learning engineering.',
    'Building projects and solutions across diverse domains from AI-powered to web applications over 4+ years, I was able to hone my expertise in modern tech stacks.',
    'My experience spans across both technical and non-technical realms, complemented with international exposure, within Agile environments, allowing me to develop a better understanding of user needs. I believe in building solutions that can achieve a balance between delivering great UX and code that scales.',
    'Outside of tech, I enjoy travelling 🏔️ and meeting new people 🌏. Feel free to reach out if you have any idea you want to explore together or simply want to chat about tech! 💡',
  ],
  quote: 'Every new opportunity is a chance for me to craft a future that challenges the status quo.',
}

// Tech stack for About page (detailed categories)
export const techStack = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'SQL'],
  frontend: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'Flask'],
  databases: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  tools: ['Git', 'Docker', 'Kubernetes', 'GitHub', 'GCP', 'AWS'],
}

// Tech stack for main page (grouped differently)
export const techStackMain = {
  frontend: ['React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express'],
  'database-tools': ['PostgreSQL', 'MySQL', 'Git'],
  languages: ['Python', 'TypeScript'],
  deployment: ['Vercel', 'Docker', 'Flask'],
  'frameworks-libraries': ['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'OpenCV', 'ONNX'],
}

export const education = [
  {
    institution: 'University of Adelaide',
    degree: 'Bachelor of Computer Science (Honours)',
    period: '2021 - 2025',
    description: 'Major in Artificial Intelligence and Software Engineering',
    achievements: [
      'Relevant coursework: Data Structures and Algorithms, Machine Learning, Artificial Intelligence,'+
      'Operating Systems, Web Development',
    ],
  },
]

export const universityRoles = [
  // {
  //   title: 'Teaching Assistant',
  //   course: 'Programming Methodology',
  //   period: 'Aug 2023 - Dec 2023',
  //   description: 'Teaching Assistant for a class of 15 students',
  //   responsibilities: [
  //     'Conducted weekly tutorial sessions covering Java programming fundamentals',
  //     'Graded assignments and provided detailed feedback on data structures and algorithms',
  //     'Held office hours to assist students with debugging and conceptual understanding',
  //   ],
  // },
  // {
  //   title: 'Teaching Assistant',
  //   course: 'Data Management and Visualisation',
  //   period: 'Jan 2023 - May 2023',
  //   description: 'Teaching Assistant for a class of 35 students',
  //   responsibilities: [
  //     'Taught SQL query optimization and database design principles',
  //     'Created visualization tutorials using Tableau and Python',
  //     'Assisted in exam preparation and assignment grading',
  //   ],
  // },
  // {
  //   title: 'Teaching Assistant',
  //   course: 'Enterprise Systems Interface Design',
  //   period: 'Aug 2022 - Dec 2022',
  //   description: 'Graded a class of 35 for full-stack projects',
  //   responsibilities: [
  //     'Evaluated full-stack web applications built with modern frameworks',
  //     'Provided technical guidance on React, Node.js, and database integration',
  //     'Mentored students on software engineering best practices',
  //   ],
  // },
]

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  summary?: string
  achievements: string[]
  technologies: string[]
}

export const experiencesWork: ExperienceItem[] = [
  // {
  //   company: 'TikTok/ByteDance',
  //   role: 'Software Engineer',
  //   period: 'Jun 2023 - Dec 2023',
  //   location: 'Singapore',
  //   achievements: [
  //     'Developed and optimized data pipelines using Go and Python Flask',
  //     'Implemented REST APIs serving millions of users daily',
  //     'Built business intelligence dashboards with Hive',
  //   ],
  //   technologies: ['Go', 'Python Flask', 'Hive', 'REST APIs'],
  // },
  //{
//     company: 'Urban Sharing',
//     role: 'Full-stack Developer',
//     period: 'Jan 2023 - May 2023',
//     location: 'Oslo, Norway (Remote)',
//     achievements: [
//       'Developed microservices using TypeScript and Express',
//       'Implemented GraphQL APIs, reducing response times by 40%',
//       'Containerized applications using Docker and Kubernetes',
//     ],
//     technologies: ['TypeScript', 'Express', 'GraphQL', 'Docker', 'Kubernetes'],
//   },
//   {
//     company: 'KABAM Robotics',
//     role: 'Software Engineer',
//     period: 'Jun 2022 - Dec 2022',
//     location: 'Singapore',
//     achievements: [
//       'Built responsive UIs for robot control systems',
//       'Developed Python backend services for robot coordination',
//       'Implemented real-time monitoring dashboards',
//     ],
//     technologies: ['JavaScript', 'Material UI', 'Python', 'Docker'],
//   },
// ]

// const projects = [
//   {
//     title: 'Repair.sg',
//     description: 'Full-stack platform for maintenance services',
//     longDescription: 'A comprehensive web application for both customers and administrators at leading maintenance service startup in Singapore',
//     technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Clerk', 'Tailwind CSS', 'Shadcn UI'],
//     githubUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//   },
//   {
//     title: 'Infinite Carpool',
//     description: 'Carpooling coordination platform',
//     longDescription: 'Web app designed to help coworkers carpool to and from work by organizing shared rides efficiently',
//     technologies: ['React.js', 'JavaScript', 'Material UI', 'Firebase'],
//     githubUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//   },
//   {
//     title: 'Novus Hotel',
//     description: 'Data engineering and analytics platform',
//     longDescription: 'Simulated client for a hotel owner, serving as a platform for data engineering to enhance business decision-making',
//     technologies: ['Apache Airflow', 'Kafka', 'BigQuery', 'Python', 'Tableau', 'Machine Learning'],
//     githubUrl: 'https://github.com',
//     videoUrl: '/public/novushotel/novusHotel.mp4'
//   },
//   {
//     title: 'DropAndGo',
//     description: 'Storage solutions web application',
//     longDescription: 'Web app designed for physical stores to offer convenient storage solutions to customers who need temporary storage',
//     technologies: ['React.js', 'TypeScript', 'Express.js', 'Node.js', 'MongoDB'],
//     githubUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//   },
//   {
//     title: 'Library Management System',
//     description: 'Modernized book borrowing system',
//     longDescription: 'Web application that streamlines and modernizes the book borrowing process in libraries',
//     technologies: ['Java', 'Session States', 'REST APIs', 'SQL'],
//     githubUrl: 'https://github.com',
//   },
//   {
//     title: 'Fit4Life',
//     description: 'Virtual clothing try-on platform',
//     longDescription: 'Web application that enables users to virtually try on clothing using a personalized 3D avatar',
//     technologies: ['React.js', 'JavaScript', 'Material UI', 'Blender', 'Unity'],
//     githubUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//   },
  {
    company: 'Jireh Group Asia',
    role: 'Software Engineer',
    period: 'Mar 2025 - Present',
    location: 'Singapore',
    achievements: [
      'Worked on Medical Imaging Classification using SOTA deep learning models Xception and NASNetLarge',
      'Performed algorithmic improvements on the model performance by benchmarking both architectures across extensive multi-month clinical datasets'+
      ', increasing model accuracy from 78% to 87% through parameter tuning and cross-validation',
      'Designed and implemented a multimodal 2-stage pipeline combining NASNetLarge binary classification with state-of-the-art YOLOv12 multi-class object detection, ' +
      'to capture more lower-represented and hard to identify cases',
      'Utilised bounding-box validation and precision-recall threshold calibration to maintain 85% healthy-case accuracy while improving abnormal detection reliability,' +
      'by 3x of baseline model',
      'Led the research development of introducing synthetic datasets with generative AI to boost dataset robustness and integrated 10% into the pipeline',
      'Integrated models into a DICOM-compatible inference API, suitable of handling load of up to 100k images per call',
    ],
    technologies: ['Computer Vision', 'Deep Learning', 'YOLO', 'Python'],
  },
  {
    company: 'Advanced Micro Foundry',
    role: 'Software Developer Intern',
    period: 'Dec 2023 - Feb 2024',
    location: 'Singapore',
    achievements: [
      'Adapted a genetic algorithm from Python to C, improving optimisation runtime by 2x and enabling parameter tuning across a 32-channel optical detection chip',
      'Applied the algorithm to identify the optimal analog voltage range for photodetection, by analyzing large sets of voltage-response data', 
      'Validated algorithm outputs through photovoltage testing across multiple illumination levels and voltage sweeps, improving detector signal stability, minimising measurement variance by 25%',
      'Implemented real-time dashboard with React and Material UI to visualize data and analyze program output',
    ],
    technologies: ['React','JavaScript', 'Material UI', 'Python', 'C'],
  },  
]

export const experiencesCoCurricular: ExperienceItem[] = [
  {
    company: 'Taltech (Tallinn University of Technology)',
    role: 'University Exchange Program',
    period: 'Jun 2024 - Jun 2024',
    location: 'Tallinn, Estonia',
    summary: '1 of 14 students who participated in a cybersecurity themed exchange program to TalTech',
    achievements: [
      'Fine-tuned a honeypot powered by an open-source LLM to mimic realistic web traffic, gaining insight into how attackers probe AI-exposed systems',
      'Participated in a Capture the Flag (CTF) challenge as part of a team of 3, designing structured adversarial prompt tests on GPT models in a controlled environment and documenting prompt-injection pathways',
      'Presented practical defenses (prompt guardrails, response filtering) to reduce LLM exploitability to a panel of judges from TalTech and the University of Adelaide',
      'Worked closely with an international team of students at TalTech to analyze AI-security case studies across Estonia and Australia, producing actionable security insights',
    ],
    technologies: ['LLM', 'HTTP', 'AI Security', 'Cybersecurity'],
  },
  {
    company: 'University of Adelaide Singapore Students Association',
    role: 'Tech Faculty Lead',
    period: 'Oct 2022 - Oct 2023',
    location: 'Adelaide, Australia',
    summary: 'Main Committee member of a student club of over 300 students',
    achievements: [
      'Managed and executed decisions as part of a 14-man committee pertaining to the development of the association of over 500 students (UoASSA)', 
      'Actively led student-life initiatives for the faculty of 50+ students to strengthen cross-cohort and inter-faculty engagement',
      'Acted as a committee liaison to relay updates from leadership and consolidate feedback from faculty members',
      'Coordinated with stakeholders in Adelaide and Singapore to support events and seek professional opportunities',
    ],
    technologies: ['Leadership', 'Community Building', 'Event Coordination'],
  },
]

export const projects = [
  {
    title: 'Repair.sg',
    description: 'Full-stack platform for maintenance services',
    longDescription: 'A comprehensive web application for both customers and administrators at leading maintenance service startup in Singapore',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Clerk', 'Tailwind CSS', 'Shadcn UI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Infinite Carpool',
    description: 'Carpooling coordination platform',
    longDescription: 'Web app designed to help coworkers carpool to and from work by organizing shared rides efficiently',
    technologies: ['React.js', 'JavaScript', 'Material UI', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Novus Hotel',
    description: 'Data engineering and analytics platform',
    longDescription: 'Simulated client for a hotel owner, serving as a platform for data engineering to enhance business decision-making',
    technologies: ['Apache Airflow', 'Kafka', 'BigQuery', 'Python', 'Tableau', 'Machine Learning'],
    githubUrl: 'https://github.com',
    videoUrl: '/novushotel/novusHotel.mp4'
  },
  {
    title: 'DropAndGo',
    description: 'Storage solutions web application',
    longDescription: 'Web app designed for physical stores to offer convenient storage solutions to customers who need temporary storage',
    technologies: ['React.js', 'TypeScript', 'Express.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Library Management System',
    description: 'Modernized book borrowing system',
    longDescription: 'Web application that streamlines and modernizes the book borrowing process in libraries',
    technologies: ['Java', 'Session States', 'REST APIs', 'SQL'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Fit4Life',
    description: 'Virtual clothing try-on platform',
    longDescription: 'Web application that enables users to virtually try on clothing using a personalized 3D avatar',
    technologies: ['React.js', 'JavaScript', 'Material UI', 'Blender', 'Unity'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]
