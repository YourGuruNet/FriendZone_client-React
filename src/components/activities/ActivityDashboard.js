import React from 'react';
import ActivityDetails from './ActivityDetails';
import ActivityForm from './ActivityForm';
import { connect } from 'react-redux';

const ActivityDashboard = (props) => {
  return (
    <div>
      {!props.editMode && <ActivityDetails />}
      {props.editMode && <ActivityForm />}
    </div>
  );
};

const mapStateToProps = ({ activitiesState: { editMode } }) => {
  return { editMode };
};

export default connect(mapStateToProps)(ActivityDashboard);
