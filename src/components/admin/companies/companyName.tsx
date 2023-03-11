import { modifyCompanyName } from '@/api/admin';
import { Input } from '@/components/common';
import useInput from '@/hooks/useInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type CompanyNameProps = {
  page: number;
  companyId: number;
  companyName: string;
};

const TABLE_SIZE = 10;

const CompanyName = ({ page, companyId, companyName }: CompanyNameProps) => {
  const queryClient = useQueryClient();
  const name = useInput(companyName);

  const modifyCompanyNameMutation = useMutation({
    mutationFn: modifyCompanyName,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notUsingRecommendCompanies', page, TABLE_SIZE],
      });
      alert('회사 이름이 변경되었습니다.');
    },
  });

  const handleEnterPress = (companyId: number, companyName: string) => {
    modifyCompanyNameMutation.mutate({ companyId, companyName });
  };

  return (
    <td>
      <Input
        value={name.value}
        onChange={name.onChange}
        onEnterPress={() => handleEnterPress(companyId, name.value)}
        needResetWhenEnter={false}
      />
    </td>
  );
};

export default CompanyName;
