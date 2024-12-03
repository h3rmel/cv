import { Divider } from '@/components/divider';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  HARD_SKILLS,
  HARD_SKILLS_COLORS,
  HARD_SKILLS_SECONDARY,
  SOFT_SKILLS,
  SOFT_SKILLS_SECONDARY,
} from '@/constants/skills';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Skills = forwardRef<HTMLElement>(function Skills(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className={cn('section', 'border-t', 'flex flex-col items-start gap-4 self-stretch md:gap-8')}
    >
      <hgroup className={cn('space-y-1')}>
        <h2 className={cn('text-2xl font-semibold tracking-wide')}>Habilidades</h2>
        <p className={cn('text-muted-foreground')}>Habilidades técnicas e comportamentais que utilizo no dia a dia</p>
      </hgroup>
      <Divider title="Hard Skills" info="Habilidades técnicas" />
      <ul className={cn('flex flex-wrap justify-center gap-8')} role="list">
        {HARD_SKILLS.map((skill, index) => (
          <li key={index} role="listitem">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    'relative',
                    'flex items-center justify-center',
                    'h-24 w-24',
                    'p-4',
                    'border border-dashed',
                    'duration-300 ease-in-out',
                    'overflow-hidden',
                    'group',
                    'bg-noise',
                    HARD_SKILLS_COLORS[skill.colorKey].border,
                    HARD_SKILLS_COLORS[skill.colorKey].glow,
                  )}
                >
                  <img
                    src={skill.imageUrl}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className={cn('h-auto w-16', 'z-20', 'pointer-events-none')}
                  />
                  <div
                    className={cn(
                      'absolute -bottom-4 left-1/2 -translate-x-1/2',
                      'h-12 w-12',
                      'rounded-full',
                      'blur-xl',
                      'z-10',
                      'duration-300 ease-in-out',
                      'group-hover:scale-[2]',
                      HARD_SKILLS_COLORS[skill.colorKey].bg,
                    )}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
      <ul className={cn('self-strech flex flex-col items-start gap-1')} role="list">
        {HARD_SKILLS_SECONDARY.map((skill, index) => (
          <li key={index} className={cn('text-muted-foreground', 'text-sm')} role="listitem">
            - {skill}
          </li>
        ))}
      </ul>
      <Divider title="Soft Skills" info="Habilidades organizacionais e comportamentais" />
      <ul className={cn('flex flex-col gap-8', 'md:grid md:grid-cols-2')} role="list">
        {SOFT_SKILLS.map((skill, index) => (
          <li key={index} className={cn('h-full w-full')} role="listitem">
            <Card className={cn('h-full w-full')}>
              <CardHeader className={cn('border-0')}>
                <CardTitle>{skill.name}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
      <ul className={cn('self-strech flex flex-col items-start gap-1')} role="list">
        {SOFT_SKILLS_SECONDARY.map((skill, index) => (
          <li key={index} className={cn('text-muted-foreground', 'text-sm')} role="listitem">
            - {skill}
          </li>
        ))}
      </ul>
    </section>
  );
});
