import { Icon, Text } from '@/components/common';
import SearchBar from '@/components/common/header/SearchBar';

import { isHomeScrolledState } from '@/stores/scroll';
import { useSetRecoilState } from 'recoil';

import { ScatterGraphy } from 'react-scatter-graphy';

import * as variants from '@/styles/variants.css';
import * as style from './style.css';
import hyperlink from '/assets/hyperlink.png';

type mainProps = {
  onScrollDown: () => void;
};

const Main = ({ onScrollDown }: mainProps) => {
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <ScatterGraphy src={hyperlink} />
      </div>
      <SearchBar
        version="banner"
        onEnterPress={() => setIsHomeScrolled(true)}
      />
      <div className={style.toolTip} onClick={onScrollDown}>
        <Icon name="down-long" color={variants.color.primary} size="medium" />
        <Text>아래로 스크롤하여 컨텐츠 확인하기</Text>
      </div>
    </div>
  );
};

export default Main;
