import styled, { keyframes } from 'styled-components';
import { BlackBackGround, LoadingSpinner } from 'styles/Common';

function Spinner() {
  return (
    <BlackBackGround>
      <LoadingSpinner />
    </BlackBackGround>
  );
}

export default Spinner;
