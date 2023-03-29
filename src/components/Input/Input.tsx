import { ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface InputProps {
  value: string;
  placeholder: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, type, onChange }: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};
