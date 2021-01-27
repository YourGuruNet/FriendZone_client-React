import React from 'react';

const ActivityDashboard = ({ activities }) => {
  return (
    <div>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ActivityDashboard;
