import { isAuthorizedState } from '@/stores/auth';
import { lastTabState } from '@/stores/lastTab';
import { isLoginModalVisibleState } from '@/stores/modal';
import { selectedTabState } from '@/stores/tab';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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
  const tabState = useRecoilValue(selectedTabState);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);
  const navigate = useNavigate();
  const setLastTabState = useSetRecoilState(lastTabState);

  const handleClick = (item: string) => {
    if (item === '구독 피드' && !isAuthorized) {
      setIsLoginModalVisible(true);
      setLastTabState('SUBSCRIPTIONS');
      return;
    }
    if (item === '크리에이터') {
      navigate('/creatorList');
      onClick(item);
      return;
    }
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
