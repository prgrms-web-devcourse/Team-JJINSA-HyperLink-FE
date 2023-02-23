import { useEffect, useRef, MutableRefObject } from 'react';

const events: Array<string> = ['mouseup', 'touchstart'];

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

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref as unknown as MutableRefObject<HTMLDivElement>;
};

export default useClickAway;
