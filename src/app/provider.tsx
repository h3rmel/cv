import { ReactNode } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <TooltipProvider delayDuration={200}>{children}</TooltipProvider>;
}
