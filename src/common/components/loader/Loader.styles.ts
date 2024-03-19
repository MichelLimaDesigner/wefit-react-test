import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

export const SpinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem auto;
`;

export const Spin = styled.img`
  animation: ${rotate} 0.8s ease-in-out infinite;
`;
