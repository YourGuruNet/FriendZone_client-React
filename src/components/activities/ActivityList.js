import React, { Fragment } from 'react';

const ActivityList = ({ activities }) => {
  return (
    <Fragment>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h1>{activity.title}</h1>
            <p>{activity.date}</p>
            <p>{activity.description}</p>
            <div>
              <p>{activity.city}</p>
              <p>{activity.venue}</p>
            </div>
            <p>{activity.category}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ActivityList;
