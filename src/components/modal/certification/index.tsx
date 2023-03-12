import { Icon, Modal, Text } from '@/components/common';
import { useState } from 'react';
import NotSendedView from './NotSendedView';
import SendedView from './SendedView';
import * as style from './style.css';

export type CertificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CertificationModal = ({ isOpen, onClose }: CertificationModalProps) => {
  const [isSend, setIsSend] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Modal type="center" isOpen={isOpen} onClose={onClose}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <Text block weight={800} size="xLarge">
            소속 회사 이메일 인증
          </Text>
          <div onClick={onClose}>
            <Icon size="xLarge" />
          </div>
        </div>
        {isSend ? (
          <SendedView email={email} />
        ) : (
          <NotSendedView
            setIsSendTrue={() => setIsSend(true)}
            setEmail={(email) => setEmail(email)}
          />
        )}
      </div>
    </Modal>
  );
};

export default CertificationModal;
