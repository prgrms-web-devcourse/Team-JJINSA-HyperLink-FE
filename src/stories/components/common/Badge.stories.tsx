import { Badge } from '@/components/common';
import { BadgeProps } from '@/components/common/badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    isText: {
      defaultValue: true,
      control: 'inline-radio',
      options: [true, false],
    },
  },
};

export const Default = (args: BadgeProps) => {
  return <Badge {...args} />;
};
