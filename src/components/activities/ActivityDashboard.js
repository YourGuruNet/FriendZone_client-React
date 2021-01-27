import React from 'react';
import ActivityList from './ActivityList';

const ActivityDashboard = ({ activities }) => {
  return (
    <div>
      <ActivityList activities={activities} />
    </div>
  );
};

export default ActivityDashboard;
