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

export type WorkDetails = {
  cardHighlights: string[]
  overview: string
  approach: { title: string; description: string }[]
  results: string[]
}

export type ExperienceItem = {
  company: string
  logoSrc?: string
  role: string
  period: string
  location: string
  workDetails?: WorkDetails
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
    logoSrc: '/logos/jireh-group-asia.jpg',
    role: 'Software Engineer',
    period: 'Mar 2025 - Present',
    location: 'Singapore',
    workDetails: {
      cardHighlights: [
        'Built a self-hosted two-stage classification and detection pipeline which improved medical-image classification accuracy from 78% to 87% that supports identification of underrepresented cases.',
        'Integrated models into a DICOM-compatible inference API supporting up to 100,000 images per call.',
      ],
      overview: 'As a software engineer at Jireh Group Asia, I work on medical-image classification, from benchmarking deep learning models to integrating them into an inference API. The work focuses on identifying difficult and underrepresented cases while maintaining healthy-case accuracy.',
      approach: [
        { title: 'Benchmarking the models', description: 'Benchmarked Xception and NASNetLarge across clinical datasets spanning multiple months. Used parameter tuning and cross-validation to improve classification performance.' },
        { title: 'Combining classification and detection', description: 'Designed and implemented a two-stage pipeline combining NASNetLarge binary classification with YOLOv12 multi-class object detection to capture underrepresented and hard-to-identify cases.' },
        { title: 'Calibrating predictions', description: 'Used bounding-box validation and precision–recall threshold calibration to balance healthy-case accuracy with more reliable abnormal-case detection.' },
        { title: 'Exploring synthetic data', description: 'Led research into generative AI datasets to improve dataset robustness, integrating 10% synthetic data into the pipeline.' },
        { title: 'Integrating inference', description: 'Integrated the models into a DICOM-compatible inference API capable of handling up to 100,000 images per call.' },
      ],
      results: [
        'Classification accuracy increased from 78% to 87% through parameter tuning and cross-validation.',
        'Maintained 85% healthy-case accuracy while improving abnormal detection reliability to 3× the baseline model.',
        'Supported inference batches of up to 100,000 images per API call.',
      ],
    },
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
    logoSrc: '/logos/advanced-micro-foundry.jpg',
    role: 'Software Developer Intern',
    period: 'Dec 2023 - Feb 2024',
    location: 'Singapore',
    workDetails: {
      cardHighlights: [
        `Ported a genetic algorithm from Python to C, making optimisation runtime twice as fast 
        across a 32-channel optical detector.`,
        `Calibrated photodetection voltages with the application of the genetic algorithm to identify 
        the optimal voltage range for photodetection and reduced measurement variance by 25%.`,
        `Built a real-time dashboard with React and Material UI that auto-updates and replots
         as new test data streams in from program output.`,
      ],
      overview: 'During my tenure at Advanced Micro Foundry, I worked on optimisation and validation for a 32-channel optical detection chip, alongside a dashboard for analysing the resulting data.',
      approach: [
        { title: 'Porting the optimisation algorithm', description: 'Adapted a genetic algorithm from Python to C to improve runtime and enable parameter tuning across the chip’s 32 channels.' },
        { title: 'Finding the voltage range', description: 'Analysed voltage-response datasets and applied the algorithm to identify the optimal analogue voltage range for photodetection.' },
        { title: 'Validating with measurements', description: 'Tested algorithm outputs using photovoltage measurements across multiple illumination levels and voltage sweeps, improving detector signal stability and reducing measurement variance.' },
        { title: 'Making outputs visible', description: `Built a real-time dashboard with React and Material UI that listens for incoming program output and updates its charts live as new program output
           flows in via polling and without need for manual reloads.`},
      ],
      results: [
        'Optimisation ran twice as fast after porting the genetic algorithm from Python to C.',
        'Measurement variance decreased by 25% through photovoltage testing and validation.',
        'Enabled parameter tuning across a 32-channel optical detection chip.',
      ],
    },
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
    period: 'Jun 2024 - Jun 2024, Summer Term',
    location: 'Tallinn, Estonia',
    summary: '-- 1 of 14 students who participated in a cybersecurity themed exchange program to TalTech',
    achievements: [
      'Fine-tuned a honeypot powered by an open-source LLM to mimic realistic web traffic, gaining insight into how attackers probe AI-exposed systems',
      'Participated in a Capture the Flag (CTF) challenge as part of a team of 3, designing structured adversarial prompt tests on GPT models in a controlled environment and documenting prompt-injection pathways',
      'Presented practical defenses (prompt guardrails, response filtering) to reduce LLM exploitability to a panel of judges from TalTech and the University of Adelaide',
      'Worked closely with an international team of students at TalTech to analyze AI-security case studies across Estonia and Australia, producing actionable security insights',
    ],
    technologies: ['LLM Security', 'Red/Blue Team', 'Deception Engineering', 'AI Governance'],
  },
  {
    company: 'University of Adelaide Singapore Students Association',
    role: 'Tech Faculty Rep & Community Dev',
    period: 'Oct 2022 - Oct 2023',
    location: 'Adelaide, Australia',
    summary: '-- Main Committee member of a student community of over 300 students from Singapore',
    achievements: [
      'Managed and executed decisions as part of a 14-man committee pertaining to the development of the association of over 500 students (UoASSA)', 
      'Actively led student-life initiatives for the faculty of 50+ students to strengthen cross-cohort and inter-faculty engagement',
      'Acted as a committee liaison to relay updates from leadership and consolidate feedback from faculty members',
      'Coordinated with stakeholders in Adelaide and Singapore to support events and seek professional opportunities',
    ],
    technologies: ['Leadership', 'Community Building', 'Event Coordination'],
  },
]
