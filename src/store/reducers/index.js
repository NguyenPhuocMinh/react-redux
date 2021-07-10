import { combineReducers } from 'redux';

import authReducer from './authReducer';
import homeReducer from './homeReducer';
import channelReducer from './channelReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  channelData: channelReducer,
  error: errorReducer
});

export default rootReducer;