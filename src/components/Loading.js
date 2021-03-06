import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Animation>
      <div className='spinner'></div>
    </Animation>
  );
};

export default Loading;

const Animation = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .spinner {
    display: inline-block;
    width: 8rem;
    height: 8rem;
    :after {
      content: ' ';
      display: block;
      width: 6.4rem;
      height: 6.4rem;
      margin: 0.8rem;
      border-radius: 50%;
      border: 0.6rem solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
