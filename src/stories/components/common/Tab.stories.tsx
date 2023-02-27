import { Tab } from '@/components/common';
import { TabProps } from '@/components/common/tab';

export default {
  title: 'Components/Common/Tab',
  component: Tab,
  argTypes: {
    type: {
      defaultValue: 'header',
      control: 'inline-radio',
      options: ['header', 'modal'],
      description: 'Tab type',
    },
  },
};

export const Default = (args: TabProps) => {
  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <Tab
      {...args}
      items={[
        '실시간 최신 트렌드',
        '실시간 인기 트렌드',
        '구독 피드',
        '크리에이터',
      ]}
      onClick={handleClick}
    />
  );
};
