import axios from 'axios';
import { url } from '../../../url/Url';

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
    await axios.get(`${url}/api/activities`).then((response) => {
      dispatch({
        type: activitiesConst.GET_ACTIVITIES,
        payload: response.data,
      });
    });
  };
};

export const getActivity = (activity) => {
  return function (dispatch) {
    dispatch(setLoading());
    dispatch({ type: activitiesConst.GET_ACTIVITY, payload: activity });
  };
};
