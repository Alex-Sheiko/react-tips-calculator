import Select, { OnChangeValue } from 'react-select';
import { customStyles } from './styles';
import { SelectOption } from '../../types/types';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomSelect = ({ value, onChange }: SelectProps) => {
  const options: SelectOption[] = [
    { value: '1.1', label: '10%' },
    { value: '1.15', label: '15%' },
    { value: '1.2', label: '20%' },
  ];

  const handleSelect = (newValue: OnChangeValue<SelectOption, boolean>) => {
    onChange((newValue as SelectOption).value);
  };

  const getOptionValue = (value: string): SelectOption | undefined => {
    return value ? options.find((option) => option.value === value) : undefined;
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      value={getOptionValue(value)}
      onChange={handleSelect}
    />
  );
};
