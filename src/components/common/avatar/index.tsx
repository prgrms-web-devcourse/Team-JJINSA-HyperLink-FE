import ImageComponent from '@/components/common/Image';
import { CSSProperties } from 'react';
import * as style from './style.css';
import user from '/assets/user.svg';

export type AvatarProps = {
  src: string;
  shape?: 'circle' | 'round' | 'square';
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  style?: CSSProperties;
  className?: string;
};

const Avatar = ({
  src,
  shape = 'circle',
  size = 'medium',
  ...props
}: AvatarProps) => {
  return (
    <div
      className={`${style.avatar({ size, shape })} ${props.className}`}
      style={{
        ...props.style,
      }}
    >
      <ImageComponent
        defaultImage={user}
        src={src}
        alt="Avatar Image"
        block={true}
        width="100%"
        height="auto"
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
