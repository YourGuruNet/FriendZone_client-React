import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// Setup initial states
const defaultState = {
  loading: true,
  activities: [],
};

export const SET_LOADING = 'SET_LOADING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES ';

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

// Reducer setup
export const ActivitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_ACTIVITIES:
      return { ...state, loading: false, activities: action.payload };
    default:
      return state;
  }
};

const App = ({ getActivities, loading, activities }) => {
  // console.log(activities);
  useEffect(() => {
    getActivities();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <ul>
          {activities.map((activity) => {
            return <li key={activity.id}>{activity.title}</li>;
          })}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = ({ activitiesState: { activities, loading } }) => {
  return { loading, activities };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => dispatch(getActivities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
