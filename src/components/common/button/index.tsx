import { CSSProperties } from 'react';
import * as style from './style.css';

export type ButtonProps = {
  type?: 'button' | 'submit';
  version: 'blue' | 'blueInverted' | 'grayInverted';
  fontSize?: 'small' | 'medium' | 'large';
  fontWeight?: boolean;
  paddingSize?: 'small' | 'medium' | 'full';
  text?: string;
  style?: CSSProperties;
};

const Button = ({
  type = 'button',
  version = 'blue',
  fontSize = 'small',
  fontWeight = false,
  paddingSize = 'small',
  text = 'button',
  ...props
}: ButtonProps) => {
  const buttonStyle = {
    fontWeight: fontWeight ? '700' : '400',
  };

  return (
    <button
      className={style.button({ version, fontSize, paddingSize })}
      type={type}
      style={{ ...buttonStyle, ...props.style }}
    >
      {text}
    </button>
  );
};

export default Button;
