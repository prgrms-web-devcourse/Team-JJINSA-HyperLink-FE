import ImageComponent from '../Image';
import { avatar } from './style.css';
import defaultProfileImage from '@/assets/defaultProfileImage.png';
import { CSSProperties } from 'react';

export type AvatarProps = {
  src: string;
  shape: 'circle' | 'round' | 'square';
  size: 'small' | 'medium' | 'large';
};

const Avatar = ({
  src, // src로 할지 아니면 avatarImageSrc로 할지 고민 중
  shape = 'circle',
  size = 'medium',
  ...props
}: AvatarProps) => {
  return (
    <div className={avatar({ size: size, shape })}>
      <ImageComponent
        defaultImage={defaultProfileImage}
        src={src}
        alt={'Avatar Image'}
        block={true}
        width={'100%'} // 사이즈를 넘길건지 아니면 부모 요소에 크기를 맞출 건지 고민중
        height={'auto'}
        objectFit={'cover'}
        style={{
          opacity: 1, // style props 테스트
        }}
        {...props}
      />
    </div>
  );
};

export default Avatar;
