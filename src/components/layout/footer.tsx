import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className={cn('container mx-auto w-full', 'py-2', 'border border-t border-dashed')}>
      <p className={cn('text-center text-sm')}>Isaac "Hermel" Reginato © 2024</p>
    </footer>
  );
}
