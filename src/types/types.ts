import { ActionMeta, OnChangeValue } from 'react-select';

export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps {
  options: SelectOption[];
  onChange: (
    newValue: OnChangeValue<SelectOption, boolean>,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  value: SelectOption;
}
