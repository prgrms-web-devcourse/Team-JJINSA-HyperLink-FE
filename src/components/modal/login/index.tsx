import logo from '@/assets/favicon.ico';
import googleLogo from '@/assets/googleLogo.png';
import { Avatar, Heading, Icon, Modal, Text } from '@/components/common';
import * as variants from '@/styles/variants.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import * as style from './style.css';

export type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      console.log(res);
      onClose();
      navigate('/signup', { state: { email: 'example@gmail.com' } });
      // TODO: API call 후 response에 따라 navigate
    },
    flow: 'auth-code',
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} type="center">
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.logo}>
            <Avatar src={logo} shape="round" size="small" />
            <Heading level={6} color={variants.vars.color.primary}>
              hyperlink
            </Heading>
          </div>
          <button onClick={onClose}>
            <Icon size="xLarge" className={style.icon} />
          </button>
        </div>
        <div className={style.content}>
          <Heading level={5}>로그인</Heading>
          <Text color={variants.vars.color.font.secondary}>
            세상의 모든 정보를 한눈에!
          </Text>
          {/* TODO: 배너 이미지 추가 */}
        </div>
        <button className={style.button} onClick={() => googleLogin()}>
          <img
            src={googleLogo}
            alt="Google logo"
            className={style.googleLogo}
          />
          <Text weight={600}>구글 로그인</Text>
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
