import { useState } from 'react';
import { Modal } from '@/components/common';
import ImageComponent from '@/components/common/Image';

export default {
  title: 'Components/Modal',
  component: Modal,
};

//login modal - 가운데 표시
export const Default = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '500px',
      }}
    >
      <button
        onClick={() => setIsOpen(true)}
        style={{ border: '1px solid black', padding: '4px 8px' }}
      >
        Open
      </button>
      <Modal isOpen={isOpen} type="center" onClose={() => setIsOpen(false)}>
        <ImageComponent
          defaultImage="https://via.placeholder.com/200"
          src="https://avatars.githubusercontent.com/u/60571418?v=4"
          alt="모달 테스트"
          block={true}
          width="28rem"
          height="20rem"
          objectFit="cover"
        />
        <button onClick={() => setIsOpen(false)} style={{ fontSize: '24px' }}>
          X
        </button>
      </Modal>
    </div>
  );
};

// header icon modal, card modal - 클릭한 아이콘, 버튼의 좌측 하단에 표시
export const IconModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          width: '50rem',
        }}
      >
        <Modal
          isOpen={isOpen}
          type="icon"
          onClose={() => setIsOpen(false)}
          style={{ top: '2.5rem', right: 0 }}
        >
          <ImageComponent
            defaultImage="https://via.placeholder.com/200"
            src="https://avatars.githubusercontent.com/u/60571418?v=4"
            alt="모달 테스트"
            block={true}
            width="28rem"
            height="20rem"
            objectFit="cover"
          />
        </Modal>
        <button
          id="button-modal"
          onClick={() => setIsOpen(true)}
          style={{ border: '1px solid black', padding: '4px 8px' }}
        >
          Open
        </button>
      </div>
      <div>
        구분선 넣어보기 구분선 넣어보기구분선 넣어보기구분선 넣어보기구분선
        넣어보기 구분선 넣어보기 구분선 넣어보기
      </div>
    </>
  );
};
