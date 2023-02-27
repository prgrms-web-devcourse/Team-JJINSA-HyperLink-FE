import { Input } from '@/components/common';
import { InputProps } from '@/components/common/input';
import useInput from '@/hooks/useInput';

export default {
  title: 'Components/Common/Input',
  component: Input,
  argTypes: {
    version: {
      defaultValue: 'normal',
      control: 'inline-radio',
      options: ['normal', 'banner', 'header'],
      description: 'input version consists of [normal, banner, header]',
    },
    type: {
      defaultValue: 'text',
      control: 'inline-radio',
      options: ['text', 'email'],
      description: 'input type consists of [text, email]',
    },
    placeholder: {
      defaultValue: '',
      type: 'string',
      description: 'input placeholder',
    },
    readOnly: {
      defaultValue: false,
      type: 'boolean',
      description: "input's readonly attribute",
    },
    max: {
      defaultValue: undefined,
      type: 'number',
      description: "input's max length attribute",
    },
    label: {
      defaultValue: '',
      type: 'string',
      description: "input's top left label",
    },
  },
};

export const Default = (args: InputProps) => {
  const { value, onChange } = useInput();
  const handleEnterPress = () => {
    console.log(value);
  };
  return (
    <Input
      {...args}
      value={value}
      onChange={onChange}
      onEnterPress={handleEnterPress}
    />
  );
};
