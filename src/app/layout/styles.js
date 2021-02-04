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
