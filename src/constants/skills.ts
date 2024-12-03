interface IHardSkill {
  name: string;
  imageUrl: string;
  colorKey: string;
}

export const HARD_SKILLS: IHardSkill[] = [
  {
    name: 'JavaScript',
    imageUrl: '/skills/javascript.webp',
    colorKey: 'js',
  },
  {
    name: 'TypeScript',
    imageUrl: '/skills/typescript.webp',
    colorKey: 'ts',
  },
  {
    name: 'React',
    imageUrl: '/skills/react.webp',
    colorKey: 'react',
  },
  {
    name: 'Next',
    imageUrl: '/skills/next.webp',
    colorKey: 'next',
  },
  {
    name: 'Vue',
    imageUrl: '/skills/vue.webp',
    colorKey: 'vue',
  },
  {
    name: 'Node',
    imageUrl: '/skills/node.webp',
    colorKey: 'node',
  },
  {
    name: 'Vite',
    imageUrl: '/skills/vite.webp',
    colorKey: 'vite',
  },
  {
    name: 'Webpack',
    imageUrl: '/skills/webpack.webp',
    colorKey: 'webpack',
  },
  {
    name: 'JQuery',
    imageUrl: '/skills/jquery.webp',
    colorKey: 'jquery',
  },
  {
    name: 'Jest',
    imageUrl: '/skills/jest.webp',
    colorKey: 'jest',
  },
  {
    name: 'Python',
    imageUrl: '/skills/python.webp',
    colorKey: 'python',
  },
  {
    name: 'Flask',
    imageUrl: '/skills/flask.webp',
    colorKey: 'flask',
  },
  {
    name: 'PostgreSQL',
    imageUrl: '/skills/postgresql.webp',
    colorKey: 'postgresql',
  },
  {
    name: 'Firebase',
    imageUrl: '/skills/firebase.webp',
    colorKey: 'firebase',
  },
  {
    name: 'Mongo DB',
    imageUrl: '/skills/mongodb.webp',
    colorKey: 'mongodb',
  },
  {
    name: 'Tailwind CSS',
    imageUrl: '/skills/tailwindcss.webp',
    colorKey: 'tailwindcss',
  },
  {
    name: 'Styled-Components',
    imageUrl: '/skills/styled-components.webp',
    colorKey: 'styled-components',
  },
  {
    name: 'Sass',
    imageUrl: '/skills/sass.webp',
    colorKey: 'sass',
  },
  {
    name: 'C#',
    imageUrl: '/skills/csharp.webp',
    colorKey: 'csharp',
  },
  {
    name: 'Blazor',
    imageUrl: '/skills/blazor.webp',
    colorKey: 'blazor',
  },
  {
    name: 'Bash',
    imageUrl: '/skills/bash.webp',
    colorKey: 'bash',
  },
  {
    name: 'Docker',
    imageUrl: '/skills/docker.webp',
    colorKey: 'docker',
  },
];

interface IHardSkillColor {
  bg: string;
  border: string;
  glow: string;
}

export const HARD_SKILLS_COLORS: { [key: string]: IHardSkillColor } = {
  js: {
    bg: 'bg-[#f0dc4e]',
    border: 'md:hover:border-[#f0dc4e]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(240,220,78,0.4)]',
  },
  ts: {
    bg: 'bg-[#3078c6]',
    border: 'md:hover:border-[#3078c6]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(0,123,204,0.4)]',
  },
  react: {
    bg: 'bg-[#60dafa]',
    border: 'md:hover:border-[#60dafa]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(96,218,250,0.4)]',
  },
  next: {
    bg: 'bg-[#9ca3af]',
    border: 'md:hover:border-[#9ca3af]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(156,163,175,0.4)]',
  },
  vue: {
    bg: 'bg-[#3fb781]',
    border: 'md:hover:border-[#3fb781]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(63,183,129,0.4)]',
  },
  node: {
    bg: 'bg-[#83ce27]',
    border: 'md:hover:border-[#83ce27]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(131,206,39,0.4)]',
  },
  vite: {
    bg: 'bg-[#b142fe]',
    border: 'md:hover:border-[#b142fe]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(177,66,254,0.4)]',
  },
  webpack: {
    bg: 'bg-[#1c79c2]',
    border: 'md:hover:border-[#1c79c2]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(28,121,194,0.4)]',
  },
  jquery: {
    bg: 'bg-[#1266a9]',
    border: 'md:hover:border-[#1266a9]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(18,102,169,0.4)]',
  },
  jest: {
    bg: 'bg-[#9a405a]',
    border: 'md:hover:border-[#9a405a]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(154,64,90,0.4)]',
  },
  python: {
    bg: 'bg-[#4483b4]',
    border: 'md:hover:border-[#4483b4]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(68,131,180,0.4)]',
  },
  flask: {
    bg: 'bg-[#9ca3af]',
    border: 'md:hover:border-[#9ca3af]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(156,163,175,0.4)]',
  },
  postgresql: {
    bg: 'bg-[#326792]',
    border: 'md:hover:border-[#326792]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(50,103,146,0.4)]',
  },
  firebase: {
    bg: 'bg-[#f5831f]',
    border: 'md:hover:border-[#f5831f]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(245,131,31,0.4)]',
  },
  mongodb: {
    bg: 'bg-[#419b32]',
    border: 'md:hover:border-[#419b32]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(65,155,50,0.4)]',
  },
  tailwindcss: {
    bg: 'bg-[#37bdf9]',
    border: 'md:hover:border-[#37bdf9]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(55,189,249,0.4)]',
  },
  'styled-components': {
    bg: 'bg-[#f1bcf4]',
    border: 'md:hover:border-[#f1bcf4]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(241,188,244,0.4)]',
  },
  sass: {
    bg: 'bg-[#cc669b]',
    border: 'md:hover:border-[#cc669b]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(204,102,155,0.4)]',
  },
  csharp: {
    bg: 'bg-[#68207b]',
    border: 'md:hover:border-[#68207b]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(104,32,123,0.4)]',
  },
  blazor: {
    bg: 'bg-[#5d2d92]',
    border: 'md:hover:border-[#5d2d92]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(93,45,146,0.4)]',
  },
  bash: {
    bg: 'bg-[#fefefe]',
    border: 'md:hover:border-[#fefefe]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(254,254,254,0.4)]',
  },
  docker: {
    bg: 'bg-[#28b8ec]',
    border: 'md:hover:border-[#28b8ec]',
    glow: 'md:hover:shadow-[0_0_16px_4px_rgba(39,185,236,0.4)]',
  },
};

export const HARD_SKILLS_SECONDARY: string[] = [
  'Experiência com documentação de código (ex.: JSDoc) e pesquisas técnicas e negociais.',
  'Experiência com Clean Code, Programação Funcional, Git Flow, SEO e testes unitários.',
  'Experiência com integração e entrega contínua (CI/CD) e pipelines.',
];

interface ISoftSkill {
  name: string;
  description: string;
}

export const SOFT_SKILLS: ISoftSkill[] = [
  {
    name: 'Escuta Ativa',
    description: 'Ouço atentamente as pessoas, absorvendo a informação e respondendo de forma adequada.',
  },
  {
    name: 'Trabalho em Equipe',
    description:
      'Colabora ativamente com os membros da equipe, envolvendo-os nas decisões e respeitando suas opiniões.',
  },
  {
    name: 'Gestão de Tempo',
    description:
      'Por meio de técnicas como Pomodoro e listas de tarefa, consigo priorizar e entregar tarefas no prazo.',
  },
  {
    name: 'Visão Analítica',
    description: 'Analiso problemas e situações de forma crítica e ampla, identificando oportunidades de melhoria.',
  },
];

export const SOFT_SKILLS_SECONDARY: string[] = [
  'Conhecimento e experiência com metodologias ágeis como Scrum e Kanban.',
];
