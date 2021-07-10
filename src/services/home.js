import request from './http';
import { ERROR_TYPES } from '../store/constants';

const getMostPopularVideos = async (dispatch) => {

  try {

    const response = await request.get('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'VN'
      }
    })

    return response;

  } catch (err) {
    dispatch({
      type: ERROR_TYPES.GET_VIDEO_MOST_POPULAR_ERROR,
      payload: err.message
    })
  }
}

const homeServices = {
  getMostPopularVideos
};

export default homeServices;