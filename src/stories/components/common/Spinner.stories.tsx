import { Spinner } from '@/components/common';
import { SpinnerProps } from '@/components/common/spinner';
import * as variants from '@/styles/variants.css';

export default {
  title: 'Components/Common/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 'huge',
      control: 'inline-radio',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'huge'],
      description: 'spinner icon size',
    },
    color: {
      defaultValue: variants.color.bg.select,
      control: 'color',
      type: 'string',
      description: 'spinner icon color',
    },
    loading: {
      defaultValue: true,
      control: 'boolean',
      type: 'boolean',
      description: 'spinner visible',
    },
  },
};

export const Default = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};
