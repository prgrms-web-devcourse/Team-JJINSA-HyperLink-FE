import { vars } from '@/styles/variants.css';
import { CSSProperties } from 'react';
import * as style from './style.css';

export type ButtonProps = {
  type: 'button' | 'submit';
  fontSize: 'small' | 'medium' | 'large';
  fontWeight: boolean;
  textColor: string;
  backgroundColor: string;
  border: boolean;
  borderColor?: string;
  paddingSize: 'small' | 'medium' | 'full';
  text: string;
  style?: CSSProperties;
};

const Button = ({
  type = 'button',
  fontSize = 'small',
  fontWeight = false,
  textColor = '#fff',
  backgroundColor = vars.color.primary,
  border = false,
  borderColor = vars.color.primary,
  paddingSize = 'small',
  text = 'button',
  ...props
}: ButtonProps) => {
  const buttonStyle = {
    fontSize,
    fontWeight: fontWeight ? '700' : '400',
    color: textColor,
    backgroundColor,
    border: border ? `0.2rem solid ${borderColor}` : 0,
  };

  return (
    <button
      className={style.button({ fontSize, paddingSize })}
      type={type}
      style={{ ...buttonStyle, ...props.style }}
    >
      {text}
    </button>
  );
};

export default Button;
