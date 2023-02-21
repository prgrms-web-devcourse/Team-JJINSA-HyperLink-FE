import { Button } from '@/components/common';
import { ButtonProps } from '@/components/common/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    fontSize: {
      default: 'small',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    fontWeight: {
      defaultValue: false,
      type: 'boolean',
    },
    textColor: {
      defaultValue: '#fff',
      control: 'color',
    },
    backgroundColor: {
      defaultValue: '#3772FF',
      control: 'color',
    },
    border: {
      defaultValue: false,
      control: 'boolean',
    },
    borderColor: {
      defaultValue: '#3772FF',
      control: 'color',
    },
    borderWidth: {
      defaultValue: 1.5,
      control: 'number',
    },
    paddingSize: {
      default: 'small',
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
