import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import styled from 'styled-components';
import ActivityDetails from '../components/activities/ActivityDetails';
import ActivityList from '../components/activities/ActivityList';
import ActivityForm from '../components/activities/ActivityForm';

export const activitiesConst = {
  SET_LOADING: 'SET_LOADING',
  GET_ACTIVITIES: 'GET_ACTIVITIES',
  GET_ACTIVITY: 'GET_ACTIVITY',
};

export const setLoading = () => {
  return { type: activitiesConst.SET_LOADING };
};

export const getActivities = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    await axios.get('http://localhost:5000/api/activities').then((response) => {
      dispatch({
        type: activitiesConst.GET_ACTIVITIES,
        payload: response.data,
      });
    });
  };
};

export const getActivity = (a) => {
  console.log(a);
  return function (dispatch) {
    dispatch(setLoading());
    return dispatch({ type: activitiesConst.GET_ACTIVITY, payload: a });
  };
};

// Setup initial states
const defaultState = {
  loading: true,
  activities: [],
  selectedActivity: {},
};
// Reducer setup
export const ActivitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case activitiesConst.SET_LOADING:
      return { ...state, loading: true };
    case activitiesConst.GET_ACTIVITIES:
      return { ...state, loading: false, activities: action.payload };
    case activitiesConst.GET_ACTIVITY:
      return {
        ...state,
        loading: false,
        selectedActivity: action.payload,
      };
    default:
      return state;
  }
};

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
