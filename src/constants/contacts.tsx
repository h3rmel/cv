import { Github, Linkedin, Mail, Phone } from 'lucide-react';

interface IContact {
  name: string;
  content: string;
  logo: JSX.Element;
}

export const CONTACTS: IContact[] = [
  {
    name: 'LinkedIn',
    content: 'https://www.linkedin.com/in/isaachermel',
    logo: <Linkedin />,
  },
  {
    name: 'GitHub',
    content: 'https://github.com/h3rmel',
    logo: <Github />,
  },
  {
    name: 'E-mail',
    content: 'mailto:isaachermel@gmail.com',
    logo: <Mail />,
  },
  {
    name: 'Telefone',
    content: 'https://wa.me/+5551997099876',
    logo: <Phone />,
  },
];
