import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function Cursor() {
  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  function manageMouseMovement(event: MouseEvent) {
    const { clientX, clientY } = event;

    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMovement);

    return () => {
      window.removeEventListener('mousemove', manageMouseMovement);
    };
  }, []);

  return (
    <motion.div
      className={cn('pointer-events-none fixed hidden h-5 w-5 rounded-full bg-emerald-500 blur-[8px] md:block')}
      style={{ x: smoothMouse.x, y: smoothMouse.y }}
    />
  );
}
