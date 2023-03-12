import { deleteCreator, getAllCreators } from '@/api/admin';
import { deleteFileFromS3 } from '@/api/s3Image';
import AddCreator from '@/components/admin/addCreator';
import Pagination from '@/components/admin/pagination';
import {
  Avatar,
  Button,
  Heading,
  Spinner,
  Table,
  Text,
} from '@/components/common';
import { creators } from '@/types/admin';
import { CATEGORIES } from '@/utils/constants/signup';
import { getKeyByValue } from '@/utils/object';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as style from './style.css';
import user from '/assets/user.svg';

const COLUMNS = ['프로필', '이름', '카테고리명', '-'];
const TABLE_SIZE = 10;

const Creators = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);

  const { data, isPreviousData: isPrevCreators } = useQuery<creators>(
    ['allCreators', page, TABLE_SIZE],
    () => getAllCreators(page, TABLE_SIZE),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const deleteCreatorMutation = useMutation({
    mutationFn: deleteCreator,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['allCreators'],
      }),
  });

  const handleDeleteCreatorClick = async (
    creatorId: number,
    profileImgUrl: string
  ) => {
    if (!confirm('삭제 하시겠습니까?')) {
      return;
    }

    if (profileImgUrl) {
      await deleteFileFromS3(profileImgUrl);
    }
    deleteCreatorMutation.mutate(creatorId);
  };

  useEffect(() => {
    if (!isPrevCreators && data)
      queryClient.prefetchQuery(['allCreators', page, TABLE_SIZE], () =>
        getAllCreators(page, TABLE_SIZE)
      );
  }, [data, isPrevCreators]);

  return (
    <div className={style.container}>
      <Heading level={2}>크리에이터</Heading>
      <AddCreator />
      {!data ? (
        <div className={style.spinnerWrapper}>
          <Spinner size="huge" />
        </div>
      ) : !data.creators.length ? (
        <Heading level={5}>크리에이터가 없습니다.</Heading>
      ) : (
        <>
          <Table columns={COLUMNS}>
            {data.creators.map(
              ({ creatorId, profileImgUrl, name, categoryName }) => (
                <tr key={creatorId}>
                  <td>
                    <Avatar src={profileImgUrl || user} />
                  </td>
                  <td className={style.ellipsis}>
                    <Text>{name}</Text>
                  </td>
                  <td>
                    <Text>{getKeyByValue(CATEGORIES, categoryName)}</Text>
                  </td>
                  <td>
                    <Button
                      text="삭제"
                      version="blueInverted"
                      onClick={() =>
                        handleDeleteCreatorClick(creatorId, profileImgUrl)
                      }
                    />
                  </td>
                </tr>
              )
            )}
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

export default Creators;
