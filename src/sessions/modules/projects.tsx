import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Projects = forwardRef<HTMLElement>(function Projects(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className={cn('section', 'border-t', 'flex flex-col items-start gap-4 self-stretch md:gap-8')}
    >
      <hgroup className={cn('space-y-1')}>
        <h2 className={cn('text-2xl font-semibold tracking-wide')}>Projetos</h2>
        <p className={cn('text-muted-foreground')}>Produtos e plataformas os quais colabarei em seu desenvolvimento</p>
      </hgroup>
    </section>
  );
});
