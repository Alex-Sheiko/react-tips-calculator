import { StyledForm, Title, Subtitle, FormControls, TotalBill } from './styles';
import { useState, useEffect, FormEvent } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useInput } from '../../hooks/useInput';
import { SelectOption } from '../../types/types';

const options: SelectOption[] = [
  { value: 10, label: '10%' },
  { value: 15, label: '15%' },
  { value: 20, label: '20%' },
];

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tips, setTips] = useState<SelectOption>(options[0]);
  const [isDisabled, setisDisabled] = useState(true);
  const [total, setTotal] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (bill.value && persons.value) {
      setTotal(
        (+bill.value + (+bill.value * tips.value) / 100) / +persons.value
      );
    }
  };

  useEffect(() => {
    if (bill.value && persons.value) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <FormControls>
        <Input {...bill} type="number" placeholder="Enter bill" />
        <Input {...persons} type="number" placeholder="Enter persons" />
        <CustomSelect
          options={options}
          setTips={setTips}
          currentOption={tips}
        />
      </FormControls>
      <TotalBill>Total: {total.toFixed(2)}$</TotalBill>
      <Button disabled={isDisabled} type="submit">
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
