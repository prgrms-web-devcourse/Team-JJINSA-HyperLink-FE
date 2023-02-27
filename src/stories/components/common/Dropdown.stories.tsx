import { Dropdown } from '@/components/common';
import { DropdownProps } from '@/components/common/dropdown';
import { useState } from 'react';

export default {
  title: 'Components/Common/Dropdown',
  component: Dropdown,
  argTypes: {
    placeholder: {
      defaultValue: '값을 선택하세요.',
      type: 'string',
    },
    label: {
      defaultValue: '',
      type: 'string',
    },
  },
};

export const Default = (args: DropdownProps) => {
  const [value, setValue] = useState('');
  const handleItemClick = (item: string) => {
    setValue(item);
  };

  return (
    <div style={{ width: '50rem' }}>
      <Dropdown
        {...args}
        value={value}
        items={[
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
          'item7',
          'item8',
          'item9',
          'item10',
        ]}
        onItemClick={handleItemClick}
      />
    </div>
  );
};
