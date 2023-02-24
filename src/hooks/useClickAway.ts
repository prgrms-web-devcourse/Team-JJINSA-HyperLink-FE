import { useEffect, useRef, MutableRefObject } from 'react';

const EVENTS: Array<string> = ['mouseup', 'touchstart'];

const useClickAway = <T extends HTMLElement>(
  handler: (event: Event) => void
) => {
  const ref = useRef<T | null>(null);
  const savedHandler = useRef<typeof handler>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element: T | null = ref.current;
    if (!element) return;
    const handleEvent = (e: Event) => {
      !element.contains(e.target as Node) && savedHandler.current(e);
    };

    EVENTS.forEach((event) => {
      document.addEventListener(event, handleEvent);
    });

    return () => {
      EVENTS.forEach((event) => {
        document.removeEventListener(event, handleEvent);
      });
    };
  }, [ref]);

  return ref as unknown as MutableRefObject<HTMLDivElement>;
};

export default useClickAway;
