import { AUTH_TYPES } from '../constants';

const initialState = {
  accessToken: sessionStorage.getItem('accessToken')
    ? sessionStorage.getItem('accessToken')
    : null,
  user: sessionStorage.getItem('profile')
    ? JSON.parse(sessionStorage.getItem('profile'))
    : null,
  loading: false
};

const loginGoogleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case AUTH_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload,
        loading: false
      };
    case AUTH_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        accessToken: null,
        error: payload,
        loading: false
      };
    case AUTH_TYPES.LOAD_PROFILE:
      return {
        ...state,
        user: payload,
      }
    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        accessToken: null,
        user: null
      };
    default:
      return state
  }
};

export default loginGoogleReducer;