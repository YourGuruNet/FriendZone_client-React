import React from 'react';
import ActivityDetails from './ActivityDetails';
import ActivityForm from './ActivityForm';
import { connect } from 'react-redux';

const ActivityDashboard = (props) => {
  return (
    <div>
      {!props.editMode && <ActivityDetails />}
      {props.editMode && (
        <ActivityForm
          key={(props.selectedActivity && props.selectedActivity.id) || 0}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({
  activitiesState: { editMode, selectedActivity },
}) => {
  return { editMode, selectedActivity };
};

export default connect(mapStateToProps)(ActivityDashboard);
