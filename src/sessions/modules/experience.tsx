import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { EXPERIENCES } from '@/constants/experiences';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Experience = forwardRef<HTMLElement>(function Experience(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className={cn('section', 'border-t', 'flex flex-col items-start gap-4 self-stretch md:gap-8')}
    >
      <hgroup className={cn('space-y-1')}>
        <h2 className={cn('text-2xl font-semibold tracking-wide')}>Experiência</h2>
        <p className={cn('text-muted-foreground')}>Aqui está um resumo da minha experiência profissional</p>
      </hgroup>
      <ul className={cn('flex flex-col gap-8', 'md:grid md:grid-cols-2')} role="list">
        {EXPERIENCES.map((experience, index) => (
          <li key={index} className={cn('h-full w-full')} role="listitem">
            <Card className={cn('h-full w-full')}>
              <CardHeader>
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription>{experience.company}</CardDescription>
              </CardHeader>
              <CardContent className={cn('h-auto')}>
                <ul className={cn('flex flex-col gap-2')} role="list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} role="listitem">
                      <p className={cn('text-sm')}>{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className={cn('flex items-center justify-between')}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={cn('w-2/3', 'inline-flex flex-wrap items-center gap-2')}>
                      {experience.technologies.slice(0, 4).map((technology, index) => (
                        <Badge key={index} variant="secondary">
                          {technology}
                        </Badge>
                      ))}
                      <span>...</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className={cn('space-x-2')}>
                    {experience.technologies.map((technology, index) => (
                      <Badge key={index} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </TooltipContent>
                </Tooltip>
                <div className={cn('w-1/3', 'flex justify-end')}>
                  <p className={cn('text-sm')}>{experience.period}</p>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
});
