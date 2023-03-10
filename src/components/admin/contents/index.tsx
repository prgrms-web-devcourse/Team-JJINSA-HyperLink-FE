import {
  activateContent,
  deleteContent,
  getDeactivatedContents,
} from '@/api/admin';
import Pagination from '@/components/admin/pagination';
import { Button, Heading, Spinner, Table, Text } from '@/components/common';
import { contents } from '@/types/admin';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as style from './style.css';

const COLUMNS = ['제목', '주소', '-', '-'];
const TABLE_SIZE = 10;

const Contents = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);

  const { data, isPreviousData: isPrevContents } = useQuery<contents>(
    ['deactivatedContents', page, TABLE_SIZE],
    () => getDeactivatedContents(page, TABLE_SIZE),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const invalidateContents = () => {
    queryClient.invalidateQueries({
      queryKey: ['deactivatedContents'],
    });
  };

  const activateContentMutation = useMutation({
    mutationFn: activateContent,
    onSuccess: invalidateContents,
  });

  const deleteContentMutation = useMutation({
    mutationFn: deleteContent,
    onSuccess: invalidateContents,
  });

  const handleActivateContentClick = (contentId: number) => {
    if (!confirm('활성화 하시겠습니까?')) {
      return;
    }
    activateContentMutation.mutate(contentId);
  };

  const handleDeleteContentClick = (contentId: number) => {
    if (!confirm('삭제 하시겠습니까?')) {
      return;
    }
    deleteContentMutation.mutate(contentId);
  };

  useEffect(() => {
    if (!isPrevContents && data)
      queryClient.prefetchQuery(['deactivatedContents', page, TABLE_SIZE], () =>
        getDeactivatedContents(page, TABLE_SIZE)
      );
  }, [data, isPrevContents]);

  return (
    <div className={style.container}>
      <Heading level={2}>컨텐츠</Heading>
      {!data ? (
        <div className={style.spinnerWrapper}>
          <Spinner size="huge" />
        </div>
      ) : !data.contents.length ? (
        <Heading level={5}>비활성화된 컨텐츠가 없습니다.</Heading>
      ) : (
        <>
          <Table columns={COLUMNS}>
            {data.contents.map(({ contentId, title, link }) => (
              <tr key={contentId}>
                <td className={style.ellipsis}>
                  <Text>{title}</Text>
                </td>
                <td className={style.ellipsis}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={style.link}
                  >
                    <Text>{link}</Text>
                  </a>
                </td>
                <td>
                  <Button
                    text="활성화"
                    onClick={() => handleActivateContentClick(contentId)}
                  />
                </td>
                <td>
                  <Button
                    text="삭제"
                    version="blueInverted"
                    onClick={() => handleDeleteContentClick(contentId)}
                  />
                </td>
              </tr>
            ))}
          </Table>
          <Pagination
            currentPage={data.currentPage}
            totalPage={data.totalPage}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Contents;
