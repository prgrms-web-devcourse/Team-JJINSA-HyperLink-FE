import { CSSProperties } from 'react';
import * as style from './style.css';

export type ButtonProps = {
  type?: 'button' | 'submit';
  version?: 'blue' | 'gray' | 'grayInverted' | 'white';
  shape?: 'round' | 'circle';
  fontSize?: 'small' | 'medium' | 'large';
  paddingSize?: 'small' | 'medium' | 'full';
  text?: string;
  isBold?: boolean;
  style?: CSSProperties;
};

const Button = ({
  type = 'button',
  version = 'blue',
  shape = 'round',
  fontSize = 'small',
  paddingSize = 'small',
  isBold = false,
  text = 'button',
  ...props
}: ButtonProps) => {
  const buttonStyle = {
    fontWeight: isBold ? '700' : '400',
  };

  return (
    <button
      className={style.button({ version, shape, fontSize, paddingSize })}
      type={type}
      style={{ ...buttonStyle, ...props.style }}
    >
      {text}
    </button>
  );
};

export default Button;
