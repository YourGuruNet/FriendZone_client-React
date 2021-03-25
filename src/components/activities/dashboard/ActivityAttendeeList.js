import React from 'react';
import noImage from '../../../assets/no-user-image.gif';
import styled from 'styled-components';
const ActivityAttendeeList = ({ attendees }) => {
  return (
    <AttendeesSection>
      <h1>Going:</h1>
      {attendees.map((item, id) => {
        return (
          <div class='attendee_container'>
            <img
              key={id}
              className='attendees_item-image'
              src={noImage}
              alt='profile'
            />
            <div class='attendees_overlay'>
              <div class='attendees_text'>{item.displayName}</div>
            </div>
          </div>
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
