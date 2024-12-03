interface IExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export const EXPERIENCES: IExperience[] = [
  {
    title: 'Desenvolvedor Front-end',
    company: 'Catency',
    period: 'Mar 2024 - Atual',
    responsibilities: [
      'Desenvolvimento de landing pages para palestras e workshops de capacitação de médicos e enfermeiros.',
      'Desenvolvimento de site institucional para empresa focada na capacitação de artistas por meio de cursos.',
    ],
    technologies: ['Next', 'Tailwind CSS', 'Otimização SEO', 'MongoDB', 'Framer Motion', 'TypeScript'],
  },
  {
    title: 'Desenvolvedor Front-end',
    company: 'Zenvia',
    period: 'Ago 2023 - Atual',
    responsibilities: [
      'Líderança técnica no desenvolvimento do SenseConnect, plataforma responsável por fluxos de ETL.',
      'Liderança técnica no desenvolvimento de integrações com ERPs para o ZCC, plataforma CPaaS da Zenvia.',
    ],
    technologies: [
      'React',
      'Jest',
      'Styled-components',
      'MongoDB',
      'Vue',
      'TypeScript',
      'Design Patterns',
      'Python',
      'Flask',
    ],
  },
  {
    title: 'Desenvolvedor Front-end',
    company: 'Catency',
    period: 'Jul 2023 - Ago 2023',
    responsibilities: [
      'Desenvolvimento de plataforma de logística para empresa especializada na distribuição de produtos hospitalares.',
    ],
    technologies: ['Next', 'Tailwind CSS', 'MongoDB', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Desenvolvedor Front-end',
    company: 'Webgru',
    period: 'Abr 2023 - Ago 2023',
    responsibilities: [
      'Liderança técnica no desenvolvimento de plataforma e-commerce para loja de produtos acadêmicos da Europa.',
    ],
    technologies: ['Webpack', 'Sass', 'Node.js', 'Otimização SEO', 'TypeScript', 'WordPress'],
  },
  {
    title: 'Desenvolvedor Full Stack',
    company: 'Umbler',
    period: 'Fev 2022 - Abr 2023',
    responsibilities: [
      'Liderança técnica no desenvolvimento de plataforma de aprendizado do time de suporte e ferramenta de Health Score',
      'Colaboração no desenvolvimento do Design System utilizado nos produtos e plataformas da empresa e produto de hospedagem de sites',
    ],
    technologies: ['C#', '.NET', 'JQuery', 'React', 'Sass', 'Blazor', 'MongoDB', 'SQL'],
  },
  {
    title: 'Estagio em Sucesso do Cliente',
    company: 'Umbler',
    period: 'Nov 2020 - Fev 2022',
    responsibilities: [
      'Auxiliar clientes na utilização da plataforma de hospedagem de sites e gereciamento de domínios',
      'Auxiliar clientes na utilização da ferramenta de e-mail profissional e ferramenta de banco de dados',
    ],
    technologies: ['JQuery', 'MongoDB', 'SQL', 'FTP', 'Node.js', 'PHP', 'WordPress'],
  },
];
