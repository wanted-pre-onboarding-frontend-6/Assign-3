import styled, { keyframes } from 'styled-components';

function Spinner() {
  return (
    <BlackBackground>
      <LoadingSpinner />
    </BlackBackground>
  );
}

export default Spinner;

const BlackBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.subColor};
`;

const spin = keyframes`
to{
  transform: rotate(360deg);
}`;

const LoadingSpinner = styled.div`
  display: block;
  position: absolute;
  left: 50%;
  top: 30%;
  width: 50px;
  height: 50px;
  border: 4px solid ${props => props.theme.blackColor};
  border-radius: 50%;
  border-top-color: ${props => props.theme.mainColor};
  animation: ${spin} 1s linear infinite;
`;
