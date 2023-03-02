export const throttleWheel = (
  fn: (event: { deltaY: number }) => void,
  wait: number
) => {
  let time = Date.now();

  return (event: { deltaY: number }) => {
    if (Math.abs(event.deltaY) < 4) return;

    if (time + wait - Date.now() < 0) {
      fn(event);
      time = Date.now();
    }
  };
};
