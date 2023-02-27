import { CSSProperties, ReactNode } from 'react';
import * as style from './style.css';

export type TextProps = {
  children: ReactNode;
  block?: boolean;
  paragraph?: boolean;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  weight?: 300 | 400 | 500 | 600 | 700 | 800;
  underline?: boolean;
  color?: string;
  style?: CSSProperties;
  className?: string;
};

/**
 * Text Component
 * @param {boolean} block - if block, tag is set to div
 * @param {boolean} paragraph - if paragraph, tag is set to p / if neither block nor paragraph, tag is set to span
 * @param {boolean} underline - if underline, text's decoration is set to underline
 * @param {union} size - text size (default: medium(1.6rem)) expected to be one of ['xSmall' | 'small' | 'medium' | 'large' | 'xLarge']
 * @param {union} weight - text's font weight
 * @param {string} color - text color
 * @returns {Text} Text Component
 */

const Text = ({
  children,
  block,
  paragraph,
  size = 'medium',
  weight = 400,
  underline,
  color,
  ...props
}: TextProps) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';
  const fontStyle = {
    textDecoration: underline ? 'underline' : undefined,
    textUnderlinePosition: underline ? 'under' : undefined,
    color,
  };

  return (
    <Tag
      className={style.text({ size, weight })}
      style={{ ...fontStyle, ...props.style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
