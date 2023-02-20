import { Icon } from '@/components/common';
import { CSSProperties } from 'react';

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
      defaultValue: 1.0,
      control: { type: 'number', min: 0.4, max: 30.0, step: 0.1 },
      type: 'number',
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

export const Default = (
  args: JSX.IntrinsicAttributes & {
    type?: 'light' | 'regular' | 'solid' | 'thin';
    name?: string;
    size?: number;
    color?: string;
    style?: CSSProperties;
  }
) => {
  return <Icon {...args} />;
};
