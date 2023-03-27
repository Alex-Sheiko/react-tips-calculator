import { StyledButton } from './styles';

interface ButtonProps {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: ButtonProps) => {
  return (
    <StyledButton disabled={isDisabled} type="submit">
      Ohhhoooo 🍻
    </StyledButton>
  );
};
