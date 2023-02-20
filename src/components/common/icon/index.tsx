import { CSSProperties } from 'react';

type IconProps = {
  type?: 'light' | 'regular' | 'solid' | 'thin';
  name?: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

/**
 * Font-awesome Icon Component
 * @param {'light' | 'regular' | 'solid' | 'thin'} type - Icon type(default: solid)
 * @param {string} name - Icon name(default: xmark)
 * @param {number} size - Icon size(default: 1.0)
 * @param {string} color - Icon color(default: #9a9a9a)
 * @returns {Icon} Font-awesome icon
 */

const Icon = ({
  type = 'solid',
  name = 'xmark',
  size = 1.0,
  color = '#9a9a9a',
  ...props
}: IconProps) => {
  return (
    <i
      className={`fa-${type} fa-${name} ${name}`}
      style={{ fontSize: `${size}rem`, color, ...props.style }}
      {...props}
    ></i>
  );
};

export default Icon;
