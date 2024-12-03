import { cn } from '@/lib/utils';
import { Contact, Experience, Formation, Presentation, Projects, Skills } from '@/sessions';
import { Helmet, HelmetData } from 'react-helmet-async';
import { AppProvider } from './provider';
import { Navbar, Footer } from '@/components/layout';
import { Cursor } from '@/components/cursor';
import { useRef } from 'react';

const helmetData = new HelmetData({});

export function App() {
  const presentationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const formationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const refs = { presentationRef, skillsRef, experienceRef, projectsRef, formationRef, contactRef };

  return (
    <AppProvider>
      <Helmet title={'Isaac "Hermel" Reginato'} helmetData={helmetData}>
        <meta name="description" content="Software Developer" />
      </Helmet>
      <Navbar {...refs} />
      <Cursor />
      <main className={cn('mx-auto min-h-screen w-full', 'overflow-hidden')}>
        <Presentation ref={presentationRef} />
        <Skills ref={skillsRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Formation ref={formationRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </AppProvider>
  );
}
