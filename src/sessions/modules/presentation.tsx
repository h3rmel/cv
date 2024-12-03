import { forwardRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CONTACTS } from '@/constants/contacts';
import { cn } from '@/lib/utils';

export const Presentation = forwardRef<HTMLElement>(function Presentation(props, ref) {
  return (
    <section
      ref={ref}
      {...props}
      className={cn(
        'section',
        'px-0 pt-32',
        'flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:justify-evenly md:gap-0',
      )}
    >
      <Card className={cn('max-w-2xl')}>
        <CardHeader>
          <CardDescription>Olá, eu sou...</CardDescription>
          <h1 className={cn('text-2xl font-semibold leading-none tracking-tight')}>Isaac Hermel Reginato</h1>
        </CardHeader>
        <CardContent>
          <p className={cn('text-justify text-sm')}>
            Desenvolvedor de software com 3 anos de experiência em múltiplos segmentos, incluindo gestão empresarial,
            hospedagem, ETL, sucesso do cliente e plataformas CPaaS. Especializado na estruturação e documentação dos
            processos de desenvolvimento, garantindo eficiência e manutenibilidade dos projetos com uma abordagem
            métodica e organizada.
          </p>
        </CardContent>
        <CardFooter className={cn('justify-between')}>
          <div className={cn('space-x-4')}>
            <Button asChild variant="secondary">
              <a
                href="https://drive.google.com/file/d/12W2b0A431CJ1_yP3oAPTRmvVreB3wt57/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar currículo em português"
              >
                Currículo <img src="/languages/pt-BR.png" alt="Bandeira do Brasil" className={cn('object-fit w-5')} />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href="https://drive.google.com/file/d/1Uay3sXrBHcm872eGvcyhvnn-UtFsPi0m/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download curriculum in English"
              >
                Curriculum{' '}
                <img src="/languages/en-US.png" alt="Bandeira dos Estados Unidos" className={cn('object-fit w-5')} />
              </a>
            </Button>
          </div>
          <div className={cn('flex items-center justify-center gap-4')}>
            {CONTACTS.map((contact, index) => (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <Button asChild size="icon" variant="secondary">
                    <a href={contact.content} target="_blank" rel="noopener noreferrer">
                      {contact.logo}
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{contact.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardFooter>
      </Card>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className={cn('h-auto w-64', 'border border-dashed p-1')}>
            <AvatarImage src="/profile.webp" alt="Isaac Hermel's picture" className="rounded-full" />
            <AvatarFallback>IH</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className={cn('text-lg')}>E aí 👋</p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
});
