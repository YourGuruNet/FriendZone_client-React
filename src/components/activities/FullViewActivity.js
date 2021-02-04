import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadActivityFromBackend } from './reducer/ActivitiesActions';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

const FullViewActivity = ({ loadActivityFromBackend, selectedActivity }) => {
  const { id } = useParams();
  useEffect(() => {
    loadActivityFromBackend(id);
  }, [id, loadActivityFromBackend]);

  return selectedActivity === null ? (
    <Loading />
  ) : (
    <div>
      <h1>{selectedActivity.id}</h1>
      <h1>{selectedActivity.id}</h1>
      <h1>{selectedActivity.id}</h1>
      <h1>{selectedActivity.id}</h1>
      <h1>{selectedActivity.title}</h1>
    </div>
  );
};

const mapStateToProps = ({ activitiesState: { selectedActivity } }) => {
  return { selectedActivity };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    loadActivityFromBackend: (id) => dispatch(loadActivityFromBackend(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FullViewActivity);
