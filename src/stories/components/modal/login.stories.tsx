import { LoginModal } from '@/components/modal';
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
const { VITE_GOOGLE_CLIENT_ID } = import.meta.env;

export default {
  title: 'Components/Modal/LoginModal',
  component: LoginModal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
      <div>
        <button onClick={() => setIsOpen(true)}>로그인 모달</button>
        <LoginModal isOpen={isOpen} onClose={handleClose} />
      </div>
    </GoogleOAuthProvider>
  );
};
