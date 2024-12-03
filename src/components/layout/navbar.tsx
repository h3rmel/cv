import { RefObject, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Drawer } from 'vaul';
import useScrollToElement from '@/hooks/use-scroll-to-element';

interface NavbarProps {
  presentationRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  experienceRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  formationRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

export function Navbar({
  presentationRef,
  contactRef,
  experienceRef,
  formationRef,
  projectsRef,
  skillsRef,
}: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { scrollToElement } = useScrollToElement();

  function scrollTo(element: RefObject<HTMLParagraphElement | HTMLElement>) {
    scrollToElement(element, {
      offset: 58,
      behavior: 'smooth',
    });
    setDrawerOpen(false);
  }

  return (
    <header className={cn('fixed left-0 top-0', 'w-full', 'bg-noise backdrop-blur-xl', 'z-50')}>
      <nav
        className={cn(
          'container mx-auto w-full',
          'flex items-center justify-end',
          'p-2',
          'border border-b border-dashed',
        )}
      >
        <Drawer.Root direction="top" open={drawerOpen} onOpenChange={() => setDrawerOpen(!drawerOpen)}>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="icon">
              <Menu size={24} />
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className={cn('fixed inset-0 bg-black/30')} />
            <Drawer.Content
              className={cn(
                'fixed left-0 top-0 z-50',
                'mx-auto w-full',
                'p-16',
                'bg-noise text-foreground backdrop-blur-md',
                'outline-none',
                'border-b border-dashed border-border',
              )}
            >
              <div className={cn('hidden')}>
                <Drawer.Title>Drawer Menu</Drawer.Title>
                <Drawer.Description> Drawer with navigation links</Drawer.Description>
              </div>
              <ul className={cn('flex flex-col items-center justify-center gap-8')}>
                <li>
                  <Button variant="link" size="nav-link" onClick={() => scrollTo(presentationRef)}>
                    Apresentação
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="nav-link" onClick={() => scrollTo(skillsRef)}>
                    Habilidades
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="nav-link" onClick={() => scrollTo(experienceRef)}>
                    Experiência
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="nav-link" onClick={() => scrollTo(projectsRef)}>
                    Projetos
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="nav-link" onClick={() => scrollTo(formationRef)}>
                    Formação
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="nav-link" onClick={() => scrollTo(contactRef)}>
                    Contato
                  </Button>
                </li>
              </ul>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </nav>
    </header>
  );
}
