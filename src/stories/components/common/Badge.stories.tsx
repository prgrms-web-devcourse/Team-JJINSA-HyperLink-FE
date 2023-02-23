import { Icon, Badge } from '@/components/common';
import { BadgeProps } from '@/components/common/badge';

export default {
  title: 'Components/Common/Badge',
  component: Badge,
  argTypes: {
    hasText: {
      defaultValue: true,
      control: 'inline-radio',
      options: [true, false],
    },
  },
};

export const Default = (args: BadgeProps) => {
  return (
    <Badge {...args} style={{ marginTop: '10px' }}>
      <Icon name="bookmark" size="xLarge" />
    </Badge>
  );
};
