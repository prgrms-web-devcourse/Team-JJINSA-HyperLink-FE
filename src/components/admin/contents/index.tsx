import { activateContent, deleteContent } from '@/api/admin';
import Pagination from '@/components/admin/pagination';
import { Button, Heading, Table, Text } from '@/components/common';
import { contents } from '@/types/admin';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as style from './style.css';

const COLUMNS = ['제목', '주소', '-', '-'];

type ContentsProps = contents & {
  onPrevClick: () => void;
  onNextClick: () => void;
};

const Contents = ({
  contents,
  currentPage,
  totalPage,
  onPrevClick,
  onNextClick,
}: ContentsProps) => {
  const queryClient = useQueryClient();

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

  console.log(contents);

  return (
    <div className={style.container}>
      <Heading level={2}>컨텐츠</Heading>
      {!contents.length ? (
        <Heading level={5}>비활성화된 컨텐츠가 없습니다.</Heading>
      ) : (
        <>
          <Table columns={COLUMNS}>
            {contents.map(({ contentId, title, link }) => (
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
            currentPage={currentPage}
            totalPage={totalPage}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
          />
        </>
      )}
    </div>
  );
};

export default Contents;
