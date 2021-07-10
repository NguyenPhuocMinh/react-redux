import { CHANNEL_TYPES } from '../constants';
import { channelServices } from '../../services';

const getChannelById = (channelId, ) => async dispatch => {
  try {

    dispatch({
      type: CHANNEL_TYPES.CHANNEL_BY_ID_REQUEST
    })

    const { data } = await channelServices.getChannelById(dispatch, channelId);

    dispatch({
      type: CHANNEL_TYPES.CHANNEL_BY_ID_SUCCESS,
      payload: {
        channel: data.items[0],
      }
    })

  } catch (err) {
    dispatch({
      type: CHANNEL_TYPES.CHANNEL_BY_ID_FAILURE,
      payload: err.message
    })
  }
}

const channelActions = {
  getChannelById
};

export default channelActions;