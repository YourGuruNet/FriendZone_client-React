import React from 'react';
import { Popup } from '../../../app/layout/styles';
import noImage from '../../../assets/no-user-image.gif';
import { BiTimeFive } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
const ActivityListItem = ({ activity, getActivity }) => {
  return (
    <Popup>
      <div className='activity_item'>
        <img className='list_item-image' src={noImage} alt='profile'></img>
        <div className='text-container'>
          <h1 className='title'>{activity.title}</h1>
          <h1>(Hosted by Arvis Iļjins)</h1>
          <p className='date'>
            <BiTimeFive /> <span> {activity.date.slice(0, 10)}</span>{' '}
            {activity.date.slice(11, 16)}
          </p>
          <div className='location'>
            <GoLocation /> <p className='location-item'> {activity.city},</p>
            <p className='location-item'>{activity.venue}</p>
          </div>
          <p>{activity.description}</p>

          <div className='button_container'>
            <p className='hashtag'>#{activity.category}</p>
            <button
              className='details_button'
              onClick={() => getActivity(activity)}>
              Details
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ActivityListItem;
