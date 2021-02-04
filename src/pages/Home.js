import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Home = () => {
  return (
    <Container>
      <h1>
        Go to Activities <Link to='/activities'>Login</Link>
      </h1>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  text-align: center;
  font-size: 2rem;
`;
