import ImageComponent from '@/components/common/Image';
import * as style from './style.css';
import defaultProfileImage from '@/assets/defaultProfileImage.png';

export type AvatarProps = {
  src: string;
  shape: 'circle' | 'round' | 'square';
  size: 'small' | 'medium' | 'large' | 'xLarge';
  [props: string]: {};
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
        defaultImage={defaultProfileImage}
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
