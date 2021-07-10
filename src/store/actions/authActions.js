import { AUTH_TYPES } from '../constants';
import firebase from 'firebase/app';
import auth from '../../firebase';
import { isEmpty, get } from 'lodash';

const login = () => async dispatch => {
  try {
    dispatch({
      type: AUTH_TYPES.LOGIN_REQUEST,
    })

    const authProvider = new firebase.auth.GoogleAuthProvider();
    authProvider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

    const response = await auth.signInWithPopup(authProvider);
    const accessToken = !isEmpty(response) ? get(response, 'credential.accessToken') : null;
    const userProfile = {
      name: !isEmpty(response) ? get(response, 'additionalUserInfo.profile.name') : '',
      pictureURL: !isEmpty(response) ? get(response, 'additionalUserInfo.profile.picture') : ''
    }

    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('profile', JSON.stringify(userProfile));

    dispatch({
      type: AUTH_TYPES.LOGIN_SUCCESS,
      payload: accessToken
    });

    dispatch({
      type: AUTH_TYPES.LOAD_PROFILE,
      payload: userProfile
    });
  } catch (err) {
    dispatch({
      type: AUTH_TYPES.LOGIN_FAILURE,
      payload: err.message
    })
  }
};

const logout = () => async dispatch => {

  await auth.signOut();

  dispatch({
    type: AUTH_TYPES.LOGOUT
  });

  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('profile');
}

const authActions = {
  login,
  logout
};

export default authActions;