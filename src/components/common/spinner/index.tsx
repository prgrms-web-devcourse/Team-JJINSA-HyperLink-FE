import { Icon } from '@/components/common';
import * as variants from '@/styles/variants.css';
import { CSSProperties } from 'react';

export type SpinnerProps = {
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'huge';
  color?: string;
  loading?: boolean;
  style?: CSSProperties;
};

const Spinner = ({
  size = 'medium',
  color = variants.vars.color.bg.select,
  loading = true,
  ...props
}: SpinnerProps) => {
  return loading ? (
    <Icon
      className="fas fa-spin"
      name="circle-notch"
      size={size}
      color={color}
      style={{ color, ...props.style }}
      {...props}
    />
  ) : null;
};

export default Spinner;
