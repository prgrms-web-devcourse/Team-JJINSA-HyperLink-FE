import { Children, ReactNode } from 'react';
import * as style from './style.css';

const CardList = ({
  type,
  children,
}: {
  type: 'creator' | 'content';
  children: ReactNode;
}) => {
  const hasContents = Children.toArray(children).length !== 1 ? true : false;
  return (
    <>
      {hasContents ? (
        <div className={style.listContainer({ type: type })}>{children}</div>
      ) : (
        <div className={style.noContents}>
          {type === 'content'
            ? `콘텐츠가 존재하지 않습니다.`
            : `크리에이터가 존재하지 않습니다`}
        </div>
      )}
    </>
  );
};

export default CardList;
