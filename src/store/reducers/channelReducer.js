import { CHANNEL_TYPES } from '../constants';

const initialState = {
  channels: [],
  channel: {},
  loading: false
}

const channelReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANNEL_TYPES.CHANNEL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CHANNEL_TYPES.CHANNEL_SUCCESS:
      return {
        ...state,
        channels: payload.channels,
        loading: false
      }
    case CHANNEL_TYPES.CHANNEL_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case CHANNEL_TYPES.CHANNEL_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CHANNEL_TYPES.CHANNEL_BY_ID_SUCCESS:
      return {
        ...state,
        channel: payload.channel,
        loading: true
      }
    case CHANNEL_TYPES.CHANNEL_BY_ID_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
};

export default channelReducer;