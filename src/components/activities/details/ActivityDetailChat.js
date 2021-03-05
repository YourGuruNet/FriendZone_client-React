import React, { Fragment } from 'react';
import styled from 'styled-components';
import image from '../../../assets/no-user-image.gif';

const ActivityDetailChat = () => {
  return (
    <Fragment>
      <Container>
        <img src={image} alt='Avatar' />
        <p>Hello. How are you today?</p>
        <span className='time-right'>11:00</span>
      </Container>

      <Container>
        <img src={image} alt='Avatar' className='right' />
        <p>Hey! I'm fine. Thanks for asking!</p>
        <span className='time-left'>11:01</span>
      </Container>

      <Container>
        <img src={image} alt='Avatar' />
        <p>Sweet! So, what do you wanna do today?</p>
        <span className='time-right'>11:02</span>
      </Container>

      <Container>
        <img src={image} alt='Avatar' className='right' />
        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
        <span className='time-left'>11:05</span>
      </Container>
    </Fragment>
  );
};

export default ActivityDetailChat;

const Container = styled.div`
  /* Chat containers */
  background-color: var(--baseColor-Light);
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  padding: 1rem;
  margin: 1rem 0;

  /* Clear floats */
  :after {
    content: '';
    clear: both;
    display: table;
  }

  p {
    font-size: 1.2rem;
    padding: 1rem;
    padding-left: 2rem;
  }

  /* Style images */
  img {
    float: left;
    max-width: 6rem;
    width: 100%;
    margin-right: 2rem;
    border-radius: 50%;
  }

  /* Style the right image */
  img.right {
    float: right;
    margin-left: 20px;
    margin-right: 0;
  }

  /* Style time text */
  .time-right {
    float: right;
    color: var(--baseColor-Light-2);
  }

  /* Style time text */
  .time-left {
    float: left;
    color: var(--baseColor-Light-2);
  }
`;
