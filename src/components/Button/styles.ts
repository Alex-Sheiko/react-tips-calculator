import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 13px 0;
  font-size: 24px;
  line-height: 35px;
  background-color: #2ed2c9;
  border: none;
  color: #fff;
  opacity: 1;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
    :hover {
      cursor: default;
    }
  }
`;
