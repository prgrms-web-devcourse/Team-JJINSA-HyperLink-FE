import { Slider } from '@/components/common';
import { SliderProps } from '@/components/common/slider';

export default {
  title: 'Components/Common/Slider',
  component: Slider,
};

export const Default = (args: SliderProps) => {
  return (
    <Slider {...args}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        1
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        2
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        3
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        4
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        5
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        6
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '200px',
          height: '100px',
          background: '#fff',
          borderRadius: '8px',
          color: '#111',
          fontSize: '25px',
        }}
      >
        7
      </div>
    </Slider>
  );
};
