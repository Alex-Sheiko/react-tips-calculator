import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  align-items: center;
  text-align: center;
  min-width: 320px;
  @media (min-width: 768px) {
    min-width: 459px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: rgba(117, 108, 108, 0.57);
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const FormControls = styled.div`
  display: grid;
  grid-gap: 15px;
`;

const TotalBill = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: left;
  @media (min-width: 420px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

export { StyledForm, Title, Subtitle, TotalBill, FormControls };
