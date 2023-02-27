import { Icon } from '@/components/common';
import { IconProps } from '@/components/common/icon';
import * as variants from '@/styles/variants.css';

export default {
  title: 'Components/Common/Icon',
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
      defaultValue: variants.color.icon,
      control: 'color',
      type: 'string',
      description: 'icon color',
    },
  },
};

export const Default = (args: IconProps) => {
  return <Icon {...args} />;
};
