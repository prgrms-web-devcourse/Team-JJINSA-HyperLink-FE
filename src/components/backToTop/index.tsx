import { FAB, Icon } from '../common';
import * as variants from '@/styles/variants.css';
import { scrollTo } from '@/utils/scroll';

type BackToTopProps = {
  onClick?: () => void;
  visible?: boolean;
};

const BackToTop = ({ onClick, visible }: BackToTopProps) => {
  return (
    <FAB onClick={onClick || (() => scrollTo(window, 0))} visible={visible}>
      <Icon name="angles-up" color={variants.color.primary} />
    </FAB>
  );
};

export default BackToTop;
