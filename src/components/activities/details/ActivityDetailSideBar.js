import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/no-user-image.gif';
import { Link } from 'react-router-dom';
const ActivityDetailSideBar = ({ selectedActivity }) => {
  console.log(selectedActivity.houstUsername);
  return (
    <DetailSection>
      <h1 className='details_title'>
        {selectedActivity.attendees.length} peoples are going
      </h1>
      {selectedActivity.attendees.map((item, id) => {
        return (
          <Container key={id}>
            <Link to={`/profile/${item.userName}`}>
              <img src={item.image || image} alt='Avatar' />
            </Link>
            <Link className='attendees_link' to={`/profile/${item.username}`}>
              {item.displayName}
            </Link>
            <button className='details_button'>Fallow</button>
            {selectedActivity.houstUsername === item.username && (
              <h1 className='attendees_host'>Activity Houst</h1>
            )}
          </Container>
        );
      })}
    </DetailSection>
  );
};

export default ActivityDetailSideBar;

const DetailSection = styled.div`
  margin-top: 4.5rem;
`;
const Container = styled.div`
  position: relative;
  .attendees_host {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.5rem;
    background-color: red;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
  }

  background-color: var(--baseColor-Light);
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  padding: 1rem;
  margin: 1rem 0;
  height: 8rem;

  .attendees_link {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    transition: all 0.2s;
    :hover {
      transform: scale(1.2);
    }
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
