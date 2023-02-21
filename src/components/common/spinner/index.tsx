import { Icon } from '@/components/common';
import { CSSProperties } from 'react';

export type SpinnerProps = {
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'huge';
  color?: string;
  loading?: boolean;
  style?: CSSProperties;
};

const Spinner = ({
  size = 'medium',
  color = '#9a9a9a',
  loading = true,
  ...props
}: SpinnerProps) => {
  return loading ? (
    <Icon
      className="fas fa-spin"
      name="spinner"
      size={size}
      color={color}
      style={{ ...props.style }}
      {...props}
    />
  ) : null;
};

export default Spinner;
