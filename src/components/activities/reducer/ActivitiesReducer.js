import { activitiesConst } from './ActivitiesActions';

// Setup initial states
const defaultState = {
  loading: true,
  activities: [],
  selectedActivity: null,
  editMode: false,
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
    case activitiesConst.SET_EDIT_MODE:
      return { ...state, editMode: action.payload };
    case activitiesConst.NEW_ACTIVITY:
      return { ...state, editMode: true, selectedActivity: null };
    case activitiesConst.HANDLE_CREATE_ACTIVITY:
      return {
        ...state,
        loading: false,
        activities: [...state.activities, action.payload],
      };
    case activitiesConst.HANDLE_EDIT_ACTIVITY:
      return {
        ...state,
        loading: false,
        activities: [
          ...state.activities.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case activitiesConst.DELETE_ACTIVITY:
      return {
        ...state,
        loading: false,
        activities: [
          ...state.activities.filter((item) => item.id !== action.payload),
        ],
        selectedActivity: null,
      };
    default:
      return state;
  }
};
