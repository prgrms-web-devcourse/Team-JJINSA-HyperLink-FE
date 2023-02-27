import { Button } from '@/components/common';
import { ButtonProps } from '@/components/common/button';

export default {
  title: 'Components/Common/Button',
  component: Button,
  argTypes: {
    version: {
      defaultValue: 'blue',
      control: 'inline-radio',
      options: ['blue', 'blueInverted', 'gray', 'grayInverted', 'white'],
    },
    shape: {
      defaultValue: 'round',
      control: 'inline-radio',
      options: ['round', 'circle'],
    },
    fontSize: {
      defaultValue: 'small',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    paddingSize: {
      defaultValue: 'small',
      control: 'inline-radio',
      options: ['small', 'medium', 'full'],
    },
    isBold: {
      defaultValue: false,
      type: 'boolean',
    },
    text: {
      defaultValue: 'button',
      control: 'text',
    },
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
};

export const Default = (args: ButtonProps) => {
  return <Button {...args} />;
};
