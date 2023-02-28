import CardList from '@/components/cardList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/cardlist', {
      headers: {
        Accept: 'application / json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div style={{ margin: ' 3rem 10rem', minWidth: '60.6rem' }}>
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
