import React, { Fragment } from 'react';
import styled from 'styled-components';

const ActivityList = ({ activities }) => {
  return (
    <ActivitySection>
      {activities.map((activity) => {
        return (
          <div className='activity_item' key={activity.id}>
            <h1 className='title'>{activity.title}</h1>
            <p className='date'>{activity.date}</p>
            <p>{activity.description}</p>
            <div className='location'>
              <p className='location-item'>{activity.city},</p>
              <p className='location-item'>{activity.venue}</p>
            </div>
            <div className='button_container'>
              <p className='hashtag'>#{activity.category}</p>
              <button className='details_button'>Details</button>
            </div>
          </div>
        );
      })}
    </ActivitySection>
  );
};

export default ActivityList;

const ActivitySection = styled.section`
  .activity_item {
    background-color: var(--baseColor-Light);
    display: block;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .location {
    display: flex;
    opacity: 0.8;
  }

  .location-item {
    letter-spacing: 0.1rem;
  }

  .location-item:last-child {
    padding-left: 0.5rem;
  }

  .date {
    letter-spacing: 0.1rem;
    opacity: 0.8;
  }

  .hashtag {
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

  .button_container {
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
`;
