import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FORMATIONS } from '@/constants/formations';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Formation = forwardRef<HTMLElement>(function Formation(props, ref) {
  function getTextFromStatus(status: 'DONE' | 'IN_PROGRESS' | 'DROPPED_OUT') {
    switch (status) {
      case 'DONE':
        return 'Concluído';
      case 'IN_PROGRESS':
        return 'Em andamento';
      case 'DROPPED_OUT':
        return 'Desistido';
      default:
        return 'Concluído';
    }
  }

  function getVariantFromStatus(status: 'DONE' | 'IN_PROGRESS' | 'DROPPED_OUT') {
    switch (status) {
      case 'DONE':
        return 'default';
      case 'IN_PROGRESS':
        return 'secondary';
      case 'DROPPED_OUT':
        return 'danger';
      default:
        return 'default';
    }
  }

  return (
    <section
      {...props}
      ref={ref}
      className={cn('section', 'border-t', 'flex flex-col items-start gap-4 self-stretch md:gap-8')}
    >
      <hgroup className={cn('space-y-1')}>
        <h2 className={cn('text-2xl font-semibold tracking-wide')}>Formação Acadêmica</h2>
        <p className={cn('text-muted-foreground')}>Cursos e formações acadêmicas que realizei</p>
      </hgroup>
      <ul className={cn('flex flex-col gap-8', 'md:grid md:grid-cols-2', 'w-full')} role="list">
        {FORMATIONS.map((formation, index) => (
          <li key={index} className={cn('h-full w-full')} role="listitem">
            <Card className={cn('w-full')}>
              <CardHeader className={cn('flex flex-row items-center justify-between')}>
                <hgroup className={cn('flex flex-col space-y-1.5')}>
                  <CardTitle>{formation.institution}</CardTitle>
                  <CardDescription>{formation.course}</CardDescription>
                </hgroup>
                <img
                  src={formation.logoUrl}
                  alt={`${formation.institution}'s logo`}
                  className={cn('h-auto w-16', 'border border-dashed border-border', 'bg-background', 'p-1')}
                />
              </CardHeader>
              <CardFooter className={cn('justify-between', 'border-t-0')}>
                <Badge variant={getVariantFromStatus(formation.status)}>{getTextFromStatus(formation.status)}</Badge>
                <p className={cn('text-sm')}>{formation.period}</p>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
});
