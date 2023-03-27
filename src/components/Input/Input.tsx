import { ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface InputProps {
  value: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
}

export const Input = ({ placeholder, value, type, onChange }: InputProps) => {
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={handleValue}
    />
  );
};
