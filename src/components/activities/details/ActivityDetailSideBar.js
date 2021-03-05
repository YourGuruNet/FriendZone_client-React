import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/no-user-image.gif';
const ActivityDetailSideBar = () => {
  return (
    <DetailSection>
      <h1 className='details_title'> 3 peoples are going</h1>
      <Container>
        <img src={image} alt='Avatar' />
        <p>Arvis Iļjins</p>
        <button className='details_button'>Fallow</button>
      </Container>
      <Container>
        <img src={image} alt='Avatar' />
        <p>Arvis Iļjins</p>
        <button className='details_button'>Fallow</button>
      </Container>
      <Container>
        <img src={image} alt='Avatar' />
        <p>Arvis Iļjins</p>
        <button className='details_button'>Fallow</button>
      </Container>
    </DetailSection>
  );
};

export default ActivityDetailSideBar;

const DetailSection = styled.div`
  margin-top: 4.5rem;
`;
const Container = styled.div`
  /* Chat containers */

  background-color: var(--baseColor-Light);
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  padding: 1rem;
  margin: 1rem 0;

  p {
    font-size: 1.5rem;
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
`;
