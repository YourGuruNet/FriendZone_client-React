import React from 'react';
import { Popup } from '../../../app/layout/styles';

const ActivityListItem = ({ activity, getActivity }) => {
  return (
    <Popup>
      <div className='activity_item'>
        <h1 className='title'>{activity.title}</h1>
        <p className='date'>
          <span>{activity.date.slice(0, 10)}</span>{' '}
          {activity.date.slice(11, 16)}
        </p>
        <p>{activity.description}</p>
        <div className='location'>
          <p className='location-item'>{activity.city},</p>
          <p className='location-item'>{activity.venue}</p>
        </div>
        <div className='button_container'>
          <p className='hashtag'>#{activity.category}</p>
          <button
            className='details_button'
            onClick={() => getActivity(activity)}>
            Details
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default ActivityListItem;
