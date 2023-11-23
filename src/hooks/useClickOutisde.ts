import { useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement = HTMLDivElement>(callback: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && !ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;
