import { useRef, CSSProperties, useEffect, useState } from 'react';

export type ImageProps = {
  defaultImage: string;
  src: string;
  alt: string;
  block: boolean;
  width: string;
  height: string;
  objectFit: CSSProperties['objectFit'];
  style?: CSSProperties;
};

const ImageComponent = ({
  defaultImage,
  src,
  alt,
  block,
  width,
  height,
  objectFit = 'cover',
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const imgRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = imgSrc;
    image.onload = () => setImgSrc(src);
  }, [src]);

  const imageStyle: CSSProperties = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: objectFit as CSSProperties['objectFit'], // cover, fill, contain
  };

  return (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(defaultImage)}
      style={{
        ...imageStyle,
        ...props.style,
      }}
    />
  );
};

export default ImageComponent;
