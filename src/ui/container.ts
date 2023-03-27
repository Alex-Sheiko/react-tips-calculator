import styled from 'styled-components';
import circles from '../assets/circles.svg';

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  width: 100%;
  height: 100vh;
  background: no-repeat #eaf2f2 url(${circles}) top left;
`;
