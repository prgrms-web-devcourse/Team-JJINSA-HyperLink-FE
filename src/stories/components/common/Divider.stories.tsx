import { Divider } from '@/components/common';
import { DividerProps } from '@/components/common/divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    type: {
      defaultValue: 'horizontal',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      description: 'divider type',
    },
  },
};

export const Default = (args: DividerProps) => {
  return <Divider {...args} />;
};
