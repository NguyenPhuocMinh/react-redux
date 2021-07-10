import request from './http';
import { ERROR_TYPES } from '../store/constants';

const getChannelById = async (dispatch, channelId) => {

  try {

    const response = await request.get('/channels', {
      params: {
        part: 'snippet',
        id: channelId
      }
    })

    return response;

  } catch (err) {
    dispatch({
      type: ERROR_TYPES.GET_CHANNEL_BY_ID_ERROR,
      payload: err.message
    })
  }
}

const channelServices = {
  getChannelById
};

export default channelServices;