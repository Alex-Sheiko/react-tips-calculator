import Select from 'react-select';
import { SelectOption } from '../../types/types';
import { customStyles } from './styles';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomSelect = ({ value, onChange }: SelectProps) => {
  const options: SelectOption[] = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '20', label: '20%' },
  ];

  const handleSelect = (newValue: SelectOption | null) => {
    newValue?.value && onChange(newValue.value);
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
      isMulti={false}
    />
  );
};
