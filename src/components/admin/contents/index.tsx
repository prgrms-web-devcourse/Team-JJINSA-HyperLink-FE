import { Button, Heading, Table, Text } from '@/components/common';
import { content } from '@/types/admin';
import * as style from './style.css';

const COLUMNS = ['제목', '주소', '-', '-'];

const Contents = ({ contents }: { contents: content[] }) => {
  return (
    <div className={style.container}>
      <Heading level={3}>컨텐츠</Heading>
      <Table columns={COLUMNS}>
        {contents.map((content) => (
          <tr key={content.contentId}>
            <td className={style.ellipsis}>
              <Text>{content.title}</Text>
            </td>
            <td className={style.ellipsis}>
              <Text>{content.link}</Text>
            </td>
            <td>
              <Button text="활성화" />
            </td>
            <td>
              <Button text="삭제" version="blueInverted" />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Contents;
