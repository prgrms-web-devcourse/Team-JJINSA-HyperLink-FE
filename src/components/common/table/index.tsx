import { Text } from '@/components/common';
import { ReactNode } from 'react';
import * as style from './style.css';

type TableProps = {
  columns: string[];
  children: ReactNode;
};

const Table = ({ columns, children }: TableProps) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={style.th({
                version: ['-', '프로필'].includes(column) ? 'small' : undefined,
              })}
            >
              <Text weight={700} size="large">
                {column}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
