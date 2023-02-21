import { Button } from '@/components/common';
import { ButtonProps } from '@/components/common/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    version: {
      defaultValue: 'blue',
      control: 'inline-radio',
      options: ['blue', 'blueInverted', 'grayInverted'],
    },
    fontSize: {
      defaultValue: 'small',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    fontWeight: {
      defaultValue: false,
      type: 'boolean',
    },
    paddingSize: {
      defaultValue: 'small',
      control: 'inline-radio',
      options: ['small', 'medium', 'full'],
    },
    text: {
      defaultValue: 'button',
      control: 'text',
    },
  },
};

export const Default = (args: ButtonProps) => {
  return <Button {...args} />;
};
