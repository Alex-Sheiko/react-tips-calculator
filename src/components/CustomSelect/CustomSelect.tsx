import Select, { OnChangeValue } from 'react-select';
import { customStyles } from './styles';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

interface SelectOption {
  value: string;
  label: string;
}

export const CustomSelect = ({ value, onChange }: SelectProps) => {
  const options: SelectOption[] = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '20', label: '20%' },
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
