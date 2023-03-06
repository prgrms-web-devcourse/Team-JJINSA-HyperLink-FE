import { Avatar, Button, Heading, Table, Text } from '@/components/common';
import { creator } from '@/types/admin';
import { CATEGORIES } from '@/utils/constants/signup';
import { getKeyByValue } from '@/utils/object';
import AddCreator from '../addCreator';
import * as style from './style.css';
import user from '/assets/user.svg';

const COLUMNS = ['프로필', '이름', '카테고리명', '-'];

const Creators = ({ creators }: { creators: creator[] }) => {
  return (
    <div className={style.container}>
      <Heading level={2}>크리에이터</Heading>
      <AddCreator />
      <Table columns={COLUMNS}>
        {creators.map((creator) => (
          <tr key={creator.creatorId}>
            <td>
              <Avatar src={creator.profileImgUrl || user} />
            </td>
            <td className={style.ellipsis}>
              <Text>{creator.name}</Text>
            </td>
            <td>
              <Text>{getKeyByValue(CATEGORIES, creator.categoryName)}</Text>
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

export default Creators;
