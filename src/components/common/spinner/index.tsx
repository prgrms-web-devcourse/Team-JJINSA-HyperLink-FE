import { Icon } from '@/components/common';
import * as variants from '@/styles/variants.css';
import { CSSProperties } from 'react';
import * as style from './style.css';

export type SpinnerProps = {
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'huge';
  color?: string;
  loading?: boolean;
  style?: CSSProperties;
};

const Spinner = ({
  size = 'medium',
  color = variants.color.icon,
  loading = true,
  ...props
}: SpinnerProps) => {
  return loading ? (
    <div className={style.spinner}>
      <Icon
        className="fas fa-spin"
        name="circle-notch"
        size={size}
        color={color}
        style={{ color, ...props.style }}
        {...props}
      />
    </div>
  ) : null;
};

export default Spinner;
