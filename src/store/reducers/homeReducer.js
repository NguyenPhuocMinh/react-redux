import { HOME_TYPES } from '../constants';

const initialState = {
  videos: [],
  nextPageToken: null,
  loading: false
}

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_TYPES.HOME_REQUEST:
      return {
        ...state,
        loading: true
      }
    case HOME_TYPES.HOME_SUCCESS:
      return {
        ...state,
        videos: payload.videos,
        nextPageToken: payload.nextPageToken,
        loading: false
      }
    case HOME_TYPES.HOME_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
};

export default homeReducer;