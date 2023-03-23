import { FAB, Icon, Tooltip } from '@/components/common';
import * as variants from '@/styles/variants.css';
import { scrollTo } from '@/utils/scroll';

type BackToTopProps = {
  onClick?: () => void;
  visible?: boolean;
};

const BackToTop = ({ onClick, visible }: BackToTopProps) => {
  return (
    <Tooltip message="상단으로 이동" position="top-end">
      <FAB onClick={onClick || (() => scrollTo(window, 0))} visible={visible}>
        <Icon name="angles-up" color={variants.color.primary} />
      </FAB>
    </Tooltip>
  );
};

export default BackToTop;
