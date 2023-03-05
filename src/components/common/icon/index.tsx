import * as variants from '@/styles/variants.css';
import { CSSProperties } from 'react';
import * as style from './style.css';

export type IconProps = {
  type?: 'light' | 'regular' | 'solid' | 'thin';
  name?: string;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'huge';
  color?: string;
  isPointer?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Font-awesome Icon Component
 * @param {'light' | 'regular' | 'solid' | 'thin'} type - Icon type(default: solid)
 * @param {string} name - Icon name(default: xmark)
 * @param {string} size - Icon size(default: medium(1.4rem)) expected to be one of ['xSmall', 'small', 'medium', 'large', 'xLarge', 'huge']
 * @param {string} color - Icon color(default: #9a9a9a)
 * @param {string} className - Icon className
 * @returns {Icon} Font-awesome icon
 */

const Icon = ({
  type = 'solid',
  name = 'xmark',
  size = 'medium',
  color = variants.color.icon,
  isPointer = true,
  className = '',
  ...props
}: IconProps) => {
  const IconStyle = {
    cursor: isPointer ? 'pointer' : 'auto',
  };

  return (
    <i
      className={`${className} fa-${type} fa-${name} ${name} ${style.icon({
        size,
      })}`}
      style={{ color, ...IconStyle, ...props.style }}
      {...props}
    ></i>
  );
};

export default Icon;
