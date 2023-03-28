export const scrollTo = (
  element: HTMLDivElement | (Window & typeof globalThis),
  to: number
) =>
  element.scrollTo({
    top: to,
    left: 0,
    behavior: 'smooth',
  });
