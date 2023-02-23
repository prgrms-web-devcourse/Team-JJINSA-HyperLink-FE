import React, { ReactNode, useRef } from 'react';
import * as style from './style.css';

export type SliderProps = {
  children: ReactNode[];
};

const Slider = ({ children, ...props }: SliderProps) => {
  const sliderTargetRef = useRef<HTMLDivElement>(null);

  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleWheel = (e: React.WheelEvent) => {
    if (!sliderTargetRef.current) return;
    sliderTargetRef.current.scrollLeft += e.deltaY;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
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

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isMouseDown) return;
    if (!sliderTargetRef.current) return;

    const currentLoc = e.clientX - sliderTargetRef.current.offsetLeft;
    const diff = (currentLoc - startX) * 2;
    sliderTargetRef.current.scrollLeft = scrollLeft - diff;
  };

  return (
    <div className={style.slider} {...props}>
      <div className={style.title}>📌 꼭 봐야할 추천 크리에이터</div>
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
