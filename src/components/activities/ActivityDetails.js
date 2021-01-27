import React from 'react';
import styled from 'styled-components';
import image from '../../assets/testimage1.jpg';
const ActivityDetails = () => {
  return (
    <Section>
      <img src={image} alt='activity' className='details_image' />
      <h1 className='details_title'>Trim around Paris</h1>
      <p className='details_text'>
        2021 marks our 18th consecutive year partnering with the race organizers
        to deliver great race experiences and unparalleled access. Although La
        Vuelta a España 2020 will be an outstanding sporting event, we have had
        to cancel our Vuelta trips for this year due to uncertainty related to.
      </p>
      <div className='button_container'>
        <p className='details_date '>21.12.2020</p>
        <button className='details_button'>Edit</button>
        <button className='details_button'>Cancel</button>
      </div>
    </Section>
  );
};

export default ActivityDetails;

const Section = styled.section`
  background-color: var(--baseColor-Light);
  width: 100%;
  display: block;
  height: 40rem;
  margin: 1rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  overflow: hidden;
  position: relative;

  .details_image {
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
  }
  .details_title {
    position: absolute;
    z-index: 99;
    top: 0;
    font-size: 2rem;
    padding: 1rem 1.5rem;
    background-color: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }

  .button_container {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .details_button {
    padding: 0.2rem 0.5rem;
    margin-left: 1rem;
    background-color: var(--baseColor-Dark-2);
    border: solid 0.1rem var(--baseColor-Dark-2);
    text-transform: uppercase;
    color: var(--baseColor);
    font-size: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
      background-color: var(--baseColor);
      color: var(--baseColor-Dark-2);
    }
  }
  .details_text {
    padding: 1rem;
    font-size: 1.2rem;
  }

  .details_date {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0.2rem 0.5rem;
    border: solid 0.1rem transparent;
    transition: all 0.3s;
    :hover {
      border: solid 0.1rem var(--baseColor-Dark-2);
    }
  }
`;
