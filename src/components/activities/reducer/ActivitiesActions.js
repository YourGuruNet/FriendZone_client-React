import { history } from '../../..';
import { Account, ActivitiesApiCall } from '../../../app/api/api';
import { Activity } from '../../constructors/constructors';

export const activitiesConst = {
  SET_LOADING: 'SET_LOADING',
  SET_UPDATE_LOADING: 'SET_UPDATE_LOADING',
  SET_EDIT_MODE: 'SET_EDIT_MODE',
  GET_ACTIVITIES: 'GET_ACTIVITIES',
  GET_ACTIVITY: 'GET_ACTIVITY',
  NEW_ACTIVITY: 'NEW_ACTIVITY',
  HANDLE_EDIT_ACTIVITY: 'HANDLE_EDIT_ACTIVITY',
  HANDLE_CREATE_ACTIVITY: 'HANDLE_CREATE_ACTIVITY',
  DELETE_ACTIVITY: 'DELETE_ACTIVITY',
  GET_ERROR_MESSAGE: 'GET_ERROR_MESSAGE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_APP_LOADING: 'SET_APP_LOADING',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_GOING: 'TOGGLE_GOING',
};

export const setLoading = () => {
  return { type: activitiesConst.SET_LOADING };
};
export const setUpdateLoading = () => {
  return { type: activitiesConst.SET_UPDATE_LOADING };
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
    await ActivitiesApiCall.list().then((response) => {
      let activities = [];
      response.forEach((activity) => {
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
  return async function (dispatch) {
    dispatch(setUpdateLoading());
    await ActivitiesApiCall.delete(id).then(() => {
      dispatch({ type: activitiesConst.DELETE_ACTIVITY, payload: id });
    });
  };
};

// Form
export const handleEditActivity = (selectedActivity, activity) => {
  let updatedActivity = { ...selectedActivity, ...activity };
  return async function (dispatch) {
    dispatch(setUpdateLoading());
    await ActivitiesApiCall.update(activity).then(() => {
      dispatch({
        type: activitiesConst.HANDLE_EDIT_ACTIVITY,
        payload: updatedActivity,
      });
    });
  };
};

export const handleCreateActivity = (activity, loginUser) => {
  const attendee = {
    username: loginUser.userName,
    displayName: loginUser.userName,
    bio: '',
    image: '',
  };
  const newActivity = new Activity(activity, loginUser);
  newActivity.attendees = [attendee];

  return async function (dispatch) {
    dispatch(setUpdateLoading());
    await ActivitiesApiCall.create(newActivity).then(() => {
      dispatch({
        type: activitiesConst.HANDLE_CREATE_ACTIVITY,
        payload: newActivity,
      });
    });
  };
};

// Getting activity from the database when reloading page or full view button press
export const loadActivityFromBackend = (id) => {
  return async function (dispatch) {
    let activity = await ActivitiesApiCall.details(id);
    dispatch({ type: activitiesConst.GET_ACTIVITY, payload: activity });
  };
};

// Login and Registration actions

export const login = (user) => {
  return async function (dispatch) {
    setToken(null);
    await Account.login(user).then((response) => {
      setToken(response.token);
      dispatch({ type: activitiesConst.LOGIN, payload: response });
      history.push('/activities');
      dispatch(closeModal());
    });
  };
};

export const setToken = (token) => {
  if (token) window.localStorage.setItem('login', token);
};

export const logout = () => {
  return async function (dispatch) {
    setToken(null);
    window.localStorage.removeItem('login');
    dispatch({ type: activitiesConst.LOGOUT });
    history.push('/');
  };
};

export const getUser = () => {
  return async function (dispatch) {
    await Account.current().then((response) => {
      dispatch({ type: activitiesConst.LOGIN, payload: response });
    });
  };
};

export const setAppLoaded = () => {
  return { type: activitiesConst.SET_APP_LOADING };
};

export const registration = (user) => {
  return async function (dispatch) {
    setToken(null);
    await Account.register(user).then((response) => {
      setToken(response.token);
      dispatch({ type: activitiesConst.LOGIN, payload: response });
      history.push('/activities');
      dispatch(closeModal());
    });
  };
};

// Modals
export const openModal = (content) => {
  return async function (dispatch) {
    dispatch({
      type: activitiesConst.OPEN_MODAL,
      payload: content,
    });
  };
};

export const closeModal = () => {
  return { type: activitiesConst.CLOSE_MODAL };
};

export const updateAttendance = (id, userName) => {
  return async function (dispatch) {
    await ActivitiesApiCall.attend(id).then(() => {
      dispatch({
        type: activitiesConst.TOGGLE_GOING,
        id: id,
        payload: {
          username: userName,
          displayName: userName,
          bio: '',
          image: '',
        },
      });
      dispatch(getActivities());
    });
  };
};
