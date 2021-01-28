import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import styled from 'styled-components';
import ActivityDashboard from '../components/activities/ActivityDashboard';
// Setup initial states
const defaultState = {
  loading: true,
  activities: [],
  selectedActivity: [],
};
console.log(defaultState.selectedActivity);

export const SET_LOADING = 'SET_LOADING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const setLoading = () => {
  return { type: SET_LOADING };
};

export const getActivities = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    await axios.get('http://localhost:5000/api/activities').then((response) => {
      dispatch({ type: GET_ACTIVITIES, payload: response.data });
    });
  };
};

export const getActivity = (activity) => {
  console.log(activity);
  return {
    type: GET_ACTIVITY,
    payload: { selectedActivity: activity },
  };
};

// Reducer setup
export const ActivitiesReducer = (state = defaultState, action, id) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_ACTIVITIES:
      return { ...state, loading: false, activities: action.payload };
    case GET_ACTIVITY:
      return {
        ...state,
        selectedActivity: action.payload,
      };
    default:
      return state;
  }
};

const Activities = ({
  getActivities,
  loading,
  activities,
  selectedActivity,
}) => {
  console.log(selectedActivity);
  useEffect(() => {
    getActivities();
  }, [getActivities]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ActivitiesSection>
        <ActivityDashboard activities={activities} />
      </ActivitiesSection>
    );
  }
};

const mapStateToProps = ({
  activitiesState: { activities, loading, selectedActivity },
}) => {
  return { loading, activities, selectedActivity };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => dispatch(getActivities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

const ActivitiesSection = styled.section`
  display: block;
  max-width: 120rem;
  margin: 0 auto;
  padding: 9rem;

  @media screen and (max-width: 43.75em) {
    padding: 9rem 1rem;
  }
`;
