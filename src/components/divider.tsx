import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface DividerProps {
  title: string;
  info?: string;
}

export function Divider({ title, info = '' }: DividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-4', 'w-full')}>
      <hr className={cn('border-t border-dashed border-border', 'w-full')} />
      <div className={cn('flex items-center justify-center gap-2')}>
        <h3 className={cn('text-nowrap text-xl font-semibold tracking-wide')}>{title}</h3>
        {info !== '' && (
          <Tooltip>
            <TooltipTrigger>
              <Info className={cn('h-4 w-4', 'text-muted-foreground', 'mb-1')} />
            </TooltipTrigger>
            <TooltipContent>
              <p>{info}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <hr className={cn('border-t border-dashed border-border', 'w-full')} />
    </div>
  );
}
