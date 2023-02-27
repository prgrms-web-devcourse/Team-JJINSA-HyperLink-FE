import { Heading } from '@/components/common';
import { HeadingProps } from '@/components/common/heading';
import * as variants from '@/styles/variants.css';

export default {
  title: 'Components/Common/Heading',
  component: Heading,
  argTypes: {
    level: {
      defaultValue: 1,
      control: 'inline-radio',
      options: [1, 2, 3, 4, 5, 6],
      description: 'heading level',
    },
    color: {
      defaultValue: variants.color.font.primary,
      control: 'color',
      type: 'string',
      description: 'heading color',
    },
  },
};

export const Default = (args: HeadingProps) => {
  return <Heading {...args}>Heading test</Heading>;
};
