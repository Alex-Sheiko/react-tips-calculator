import { StyledForm, Title, Subtitle, FormControls, TotalBill } from './styles';
import { useState, useEffect, FormEvent } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';

export const Form = () => {
  const [bill, setBill] = useState<string>('');
  const [persons, setPersons] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [tips, setTips] = useState<string>('10');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const billAmount = parseFloat(bill),
      personsNumber = parseFloat(persons),
      percentTips = parseFloat(tips),
      totalBill =
        ((billAmount * percentTips) / 100) * personsNumber + billAmount;
    setTotal(totalBill);
  };

  useEffect(() => {
    setIsDisabled(!bill || !persons);
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <FormControls>
        <Input
          value={bill}
          type="number"
          placeholder="Enter bill"
          onChange={setBill}
        />
        <Input
          value={persons}
          type="number"
          placeholder="Enter persons"
          onChange={setPersons}
        />
        <CustomSelect value={tips} onChange={setTips} />
      </FormControls>
      <TotalBill>Total: {total.toFixed(2)}$</TotalBill>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
