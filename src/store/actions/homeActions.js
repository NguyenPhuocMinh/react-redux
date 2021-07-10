import { HOME_TYPES } from '../constants';
import { homeServices } from '../../services';

const getMostPopularVideos = () => async dispatch => {
  try {

    dispatch({
      type: HOME_TYPES.HOME_REQUEST
    })

    const { data } = await homeServices.getMostPopularVideos(dispatch);

    dispatch({
      type: HOME_TYPES.HOME_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken
      }
    })

  } catch (err) {
    dispatch({
      type: HOME_TYPES.HOME_FAILURE,
      payload: err.message
    })
  }
}

const homeActions = {
  getMostPopularVideos
};

export default homeActions;