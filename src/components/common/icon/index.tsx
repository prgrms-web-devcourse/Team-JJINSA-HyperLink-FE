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
  onClick?: () => void;
  style?: CSSProperties;
};

/**
 * Font-awesome Icon Component
 * @param {'light' | 'regular' | 'solid' | 'thin'} type - Icon type(default: solid)
 * @param {string} name - Icon name(default: xmark)
 * @param {string} size - Icon size(default: medium(1.4rem)) expected to be one of ['xSmall', 'small', 'medium', 'large', 'xLarge', 'huge']
 * @param {string} color - Icon color(default: #9a9a9a)
 * @param {string} className - Icon className
 * @param {func} onClick - Icon onClick event handler
 * @returns {Icon} Font-awesome icon
 */

const Icon = ({
  type = 'solid',
  name = 'xmark',
  size = 'medium',
  color = variants.color.icon,
  isPointer = true,
  className = '',
  onClick,
  ...props
}: IconProps) => {
  return (
    <i
      className={`${className} fa-${type} fa-${name} ${name} ${style.icon({
        size,
        isPointer,
      })}`}
      style={{ color, ...props.style }}
      onClick={onClick}
    />
  );
};

export default Icon;
