import React from 'react';
import noImage from '../../../assets/no-user-image.gif';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ActivityAttendeeList = ({ attendees }) => {
  return (
    <AttendeesSection>
      <h1>Going:</h1>
      {attendees.map((item, id) => {
        return (
          <Link to={`/profile/${attendees.userName}`} key={id}>
            <div className='attendee_container'>
              <img
                className='attendees_item-image'
                src={item.image || noImage}
                alt='profile'
              />
              <div className='attendees_overlay'>
                <div className='attendees_text'>{item.displayName}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </AttendeesSection>
  );
};

export default ActivityAttendeeList;

const AttendeesSection = styled.section`
  display: flex;

  .attendees_item-image {
    width: 2rem;
    height: 2rem;
    padding: 0.3rem;
    cursor: pointer;

    :hover {
      transform: scale(10);
    }
  }

  .attendees_overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    cursor: pointer;
  }

  .attendee_container {
    position: relative;
  }
  .attendee_container:hover .attendees_overlay {
    opacity: 1;
  }

  .attendees_text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: black;
    padding: 0.5rem;
  }
`;
