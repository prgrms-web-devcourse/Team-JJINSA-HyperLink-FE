import { CSSProperties, ReactNode } from 'react';
import * as style from './style.css';
import { vars } from '@/styles/variants.css';

export type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  style?: CSSProperties;
};

const Heading = ({
  children,
  level = 1,
  color = vars.color.font.primary,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={style.heading({ level })}
      style={{ color, ...props.style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
