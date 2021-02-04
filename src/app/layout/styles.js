import styled from 'styled-components';

export const Popup = styled.div`
  animation-name: growIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  @keyframes growIn {
    0% {
      opacity: 0;
      transform: scale(0) translateY(15rem);
    }

    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: transparent;
  backdrop-filter: blur(2px);
`;
