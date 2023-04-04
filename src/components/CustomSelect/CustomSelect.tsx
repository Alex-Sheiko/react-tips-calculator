import Select, { SingleValue } from 'react-select';
import { SelectOption } from '../../types/types';
import { customStyles } from './styles';

interface CustomSelectProps {
  currentOption: SelectOption;
  setTips: (value: SelectOption) => void;
  options: SelectOption[];
}

export const CustomSelect = ({
  options,
  setTips,
  currentOption,
}: CustomSelectProps) => {
  const handleChange = (option: SingleValue<typeof currentOption>) => {
    if (option) setTips(option);
  };

  return (
    <Select
      options={options}
      isMulti={false}
      styles={customStyles}
      isSearchable={false}
      value={currentOption}
      onChange={handleChange}
    />
  );
};
