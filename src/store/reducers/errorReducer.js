import { ERROR_TYPES } from '../constants';

const initialState = {
  errorGetMostPopularVideo: null
}

const errorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ERROR_TYPES.GET_VIDEO_MOST_POPULAR_ERROR:
      return {
        ...state,
        errorGetMostPopularVideo: payload
      }
    default:
      return state;
  }
};

export default errorReducer;