import { getCardList } from '@/api/cardlist';
import CardList from '@/components/cardList';
import { Spinner } from '@/components/common';
import { content } from '@/types/contents';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const Home = () => {
  const [cards, setCards] = useState<content[]>([]);
  const category = 'all';
  const { isLoading, isError } = useQuery(
    ['cardlist', category],
    async () => await getCardList(category),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data: content[]) => {
        setCards(data);
      },
    }
  );

  if (isError) return <div>Error!!!</div>;
  if (isLoading) return <Spinner size="huge" />;

  return (
    <div style={{ margin: ' 3rem 10rem', minWidth: '60.6rem' }}>
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
