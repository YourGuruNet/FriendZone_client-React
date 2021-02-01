import axios from 'axios';
import { url } from '../../../app/url/Url';

export const activitiesConst = {
  SET_LOADING: 'SET_LOADING',
  SET_EDIT_MODE: 'SET_EDIT_MODE',
  GET_ACTIVITIES: 'GET_ACTIVITIES',
  GET_ACTIVITY: 'GET_ACTIVITY',
  NEW_ACTIVITY: 'NEW_ACTIVITY',
  HANDLE_EDIT_ACTIVITY: 'HANDLE_EDIT_ACTIVITY',
  HANDLE_CREATE_ACTIVITY: 'HANDLE_CREATE_ACTIVITY',
  DELETE_ACTIVITY: 'DELETE_ACTIVITY',
};

export const setLoading = () => {
  return { type: activitiesConst.SET_LOADING };
};

export const setEditMode = (boole) => {
  return { type: activitiesConst.SET_EDIT_MODE, payload: boole };
};

export const newActivity = () => {
  return { type: activitiesConst.NEW_ACTIVITY };
};

export const getActivities = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    await axios.get(`${url}/api/activities`).then((response) => {
      let activities = [];
      response.data.forEach((activity) => {
        activity.date = activity.date.split('.')[0];
        activities.push(activity);
      });

      dispatch({
        type: activitiesConst.GET_ACTIVITIES,
        payload: activities,
      });
    });
  };
};

export const getActivity = (activity) => {
  return function (dispatch) {
    dispatch(setEditMode(false));
    dispatch(setLoading());
    dispatch({ type: activitiesConst.GET_ACTIVITY, payload: activity });
  };
};

export const handleDeleteActivity = (id) => {
  return function (dispatch) {
    dispatch(setLoading());
    dispatch({ type: activitiesConst.DELETE_ACTIVITY, payload: id });
  };
};

// Form

export const handleCreateActivity = (activity) => {
  return async function (dispatch) {
    dispatch(setLoading());
    dispatch({
      type: activitiesConst.HANDLE_CREATE_ACTIVITY,
      payload: activity,
    });
  };
};

export const handleEditActivity = (activity) => {
  return async function (dispatch) {
    dispatch(setLoading());
    dispatch({
      type: activitiesConst.HANDLE_EDIT_ACTIVITY,
      payload: activity,
    });
  };
};
