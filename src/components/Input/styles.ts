import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 21px 0;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  border: 1px solid transparent;
  outline: none;
  background: #ffffff;
  border-radius: 30px;
  color: rgb(117, 108, 108);

  &:focus {
    border-color: #2ed2c9;
  }

  &::placeholder {
    color: rgba(117, 108, 108, 0.6);
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
