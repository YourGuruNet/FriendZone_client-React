import React from 'react';
import { Popup } from '../../../app/layout/styles';
import noImage from '../../../assets/no-user-image.gif';
import { BiTimeFive } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import ActivityAttendeeList from './ActivityAttendeeList';
const ActivityListItem = ({ activity, getActivity, loginUser }) => {
  const date = activity.date.toString();
  return (
    <Popup>
      <div className='activity_item'>
        <img className='list_item-image' src={noImage} alt='profile'></img>
        <div className='text-container'>
          <h1 className='title'>{activity.title}</h1>
          <h1>(Hosted by {activity.houstUsername})</h1>
          <ActivityAttendeeList attendees={activity.attendees} />
          <p className='date'>
            <BiTimeFive /> <span> {date.slice(0, 10)}</span>{' '}
            {date.slice(11, 16)}
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
          {activity.houstUsername === loginUser.userName && (
            <h1 className='attendees_host'>Activity Host</h1>
          )}
          {activity.attendees.some((a) => a.username === loginUser.userName) &&
            activity.houstUsername !== loginUser.userName && (
              <h1 className='attendees_host green'>Going to event</h1>
            )}
        </div>
      </div>
    </Popup>
  );
};

export default ActivityListItem;
