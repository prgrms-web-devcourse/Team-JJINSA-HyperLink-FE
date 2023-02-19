import { CSSProperties } from 'react';

type IconProps = {
  type: string;
  name: string;
  size: number;
  style?: CSSProperties;
};

const Icon = ({
  type = 'solid',
  name = 'xmark',
  size,
  ...props
}: IconProps) => {
  let classname = `fa-${type} fa-${name} ${name}`;
  if (size) {
    classname += ` fa-${size}x`;
  }

  return <i className={classname} style={{ ...props.style }} {...props}></i>;
};

export default Icon;
