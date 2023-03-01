import { Card } from '@/components/common';
import { CardProps } from '@/components/common/card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['creator', 'content'],
      defaultValue: 'creator',
    },
  },
};

export const Default = (args: CardProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <Card {...args}>card입니다</Card>
    </div>
  );
};
