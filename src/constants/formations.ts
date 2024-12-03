interface IFormations {
  institution: string;
  course: string;
  degree: string;
  period: string;
  status: 'DONE' | 'IN_PROGRESS' | 'DROPPED_OUT';
  logoUrl: string;
}

export const FORMATIONS: IFormations[] = [
  {
    institution: 'Descomplica',
    course: 'Análise e Desenvolvimento de Sistemas',
    degree: 'Tecnólogo',
    period: 'Mar 2023 - Out 2025',
    status: 'IN_PROGRESS',
    logoUrl: '/institutions/descomplica-logo.webp',
  },
  {
    institution: 'IFSUL - Instituto Federal Sul-rio-grandense',
    course: 'Técnico em Informática para a Internet',
    degree: 'Técnico',
    period: 'Fev 2018 - Mai 2022',
    status: 'DONE',
    logoUrl: '/institutions/ifsul-logo.webp',
  },
];
