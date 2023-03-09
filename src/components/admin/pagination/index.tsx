import { Icon, Text } from '@/components/common';
import * as variants from '@/styles/variants.css';
import * as style from './style.css';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const Pagination = ({
  currentPage,
  totalPage,
  onPrevClick,
  onNextClick,
}: PaginationProps) => {
  return (
    <div className={style.container}>
      <button
        className={style.iconButton}
        onClick={onPrevClick}
        disabled={currentPage === 1}
      >
        <Icon name="chevron-left" color={variants.color.font.primary} />
      </button>
      <Text size="small">
        {currentPage} / {totalPage}
      </Text>
      <button
        className={style.iconButton}
        onClick={onNextClick}
        disabled={currentPage === totalPage}
      >
        <Icon name="chevron-right" color={variants.color.font.primary} />
      </button>
    </div>
  );
};

export default Pagination;
