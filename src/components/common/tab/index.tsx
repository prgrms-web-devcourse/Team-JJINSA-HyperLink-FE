import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import { selectedTabState } from '@/stores/tab';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import * as style from './style.css';

export type TabProps = {
  items: string[];
  originalItems: { [key: string]: string };
  type?: 'header' | 'modal';
  onClick: (item: string) => void;
  style?: CSSProperties;
};

const Tab = ({
  items,
  originalItems,
  type = 'header',
  onClick,
  ...props
}: TabProps) => {
  const [tabState, setTabState] = useRecoilState(selectedTabState);
  const [isAuthorized, setIsAuthorized] = useRecoilState(isAuthorizedState);
  const [isLoginModalVisible, setIsLoginModalVisible] = useRecoilState(
    isLoginModalVisibleState
  );
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    if (item === '구독 피드' && !isAuthorized) {
      setIsLoginModalVisible(true);
      return false;
    }
    if (item === '크리에이터') {
      navigate('/creatorList');
      setTabState(item);
      onClick(item);
      return;
    }
    setTabState(item);
    onClick(item);
    navigate('/');
  };

  return (
    <ul
      className={style.tabList({ type })}
      style={{ ...props.style }}
      {...props}
    >
      {items.map((item) => {
        return (
          <li
            className={style.tabItem({
              type,
              isClicked: originalItems[tabState] === item,
            })}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
