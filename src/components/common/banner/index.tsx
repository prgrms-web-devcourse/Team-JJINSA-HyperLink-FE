import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useState } from 'react';
import { HYPERLINK } from './positions';
import * as style from './style.css';

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export type BannerProps = {
  size?: number;
};

const Banner = ({ size = 1 }: BannerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={style.wrapper}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: `${54 * size}rem`, height: `${14 * size}rem` }}
    >
      {HYPERLINK.map((pos, i) => (
        <span
          key={i}
          className={style.dot({ isHovered })}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
            ...assignInlineVars({
              [style.posX]: `${pos[0] * size}rem`,
              [style.posY]: `${pos[1] * size}rem`,
              [style.randomPosX]: `${getRandomNumber(0, 54) * size}rem`,
              [style.randomPosY]: `${getRandomNumber(0, 14) * size}rem`,
            }),
          }}
        />
      ))}
    </div>
  );
};

export default Banner;
