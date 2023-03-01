import { Banner } from '@/components/common';
import { BannerProps } from '@/components/common/banner';

export default {
  title: 'Components/Common/Banner',
  component: Banner,
  argTypes: {
    size: {
      defaultValue: 1,
      type: 'number',
    },
  },
};

export const Default = (args: BannerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Banner {...args} />
    </div>
  );
};
