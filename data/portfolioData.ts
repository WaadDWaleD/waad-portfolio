export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI & ML' | 'Front-End' | 'All';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level: string;
    tag?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses: string[];
  achievements: string[];
}

export const personalInfo = {
  name: 'Waad Waled Elsayed Ahmed',
  shortName: 'Waad Waled',
  title: 'Software Engineer & AI Specialist',
  titles: [
    'Software Engineer',
    'AI & Deep Learning Enthusiast',
    'Frontend Developer',
    'Computer Vision Specialist',
  ],
  bio: 'Computer Science and Artificial Intelligence graduate from Capital University with hands-on expertise in building scalable, responsive web applications and training intelligent deep learning models. Passionate about solving complex challenges at the intersection of modern web interfaces and cutting-edge AI.',
  location: 'Giza, Egypt',
  email: 'waadwaled404@gmail.com',
  phone: '01060329799',
  phoneInternational: '+20 106 032 9799',
  links: {
    linkedin: 'https://linkedin.com/in/waad-waled-4a210127b',
    github: 'https://github.com/WaadDWaleD',
    portfolio: 'https://waadwaled404.getportify.com',
  },
  stats: [
    { label: 'Years of CS/AI Study', value: '4' },
    { label: 'Core Projects Built', value: '10+' },
    { label: 'Tech Stack Competencies', value: '15+' },
    { label: 'Academic & Dev Milestones', value: '100%' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & AI',
    description: 'Designing intelligent architectures, predictive models, and real-time vision pipelines.',
    iconName: 'BrainCircuit',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Machine Learning', level: 'Advanced', tag: 'Core' },
      { name: 'Deep Learning', level: 'Advanced', tag: 'Neural Nets' },
      { name: 'Computer Vision', level: 'Advanced', tag: 'OpenCV' },
      { name: 'TensorFlow', level: 'Proficient', tag: 'Framework' },
      { name: 'MediaPipe', level: 'Proficient', tag: 'Tracking' },
      { name: 'Scikit-learn', level: 'Advanced', tag: 'ML Ops' },
      { name: 'Data Preprocessing & EDA', level: 'Advanced', tag: 'Data' },
    ],
  },
  {
    title: 'Front-End Development',
    description: 'Crafting responsive, pixel-perfect, accessible, and high-performance web applications.',
    iconName: 'Layout',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'React.js', level: 'Advanced', tag: 'Library' },
      { name: 'Next.js (App Router)', level: 'Advanced', tag: 'Framework' },
      { name: 'Tailwind CSS', level: 'Expert', tag: 'Styling' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Core' },
      { name: 'HTML5 & Semantic Web', level: 'Expert', tag: 'Markup' },
      { name: 'CSS3 & Modern Animations', level: 'Advanced', tag: 'Design' },
      { name: 'Bootstrap', level: 'Proficient', tag: 'UI' },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Multi-paradigm languages for algorithmic efficiency and robust software design.',
    iconName: 'Code2',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Python', level: 'Advanced', tag: 'AI / Backend' },
      { name: 'JavaScript', level: 'Advanced', tag: 'Web' },
      { name: 'C Language', level: 'Proficient', tag: 'Systems' },
      { name: 'Java', level: 'Proficient', tag: 'OOP' },
      { name: 'SQL', level: 'Proficient', tag: 'Queries' },
    ],
  },
  {
    title: 'Databases & Tools',
    description: 'Modern development workflow, version control, and system environments.',
    iconName: 'Database',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'MySQL', level: 'Proficient', tag: 'RDBMS' },
      { name: 'Git & GitHub', level: 'Advanced', tag: 'VCS' },
      { name: 'Linux (Ubuntu)', level: 'Proficient', tag: 'OS' },
      { name: 'Windows Environment', level: 'Expert', tag: 'OS' },
      { name: 'RESTful APIs', level: 'Advanced', tag: 'Integration' },
      { name: 'VS Code & Jupyter', level: 'Expert', tag: 'IDEs' },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'esl-recognition',
    title: 'Egyptian Sign Language Recognition System',
    subtitle: 'Graduation Project • AI & Computer Vision',
    description:
      'A deep learning and computer vision system designed to bridge communication barriers for the deaf community. Utilizes real-time hand landmark extraction with MediaPipe, convolutional and recurrent neural architectures in TensorFlow, and real-time inference for both sign gesture classification and facial emotion recognition.',
    category: 'AI & ML',
    tags: ['TensorFlow', 'Computer Vision', 'MediaPipe', 'OpenCV', 'Deep Learning', 'Python'],
    githubUrl: 'https://github.com/abdullahsherdy/ESL-Egyptian-Sign-Language-Recognition',
    liveUrl: 'https://github.com/abdullahsherdy/ESL-Egyptian-Sign-Language-Recognition',
    featured: true,
    highlights: [
      'Real-time 21-point 3D hand landmarks tracking via MediaPipe',
      'Dual-pipeline emotion recognition + gesture classification',
      'Optimized neural inference pipeline for low-latency live video feeds',
      'Built as an assistive technology solution for Egyptian dialect users',
    ],
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Web Application',
    subtitle: 'Route Academy • Full-Featured Storefront',
    description:
      'A modern e-commerce platform built with React, Next.js, and Tailwind CSS. Implements dynamic catalog search and category filtering, responsive product view modals, interactive shopping cart management, user authentication flows, and live REST API consumption.',
    category: 'Front-End',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Context API'],
    githubUrl: 'https://github.com/WaadDWaleD/E-commerce',
    liveUrl: 'https://github.com/WaadDWaleD/E-commerce',
    featured: true,
    highlights: [
      'Full product exploration with category filtering & instant search',
      'Persistent cart management and simulated checkout pipeline',
      'Optimized client and server rendering for high Lighthouse scores',
      'Clean UI with fluid mobile-first responsive interactions',
    ],
  },
  {
    id: 'hotel-cancellation',
    title: 'Hotel Booking Cancellation Prediction',
    subtitle: 'GTC Machine Learning Pipeline',
    description:
      'An end-to-end data science and machine learning pipeline developed to forecast customer booking cancellations. Features comprehensive exploratory data analysis (EDA), automated outlier removal, categorical encoding, and classification model tuning using Python and Scikit-learn.',
    category: 'AI & ML',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'EDA', 'Data Science'],
    githubUrl: 'https://github.com/WaadDWaleD',
    liveUrl: 'https://github.com/WaadDWaleD',
    featured: false,
    highlights: [
      'Engineered domain-specific features reducing false positive cancellations',
      'Comprehensive EDA revealing seasonal and lead-time churn trends',
      'Benchmarked Random Forest, Logistic Regression, and Gradient Boosting models',
      'Delivered predictive insights to mitigate hospitality revenue loss',
    ],
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Computer Science and Artificial Intelligence',
  institution: 'Capital University',
  location: 'Cairo, Egypt',
  period: '09/2022 – 06/2026',
  description:
    'Comprehensive 4-year undergraduate degree combining core computer science fundamentals with advanced specializations in Artificial Intelligence, Deep Learning, and Computer Vision.',
  courses: [
    'Deep Learning & Neural Networks',
    'Computer Vision & Image Processing',
    'Machine Learning & Data Mining',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Systems & SQL Design',
    'Operating Systems & System Architecture',
    'Software Engineering & System Analysis',
    'Web Development & Modern Architectures',
  ],
  achievements: [
    'Lead contributor on the Egyptian Sign Language Recognition graduation system',
    'Consistently achieved top-tier academic marks across AI and algorithm curricula',
    'Active participant in technical workshops on Full-Stack and Machine Learning development',
  ],
};
