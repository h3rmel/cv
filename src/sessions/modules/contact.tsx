import { Button } from '@/components/ui/button';
import { CONTACTS } from '@/constants/contacts';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Contact = forwardRef<HTMLElement>(function Contact(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className={cn('section', 'border-t', 'flex flex-col items-start gap-4 self-stretch md:gap-8')}
    >
      <hgroup className={cn('space-y-1')}>
        <h2 className={cn('text-2xl font-semibold tracking-wide')}>Contato</h2>
        <p className={cn('text-muted-foreground')}>Caso tenha interesse, pode me contatar pelos seguintes canais</p>
      </hgroup>
      <ul className={cn('flex items-center justify-center gap-4')} role="list">
        {CONTACTS.map((contact, index) => (
          <li key={index} role="listitem">
            <Button asChild variant="secondary" size="lg">
              <a href={contact.content} target="_blank" rel="noopener noreferrer">
                <p>{contact.name}</p>
                {contact.logo}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
});
