import { googleOAuth, login } from '@/api/auth';
import logo from '/favicon.ico';
import googleLogo from '/assets/googleLogo.png';
import { Avatar, Heading, Icon, Modal, Text } from '@/components/common';
import { isAdminState, isAuthorizedState } from '@/stores/auth';

import * as variants from '@/styles/variants.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as style from './style.css';
import { Banner } from '@/components/common';
import { selectedTabState } from '@/stores/tab';
import { lastTabState } from '@/stores/lastTab';

export type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const setIsAuthorized = useSetRecoilState(isAuthorizedState);
  const setIsAdmin = useSetRecoilState(isAdminState);
  const setTabState = useSetRecoilState(selectedTabState);
  const lastTab = useRecoilValue(lastTabState);

  const googleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      onClose();
      const response = await googleOAuth(res.code);

      if (response?.wasSignedUp) {
        const loginResponse = await login();

        if (!loginResponse) return;

        setIsAdmin(loginResponse.admin);
        setIsAuthorized(true);
        if (lastTab === 'SUBSCRIPTIONS') {
          setTabState('SUBSCRIPTIONS');
        }
        return;
      }

      navigate('/signup', { state: { email: response?.email } });
    },
    flow: 'auth-code',
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} type="center">
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.logo}>
            <Avatar src={logo} shape="round" size="small" />
            <Heading level={6} color={variants.color.primary}>
              hyperlink
            </Heading>
          </div>
          <button onClick={onClose}>
            <Icon size="xLarge" className={style.icon} />
          </button>
        </div>
        <div className={style.content}>
          <Heading level={5}>로그인</Heading>
          <Text color={variants.color.font.secondary}>
            세상의 모든 정보를 한눈에!
          </Text>
          <div className={style.bannerWrapper}>
            <Banner size={0.55} />
          </div>
        </div>
        <button className={style.button} onClick={googleLogin}>
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
