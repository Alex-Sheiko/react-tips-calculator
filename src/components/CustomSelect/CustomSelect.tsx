import Select from 'react-select';
import { SelectOption } from '../../types/types';
import { customStyles } from './styles';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

export const CustomSelect = ({ value, onChange, options }: SelectProps) => {
  const handleSelect = (newValue: SelectOption | null) => {
    newValue?.value && onChange(newValue.value);
  };

  const getOptionValue = (value: string): SelectOption | undefined =>
    value ? options.find((option) => option.value === value) : undefined;

  return (
    <Select
      styles={customStyles}
      options={options}
      value={getOptionValue(value)}
      onChange={handleSelect}
    />
  );
};
