import { Avatar } from '@/components/common';
import { AvatarProps } from '@/components/common/avatar';

export default {
  title: 'Components/Common/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      type: { name: 'string', require: true },
      defaultValue: 'https://avatars.githubusercontent.com/u/60571418?v=4',
      control: { type: 'text' },
    },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'square'],
    },
    size: {
      defaultValue: 'medium',
      control: 'inline-radio',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    },
  },
};

export const Default = (args: AvatarProps) => {
  return <Avatar {...args} />;
};
