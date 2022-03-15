import { useEffect } from 'react';

export const useClickAwayListener = (
  ref: React.RefObject<HTMLElement>,
  onAwayClick: () => void
) => {
  useEffect(() => {
    const handleAwayClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Element | null)) {
        onAwayClick();
      }
    };
    document.addEventListener('mousedown', handleAwayClick);
    return () => {
      document.removeEventListener('mousedown', handleAwayClick);
    };
  }, [onAwayClick, ref]);
};
