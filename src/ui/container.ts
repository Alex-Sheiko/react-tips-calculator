import styled from 'styled-components';
import circles from '../assets/circles.svg';

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 0 15px;
  background: no-repeat #eaf2f2 url(${circles});
`;
