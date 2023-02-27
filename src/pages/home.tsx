import { LoginModal } from '@/components/modal';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      Home 입니다~ <button onClick={() => setIsOpen(true)}>로그인 모달</button>
      <LoginModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Home;
