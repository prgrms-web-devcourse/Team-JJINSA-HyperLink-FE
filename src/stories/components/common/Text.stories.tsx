import { Text } from '@/components/common';
import { TextProps } from '@/components/common/text';

export default {
  title: 'Components/Common/Text',
  component: Text,
  argTypes: {
    block: {
      defaultValue: false,
      type: 'boolean',
    },
    paragraph: {
      defaultValue: false,
      type: 'boolean',
    },
    size: {
      defaultValue: 'medium',
      control: 'inline-radio',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      description: 'text size',
    },
    weight: {
      defaultValue: 400,
      control: 'inline-radio',
      options: [300, 400, 500, 600, 700, 800],
      description: 'text weight',
    },
    color: {
      defaultValue: '#9a9a9a',
      control: 'color',
      type: 'string',
      description: 'text color',
    },
  },
};

export const Default = (args: TextProps) => {
  return <Text {...args}>Text test</Text>;
};
