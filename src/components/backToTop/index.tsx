import { FAB, Icon } from '../common';
import * as variants from '@/styles/variants.css';

type BackToTopProps = {
  onClick?: () => void;
  visible?: boolean;
};

const BackToTop = ({ onClick, visible }: BackToTopProps) => {
  return (
    <FAB
      onClick={
        onClick ||
        (() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          }))
      }
      visible={visible}
    >
      <Icon name="angles-up" color={variants.color.primary} />
    </FAB>
  );
};

export default BackToTop;
