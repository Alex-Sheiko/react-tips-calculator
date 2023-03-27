import { StylesConfig } from 'react-select';
import { SelectOption } from '../../types/types';

export const customStyles: StylesConfig<SelectOption, boolean> = {
  container: (base) => ({
    ...base,
    width: '100%',
  }),

  control: (base, state) => ({
    ...base,
    width: '100%',
    padding: '15.5px 0',
    backgroundColor: '#fff',
    color: '#756C6C',
    outline: 'none',
    borderRadius: '30px',
    borderColor: state.isFocused ? '#2ED2C9' : '#ffffff',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      borderColor: state.isFocused ? '#2ED2C9' : '#ffffff',
    },
  }),

  option: (base, state) => ({
    ...base,
    cursor: 'pointer',
    borderColor: '#2ED2C9',
    color: 'rgba(117, 108, 108, 1)',
    backgroundColor: state.isSelected ? '#2ED2C9' : 'white',
    '&:hover': {
      backgroundColor: state.isFocused
        ? 'rgba(46, 210, 201, 0.3)'
        : 'rgba(46, 210, 201, 0.3)',
    },
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: '#756C6C',
  }),

  indicatorsContainer: (base) => ({
    ...base,
    position: 'absolute',
    right: '30px',
  }),

  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),

  singleValue: (base) => ({
    ...base,
    fontSize: '18px',
    color: '#756C6C',
    textAlign: 'center',
  }),
};
