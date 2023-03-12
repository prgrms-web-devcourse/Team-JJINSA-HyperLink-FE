import {
  getNotUsingRecommendCompanies,
  modifyUsingRecommendCompany,
} from '@/api/admin';
import AddCompany from '@/components/admin/addCompany';
import Pagination from '@/components/admin/pagination';
import { Button, Heading, Spinner, Table } from '@/components/common';
import { companies } from '@/types/admin';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CompanyName from './companyName';
import * as style from './style.css';

const COLUMNS = ['회사명', '-'];
const TABLE_SIZE = 10;

const Companies = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);

  const { data, isPreviousData } = useQuery<companies>(
    ['notUsingRecommendCompanies', page, TABLE_SIZE],
    () => getNotUsingRecommendCompanies(page, TABLE_SIZE),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const modifyUsingRecommendCompanyMutation = useMutation({
    mutationFn: modifyUsingRecommendCompany,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['notUsingRecommendCompanies', page, TABLE_SIZE],
      }),
  });

  const handleRecommendCompanyClick = (companyId: number) => {
    if (!confirm('추천에 사용하시겠습니까?')) {
      return;
    }
    modifyUsingRecommendCompanyMutation.mutate(companyId);
  };

  useEffect(() => {
    if (!isPreviousData && data)
      queryClient.prefetchQuery(
        ['notUsingRecommendCompanies', page, TABLE_SIZE],
        () => getNotUsingRecommendCompanies(page, TABLE_SIZE)
      );
  }, [data, isPreviousData]);

  return (
    <div className={style.container}>
      <Heading level={2}>회사</Heading>
      <AddCompany />
      {!data ? (
        <div className={style.spinnerWrapper}>
          <Spinner size="huge" />
        </div>
      ) : !data.companies.length ? (
        <Heading level={5}>추천에 사용되지 않는 회사가 없습니다.</Heading>
      ) : (
        <>
          <Table columns={COLUMNS}>
            {data.companies.map(({ companyId, companyName }) => (
              <tr key={companyId}>
                <CompanyName
                  page={page}
                  companyId={companyId}
                  companyName={companyName}
                />
                <td>
                  <Button
                    text="추천"
                    onClick={() => handleRecommendCompanyClick(companyId)}
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

export default Companies;
