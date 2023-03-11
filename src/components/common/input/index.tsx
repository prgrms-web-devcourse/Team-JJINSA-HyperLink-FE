import { Icon, Text } from '@/components/common';
import { ChangeEvent, CSSProperties, KeyboardEvent } from 'react';
import * as style from './style.css';

export type InputProps = {
  label?: string;
  version?: 'normal' | 'banner' | 'header';
  type?: 'text' | 'email';
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  max?: number;
  onChange?: (value: string) => void;
  onEnterPress?: () => void;
  needResetWhenEnter?: boolean;
  style?: CSSProperties;
};

const Input = ({
  label = '',
  version = 'normal',
  type = 'text',
  placeholder = '',
  readOnly = false,
  value = '',
  max,
  onChange,
  onEnterPress,
  needResetWhenEnter = true,
  ...props
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (max && e.target.value.length > max) {
      e.target.value = e.target.value.slice(0, max);
    }

    onChange?.(e.target.value);
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!onEnterPress || e.key !== 'Enter') {
      return;
    }

    onEnterPress();
    if (needResetWhenEnter) {
      onChange?.('');
    }
  };

  return (
    <div
      className={style.inputContainer({
        version,
        readOnly,
        hasLabel: label ? true : false,
      })}
      style={{ ...props.style }}
    >
      {version !== 'normal' && (
        <Icon name="search" size={version === 'banner' ? 'xLarge' : 'medium'} />
      )}
      {label && <Text className={style.label}>{label}</Text>}
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
