import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import styled from 'styled-components';
import ActivityDetails from '../components/activities/ActivityDetails';
import ActivityList from '../components/activities/ActivityList';
import ActivityForm from '../components/activities/ActivityForm';
import {
  getActivities,
  getActivity,
} from '../components/activities/reducer/ActivitiesActions';

const Activities = ({ getActivities, loading }) => {
  useEffect(() => {
    getActivities();
  }, [getActivities]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ActivitiesSection>
        <ActivityList />
        <div>
          <ActivityDetails />
          <ActivityForm />
        </div>
      </ActivitiesSection>
    );
  }
};

const mapStateToProps = ({ activitiesState: { activities, loading } }) => {
  return { loading, activities };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    getActivity: () => dispatch(getActivity()),
    getActivities: () => dispatch(getActivities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

const ActivitiesSection = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 2rem;
  max-width: 120rem;
  margin: 0 auto;
  padding: 9rem;

  @media screen and (max-width: 43.75em) {
    padding: 9rem 1rem;
  }
`;
