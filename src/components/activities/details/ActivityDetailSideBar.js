import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/no-user-image.gif';
import { Link } from 'react-router-dom';
const ActivityDetailSideBar = ({ attendees }) => {
  return (
    <DetailSection>
      <h1 className='details_title'> {attendees.length} peoples are going</h1>
      {attendees.map((item, id) => {
        return (
          <Container key={id}>
            <Link to={`/profile/${attendees.userName}`}>
              <img src={item.image || image} alt='Avatar' />
            </Link>
            <Link
              className='attendees_link'
              to={`/profile/${attendees.userName}`}>
              {item.displayName}
            </Link>
            <button className='details_button'>Fallow</button>
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
  /* Chat containers */

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
