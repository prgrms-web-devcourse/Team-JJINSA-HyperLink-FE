import { Icon, Text } from '@/components/common';
import * as variants from '@/styles/variants.css';
import * as style from './style.css';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPage,
  page,
  setPage,
}: PaginationProps) => {
  return (
    <div className={style.container}>
      <button className={style.iconButton} onClick={() => setPage(0)}>
        <Icon name="angles-left" color={variants.color.font.primary} />
      </button>
      <button
        className={style.iconButton}
        onClick={() => setPage(page - 1)}
        disabled={currentPage === 1}
      >
        <Icon name="angle-left" color={variants.color.font.primary} />
      </button>
      <Text size="small">
        {currentPage} / {totalPage}
      </Text>
      <button
        className={style.iconButton}
        onClick={() => setPage(page + 1)}
        disabled={currentPage === totalPage}
      >
        <Icon name="angle-right" color={variants.color.font.primary} />
      </button>
      <button
        className={style.iconButton}
        onClick={() => setPage(totalPage - 1)}
      >
        <Icon name="angles-right" color={variants.color.font.primary} />
      </button>
    </div>
  );
};

export default Pagination;
