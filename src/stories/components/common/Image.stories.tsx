import ImageComponent, { ImageProps } from '@/components/common/Image';

export default {
  title: 'Components/Common/Image',
  component: ImageComponent,
  argTypes: {
    block: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', require: true },
      defaultValue: 'https://avatars.githubusercontent.com/u/60571418?v=4',
      control: { type: 'text' },
    },
    defaultImage: {
      type: { name: 'string' },
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    width: {
      defaultValue: 200,
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      defaultValue: 200,
      control: { type: 'range', min: 200, max: 600 },
    },
    alt: {
      control: 'string',
    },
    objectFit: {
      defaultValue: 'cover',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (args: ImageProps) => {
  return <ImageComponent {...args} />;
};
