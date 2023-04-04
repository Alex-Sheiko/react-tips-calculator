import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
