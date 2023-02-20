import ImageComponent from '../Image';
import { avatar } from './style.css';
import defaultProfileImage from '@/assets/defaultProfileImage.png';

export type AvatarProps = {
  src: string;
  shape: 'circle' | 'round' | 'square';
  size: 'small' | 'medium' | 'large' | 'xLarge';
};

const Avatar = ({
  src,
  shape = 'circle',
  size = 'medium',
  ...props
}: AvatarProps) => {
  return (
    <div className={avatar({ size: size, shape })}>
      <ImageComponent
        defaultImage={defaultProfileImage}
        src={src}
        alt="Avatar Image"
        block={true}
        width="100%"
        height="auto"
        objectFit="cover"
        {...props}
      />
    </div>
  );
};

export default Avatar;
