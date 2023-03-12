import { ReactNode, useRef, WheelEvent, MouseEvent } from 'react';
import * as style from './style.css';

export type SliderProps = {
  headerText: string;
  children: ReactNode[];
};

const Slider = ({ headerText, children, ...props }: SliderProps) => {
  const sliderTargetRef = useRef<HTMLDivElement>(null);

  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY !== 0) return;

    if (!sliderTargetRef.current) return;
    sliderTargetRef.current.scrollLeft += e.deltaY;
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderTargetRef.current) return;

    isMouseDown = true;
    startX = e.clientX - sliderTargetRef.current.offsetLeft;
    scrollLeft = sliderTargetRef.current?.scrollLeft as number;
    sliderTargetRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    if (!sliderTargetRef.current) return;

    isMouseDown = false;
    sliderTargetRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();

    if (!isMouseDown) return;
    if (!sliderTargetRef.current) return;

    const curLocation = e.clientX - sliderTargetRef.current.offsetLeft;
    const diff = (curLocation - startX) * 2;
    sliderTargetRef.current.scrollLeft = scrollLeft - diff;
  };

  return (
    <div className={style.slider} {...props}>
      <div className={style.title}>{headerText}</div>
      <div
        className={style.sliderTarget}
        ref={sliderTargetRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
