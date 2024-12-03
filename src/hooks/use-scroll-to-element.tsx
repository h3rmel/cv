import { useCallback } from 'react';

type ScrollOptions = {
  behavior?: ScrollBehavior;
  offset?: number;
};

type ScrollTarget = React.RefObject<HTMLElement> | HTMLElement | string | null;

const useScrollToElement = () => {
  const getElement = (target: ScrollTarget): HTMLElement | null => {
    if (!target) return null;
    if (typeof target === 'string') return document.getElementById(target);
    if ('current' in target) return target.current;
    return target;
  };

  const scrollToElement = useCallback((target: ScrollTarget, options: ScrollOptions = {}) => {
    const element = getElement(target);
    const { behavior = 'smooth', offset = 0 } = options;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    }
  }, []);

  return { scrollToElement };
};

export default useScrollToElement;
