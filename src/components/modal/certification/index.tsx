import { Button, Icon, Input, Modal, Text } from '@/components/common';
import useInput from '@/hooks/useInput';
import { color } from '@/styles/variants.css';
import { useState } from 'react';
import * as style from './style.css';

export type CertificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CertificationModal = ({ isOpen, onClose }: CertificationModalProps) => {
  const [isSend, setIsSend] = useState(false);
  const { value: email, onChange: handleEmailChange } = useInput('');

  const handleSubmit = () => {
    // 메일 인증 받는 로직
    setIsSend(true);
  };

  return (
    <Modal type="icon" isOpen={isOpen} onClose={onClose}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <Text block weight={800} size="xLarge">
            {isSend ? '메일을 확인해주세요' : '소속 이메일 인증하기'}
          </Text>
          <div onClick={onClose}>
            <Icon size="xLarge" />
          </div>
        </div>
        {isSend ? (
          <div className={style.modalInputWrapper}>
            <Text block weight={600} color={color.primary}>
              {email}
            </Text>
            <Text block size="small" color="#484848">
              위 주소로 인증 메일이 발송되었습니다.
              <br />
              메일이 확인되지 않는다면 &#91;스팸함&#93;을 확인해주세요.
            </Text>
          </div>
        ) : (
          <>
            <div className={style.modalInputWrapper}>
              <Input
                placeholder="hyperlink@hl.ac.kr"
                label="이메일"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              <Text block size="small" color="#484848">
                * 해당 정보는 게시글 추천 용도로 사용됩니다.
                <br />* 인증된 메일은 모두 비공개로 관리됩니다.
              </Text>
            </div>
            <Button text="인증 메일 전송하기" isBold onClick={handleSubmit} />
          </>
        )}
      </div>
    </Modal>
  );
};

export default CertificationModal;
