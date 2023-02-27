import { useState } from 'react';
import { Icon, Modal } from '@/components/common';
import ImageComponent from '@/components/common/Image';

export default {
  title: 'Components/Common/Modal',
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
          <Icon />
        </button>
      </Modal>
      <div>
        <button
          onClick={() => console.log('click')}
          style={{ border: '1px solid black', padding: '4px 8px' }}
        >
          button
        </button>
      </div>
    </div>
  );
};

// header icon modal, card modal - 클릭한 아이콘, 버튼의 좌측 하단에 표시
export const IconModal = () => {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          position: 'relative',
          width: '50rem',
        }}
      >
        <button
          onClick={() => setIsOpen1(true)}
          style={{ border: '1px solid black', padding: '4px 8px' }}
        >
          Open1
        </button>
        <Modal
          isOpen={isOpen1}
          type="icon"
          onClose={() => setIsOpen1(false)}
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
          onClick={() => setIsOpen2(true)}
          style={{ border: '1px solid black', padding: '4px 8px' }}
        >
          Open2
        </button>
        <Modal
          isOpen={isOpen2}
          type="icon"
          onClose={() => setIsOpen2(false)}
          style={{ top: '2.5rem', right: 0 }}
        >
          modal2
        </Modal>
      </div>
      <div>
        구분선 넣어보기 구분선 넣어보기구분선 넣어보기구분선 넣어보기구분선
        넣어보기 구분선 넣어보기 구분선 넣어보기
      </div>
    </>
  );
};
