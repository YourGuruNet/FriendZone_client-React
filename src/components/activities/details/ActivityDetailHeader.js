import React from 'react';
import { Link } from 'react-router-dom';
const ActivityDetailHeader = ({ selectedActivity }) => {
  return (
    <div>
      <div className='button_container'>
        <Link to='/activities' className='details_button'>
          Go back
        </Link>
        <div className='location'>
          <p className='details_date'>
            <span>{selectedActivity.date.slice(0, 10)}</span>{' '}
            {selectedActivity.date.slice(11, 20)}
          </p>
          <p className='location-item'>{selectedActivity.city},</p>
          <p className='location-item'>{selectedActivity.venue}</p>
        </div>
      </div>
      <h1 className='details_title'>{selectedActivity.title}</h1>
      <img
        src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
        alt='activity-2'
        className='details_image'
      />
      <p className='details_text'>{selectedActivity.description}</p>
      <div className='bottom_container'></div>
    </div>
  );
};

export default ActivityDetailHeader;
