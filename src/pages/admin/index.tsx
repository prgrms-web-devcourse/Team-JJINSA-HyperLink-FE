import { getAllCreators, getDeactivatedContents } from '@/api/admin';
import { Contents, Creators } from '@/components/admin';
import { Divider, Spinner } from '@/components/common';
import { content, creator } from '@/types/admin';
import { useQuery } from '@tanstack/react-query';
import * as style from './style.css';

const Admin = () => {
  const { data: contents } = useQuery<content[]>(
    ['deactivatedContents'],
    getDeactivatedContents,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: creators } = useQuery<creator[]>(
    ['allCreators'],
    getAllCreators,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (!contents || !creators) {
    return <Spinner size="huge" />;
  }

  return (
    <div className={style.container}>
      <Contents contents={contents} />
      <Divider />
      <Creators creators={creators} />
      <Divider />
    </div>
  );
};

export default Admin;
