import { StyledForm, Title, Subtitle, FormControls, TotalBill } from './styles';
import { useState, useEffect, FormEvent } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useInput } from '../../hooks/useInput';
import { SelectOption } from '../../types/types';

interface FormProps {
  options: SelectOption[];
}

export const Form = ({ options }: FormProps) => {
  const bill = useInput();
  const persons = useInput();
  const [total, setTotal] = useState('0');
  const [tips, setTips] = useState('1.1');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const billAmount = parseFloat(bill.value),
      personsNumber = parseFloat(persons.value),
      percentTips = parseFloat(tips),
      totalBill = ((billAmount * percentTips) / personsNumber).toFixed(2);
    setTotal(totalBill);
  };

  useEffect(() => {
    setIsDisabled(!bill.value || !persons.value);
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <FormControls>
        <Input {...bill} type="number" placeholder="Enter bill" />
        <Input {...persons} type="number" placeholder="Enter persons" />
        <CustomSelect value={tips} onChange={setTips} options={options} />
      </FormControls>
      <TotalBill>Total: {total}$</TotalBill>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
