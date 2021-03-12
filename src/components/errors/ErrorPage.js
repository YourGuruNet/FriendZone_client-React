import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <ErrorSection>
      <h1>'Error 404 </h1>
      <Link className='home_button' to='/'>
        Go back to home page
      </Link>
    </ErrorSection>
  );
};

export default ErrorPage;

const ErrorSection = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 10rem;
  display: block;

  h1 {
    font-size: 5rem;
  }

  .home_button {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background-color: var(--baseColor-Dark-2);
    border: solid 0.1rem var(--baseColor-Dark-2);
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    text-transform: uppercase;
    color: var(--baseColor);
    font-size: 2.5rem;
    transition: all 0.3s;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: var(--baseColor);
      color: var(--baseColor-Dark-2);
    }
    :active {
      transform: scale(0.9);
    }
  }
`;
