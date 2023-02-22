import { ChangeEvent, KeyboardEvent } from 'react';
import { Icon } from '@/components/common';
import * as style from './style.css';

export type InputProps = {
  version?: 'normal' | 'banner' | 'header';
  type?: 'text' | 'email';
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  max?: number;
  onChange?: (value: string) => void;
  onEnterPress?: () => void;
};

const Input = ({
  version = 'normal',
  type = 'text',
  placeholder = '',
  readOnly = false,
  value = '',
  max,
  onChange,
  onEnterPress,
  ...props
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (max && e.target.value.length > max) {
      e.target.value = e.target.value.slice(0, max);
    }

    onChange && onChange(e.target.value);
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!onEnterPress || e.key !== 'Enter') {
      return;
    }

    onEnterPress();
    onChange && onChange('');
  };
  console.log(placeholder);

  return (
    <div className={style.inputContainer({ version, readOnly })}>
      {version !== 'normal' && (
        <Icon name="search" size={version === 'banner' ? 'xLarge' : 'medium'} />
      )}
      <input
        className={style.input}
        type={type}
        placeholder={
          version === 'normal' ? placeholder : '키워드를 검색하세요.'
        }
        readOnly={readOnly}
        value={value}
        maxLength={max}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
        {...props}
      />
    </div>
  );
};

export default Input;
