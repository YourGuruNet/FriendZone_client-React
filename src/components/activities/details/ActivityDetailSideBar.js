import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/no-user-image.gif';
const ActivityDetailSideBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default ActivityDetailSideBar;
const Container = styled.div`
  /* Chat containers */
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;

  p {
    padding: 1rem;
    padding-left: 2rem;
  }
  /* Darker chat container */
  .darker {
    border-color: #ccc;
    background-color: #ddd;
  }

  /* Clear floats */
  :after {
    content: '';
    clear: both;
    display: table;
  }

  /* Style images */
  img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
  }
`;
