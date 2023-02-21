import { Icon } from '@/components/common';
import { IconProps } from '@/components/common/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    type: {
      defaultValue: 'solid',
      control: 'inline-radio',
      options: ['light', 'regular', 'solid', 'thin'],
      description: 'icon type',
    },
    name: {
      defaultValue: 'xmark',
      type: 'string',
      description: 'icon name',
    },
    size: {
      defaultValue: 'medium',
      control: 'inline-radio',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      description: 'icon size',
    },
    color: {
      defaultValue: '#9a9a9a',
      control: 'color',
      type: 'string',
      description: 'icon color',
    },
  },
};

export const Default = (args: IconProps) => {
  return <Icon {...args} />;
};
