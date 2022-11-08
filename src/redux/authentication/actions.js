
<<<<<<< Updated upstream
import Axios from 'axios';
import Router from 'next/router';
import API from '../../utils/endpoints';
import * as types from './actionType';
import { toast } from 'react-toastify';

import Cookies from 'js-cookie';
import { setAuthenticationCookie } from '../../utils/authentication';

const errorMessage = {
  status: 400,
  message: 'Something went wrong',
};

function loggingUser() {
  return {
    type: types.LOGIN_USER,
  };
}

function loggingUserSuccess(payload) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload,
  };
}

function loggingUserFailed(payload) {
  return {
    type: types.LOGIN_USER_FAILED,
    payload,
  };
}

function fetchingUserPermissions() {
  return {
    type: types.FETCH_USER_PERMISSIONS,
  };
}

function fetchingUserPermissionsSuccess(payload, user) {
  return {
    type: types.FETCH_USER_PERMISSIONS_SUCCESS,
    payload,
    user,
  };
}

function fetchingUserPermissionsFailed(payload) {
  return {
    type: types.FETCH_USER_PERMISSIONS_FAILED,
    payload,
  };
}

function fetchingCurrentUserProfile() {
  return {
    type: types.FETCH_CURRENT_USER_PROFILE,
  };
}

function fetchingCurrentUserProfileSuccess(payload) {
  return {
    type: types.FETCH_CURRENT_USER_PROFILE_SUCCESS,
    payload,
  };
}

function fetchingCurrentUserProfileFailed(payload) {
  return {
    type: types.FETCH_CURRENT_USER_PROFILE_FAILED,
    payload,
  };
}

export function authenticateUser(payload) {
  return {
    type: types.AUTHENTICATE_USER,
    payload,
  };
=======
import Axios from 'axios'
import Router from 'next/router'
import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'

import Cookies from 'js-cookie'
import { setAuthenticationCookie } from '../../utils/authentication'

const errorMessage = {
  status: 400,
  message: 'Something went wrong'
}

function loggingUser () {
  return {
    type: types.LOGIN_USER
  }
}

function loggingUserSuccess (payload) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload
  }
}

function loggingUserFailed (payload) {
  return {
    type: types.LOGIN_USER_FAILED,
    payload
  }
}

function fetchingUserPermissions () {
  return {
    type: types.FETCH_USER_PERMISSIONS
  }
}

function fetchingUserPermissionsSuccess (payload, user) {
  return {
    type: types.FETCH_USER_PERMISSIONS_SUCCESS,
    payload,
    user
  }
}

function fetchingUserPermissionsFailed (payload) {
  return {
    type: types.FETCH_USER_PERMISSIONS_FAILED,
    payload
  }
}

function fetchingCurrentUserProfile () {
  return {
    type: types.FETCH_CURRENT_USER_PROFILE
  }
}

function fetchingCurrentUserProfileSuccess (payload) {
  return {
    type: types.FETCH_CURRENT_USER_PROFILE_SUCCESS,
    payload
  }
}

function fetchingCurrentUserProfileFailed (payload) {
  return {
    type: types.FETCH_CURRENT_USER_PROFILE_FAILED,
    payload
  }
}

export function authenticateUser (payload) {
  return {
    type: types.AUTHENTICATE_USER,
    payload
  }
>>>>>>> Stashed changes
}

//* ***** Verify Token   ********//

<<<<<<< Updated upstream
export function validatingToken() {
  return {
    type: types.VERIFY_TOKEN,
    payload: Cookies.get('guid'),
  };
}

export function validatingTokenSuccess(payload) {
  return {
    type: types.VERIFY_TOKEN_SUCCESS,
    payload: payload,
  };
}

export function validatingTokenFailed(payload) {
  return {
    type: types.VERIFY_TOKEN_FAILED,
  };
=======
export function validatingToken () {
  return {
    type: types.VERIFY_TOKEN,
    payload: Cookies.get('guid')
  }
}

export function validatingTokenSuccess (payload) {
  return {
    type: types.VERIFY_TOKEN_SUCCESS,
    payload: payload
  }
}

export function validatingTokenFailed (payload) {
  return {
    type: types.VERIFY_TOKEN_FAILED
  }
>>>>>>> Stashed changes
}

//* ***** Generate Token   ********//

<<<<<<< Updated upstream
export function generatingToken() {
  return { type: types.GENERATE_TOKEN };
}

export function generatingTokenSuccess(payload) {
  return {
    type: types.GENERATE_TOKEN_SUCCESS,
    payload: payload,
  };
}

export function generatingTokenFailed(payload) {
  return {
    type: types.GENERATE_TOKEN_FAILED,
  };
}


function loggingoutUser() {
  return {
    type: types.LOGOUT_USER,
  };
=======
export function generatingToken () {
  return { type: types.GENERATE_TOKEN }
}

export function generatingTokenSuccess (payload) {
  return {
    type: types.GENERATE_TOKEN_SUCCESS,
    payload: payload
  }
}

export function generatingTokenFailed (payload) {
  return {
    type: types.GENERATE_TOKEN_FAILED
  }
}

function loggingoutUser () {
  return {
    type: types.LOGOUT_USER
  }
>>>>>>> Stashed changes
}

//* ***** Reset Password   ********//

<<<<<<< Updated upstream
export function resetPassword() {
  return { type: types.RESET_PASSWORD };
}

export function resetPasswordSuccess() {
=======
export function resetPassword () {
  return { type: types.RESET_PASSWORD }
}

export function resetPasswordSuccess () {
>>>>>>> Stashed changes
  toast('Password Successfully Changed', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
<<<<<<< Updated upstream
    draggable: true,
  });
  return { type: types.RESET_PASSWORD_SUCCESS };
}

export function resetPasswordFailed() {
=======
    draggable: true
  })
  return { type: types.RESET_PASSWORD_SUCCESS }
}

export function resetPasswordFailed () {
>>>>>>> Stashed changes
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
<<<<<<< Updated upstream
    draggable: true,
  });
  return { type: types.RESET_PASSWORD_FAILED };
}

export function handlePageLoading(payload) {
  return {
    type: types.HANDLE_PAGE_LOADING,
    payload,
  };
=======
    draggable: true
  })
  return { type: types.RESET_PASSWORD_FAILED }
}

export function handlePageLoading (payload) {
  return {
    type: types.HANDLE_PAGE_LOADING,
    payload
  }
>>>>>>> Stashed changes
}

//* ***** Forgot Password   ********//

<<<<<<< Updated upstream
export function forgotpassword() {
  return { type: types.FORGOT_PASSWORD };
}

export function forgotPasswordSuccess(payload) {
  history.push('/OTP-verification');
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload,
  };
}

export function forgotPasswordFailed() {
=======
export function forgotpassword () {
  return { type: types.FORGOT_PASSWORD }
}

export function forgotPasswordSuccess (payload) {
  history.push('/OTP-verification')
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload
  }
}

export function forgotPasswordFailed () {
>>>>>>> Stashed changes
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
<<<<<<< Updated upstream
    draggable: true,
  });
  return { type: types.FORGOT_PASSWORD_FAILED };
=======
    draggable: true
  })
  return { type: types.FORGOT_PASSWORD_FAILED }
>>>>>>> Stashed changes
}

//* ***** OTP VARIFICATION   ********//

<<<<<<< Updated upstream
export function otpverification() {
  return { type: types.OTP_VARIFICATION };
}

export function otpverificationSuccess() {
  history.push('/set-new-password');
  window.location.reload();
  return { type: types.OTP_VARIFICATION_SUCCESS };
}

export function otpverificationFailed() {
=======
export function otpverification () {
  return { type: types.OTP_VARIFICATION }
}

export function otpverificationSuccess () {
  history.push('/set-new-password')
  window.location.reload()
  return { type: types.OTP_VARIFICATION_SUCCESS }
}

export function otpverificationFailed () {
>>>>>>> Stashed changes
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
<<<<<<< Updated upstream
    draggable: true,
  });
  return { type: types.OTP_VARIFICATION_FAILED };
=======
    draggable: true
  })
  return { type: types.OTP_VARIFICATION_FAILED }
>>>>>>> Stashed changes
}

//* ***** SET NEW PASSWORD   ********//

<<<<<<< Updated upstream
export function setnewPassword() {
  return { type: types.SET_NEW_PASSWORD };
}

export function setnewPasswordSuccess() {
  history.push('/login');
=======
export function setnewPassword () {
  return { type: types.SET_NEW_PASSWORD }
}

export function setnewPasswordSuccess () {
  history.push('/login')
>>>>>>> Stashed changes
  toast('Password Successfully Changed', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
<<<<<<< Updated upstream
    draggable: true,
  });
  return { type: types.SET_NEW_PASSWORD_SUCCESS };
}

export function setnewPasswordFailed() {
=======
    draggable: true
  })
  return { type: types.SET_NEW_PASSWORD_SUCCESS }
}

export function setnewPasswordFailed () {
>>>>>>> Stashed changes
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
<<<<<<< Updated upstream
    draggable: true,
  });
  return { type: types.SET_NEW_PASSWORD_FAILED };
=======
    draggable: true
  })
  return { type: types.SET_NEW_PASSWORD_FAILED }
>>>>>>> Stashed changes
}

//* ***** LOGIN  ********//

export const loginUser = (payload) => async (dispatch, getState, api) => {
<<<<<<< Updated upstream
  dispatch(loggingUser());
  try {
    const headers = { authorization: '', Cache: 'no-cache' };
    // let response = await api.post(API.login, payload);
    const response = await Axios.post(`${API.authbaseUrl}${API.login}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(loggingUserSuccess(response.data));

      setAuthenticationCookie(response.data.data);
    } else {
      dispatch(loggingUserFailed(response.data));

      const toastMessage = 'Please check your credentials and Try Again!';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  } catch (error) {
    console.log('API FAILED');
    dispatch(loggingUserFailed(errorMessage));
  }
};

export const fetchUserPermissions = () => async (dispatch, getState, api) => {
  dispatch(fetchingUserPermissions());
  try {
    const response = await api.get(API.getUserPermissions);
    if (response.data.code === 200) {
      dispatch(fetchingUserPermissionsSuccess(response.data.data.pageGroups, response.data.data));
    } else {
      dispatch(fetchingUserPermissionsFailed(response.data));
    }
  } catch (error) {
    dispatch(fetchingUserPermissionsFailed(errorMessage));
  }
};

export const fetchCurrentUserProfile = () => async (dispatch, getState, api) => {
  dispatch(fetchingCurrentUserProfile());
  try {
    const response = await api.get(API.getUserProfile);
    if (response.data.code === 200) {
      dispatch(fetchingCurrentUserProfileSuccess(response.data.data));
    } else {
      dispatch(fetchingCurrentUserProfileFailed(response.data));
    }
  } catch (error) {
    dispatch(fetchingCurrentUserProfileFailed(errorMessage));
  }
};

export const validateToken = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.get(`${API.authbaseUrl}${API.verifyToken}`, {
      headers: headers,
    });
    if (response.data.code === 200) {
      return response.data.data;
    } else {
      if (response.data.code === 401) {
        dispatch(generateToken());
      }
      dispatch(validatingTokenFailed(response.data.data));

      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  } catch (error) {
    dispatch(validatingTokenFailed());
    dispatch(generateToken());
    const toastMessage = 'cound not Process YOur Request ';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
  }
};
=======
  dispatch(loggingUser())
  try {
    const headers = { authorization: '', Cache: 'no-cache' }
    // let response = await api.post(API.login, payload);
    const response = await Axios.post(`${API.authbaseUrl}${API.login}`, payload, {
      headers: headers
    })

    if (response.data.code === 200) {
      dispatch(loggingUserSuccess(response.data))

      setAuthenticationCookie(response.data.data)
    } else {
      dispatch(loggingUserFailed(response.data))

      const toastMessage = 'Please check your credentials and Try Again!'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    console.log('API FAILED')
    dispatch(loggingUserFailed(errorMessage))
  }
}

export const fetchUserPermissions = () => async (dispatch, getState, api) => {
  dispatch(fetchingUserPermissions())
  try {
    const response = await api.get(API.getUserPermissions)
    if (response.data.code === 200) {
      dispatch(fetchingUserPermissionsSuccess(response.data.data.pageGroups, response.data.data))
    } else {
      dispatch(fetchingUserPermissionsFailed(response.data))
    }
  } catch (error) {
    dispatch(fetchingUserPermissionsFailed(errorMessage))
  }
}

export const fetchCurrentUserProfile = () => async (dispatch, getState, api) => {
  dispatch(fetchingCurrentUserProfile())
  try {
    const response = await api.get(API.getUserProfile)
    if (response.data.code === 200) {
      dispatch(fetchingCurrentUserProfileSuccess(response.data.data))
    } else {
      dispatch(fetchingCurrentUserProfileFailed(response.data))
    }
  } catch (error) {
    dispatch(fetchingCurrentUserProfileFailed(errorMessage))
  }
}

export const validateToken = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    const response = await Axios.get(`${API.authbaseUrl}${API.verifyToken}`, {
      headers: headers
    })
    if (response.data.code === 200) {
      return response.data.data
    } else {
      if (response.data.code === 401) {
        dispatch(generateToken())
      }
      dispatch(validatingTokenFailed(response.data.data))

      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    dispatch(validatingTokenFailed())
    dispatch(generateToken())
    const toastMessage = 'cound not Process YOur Request '
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
>>>>>>> Stashed changes

//* ***** Generate Token  ********//

export const generateToken = () => async (dispatch, getState, api) => {
  try {
<<<<<<< Updated upstream
    const cookie = await Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken] = decodedString.split('#');

    const response = await api.post(API.generateNewToken, {
      refreshToken: existingRefreshToken,
      userId: guid,
    });

    if (response.data.code === 200) {
      const {
        data: { data: jwtAccessToken },
      } = response;
      await Cookies.remove('SOMANI');
=======
    const cookie = await Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken] = decodedString.split('#')

    const response = await api.post(API.generateNewToken, {
      refreshToken: existingRefreshToken,
      userId: guid
    })

    if (response.data.code === 200) {
      const {
        data: { data: jwtAccessToken }
      } = response
      await Cookies.remove('SOMANI')
>>>>>>> Stashed changes

      await setAuthenticationCookie({
        jwtAccessToken,
        refreshToken,
<<<<<<< Updated upstream
        user: { userId },
      });
      dispatch(generatingTokenSuccess(response.data.data));
    }
    dispatch(logoutUser());
    dispatch(generatingTokenFailed(response.data));
  } catch (error) {
    dispatch(generatingTokenFailed(error));
    dispatch(logoutUser());
  }
};
=======
        user: { userId }
      })
      dispatch(generatingTokenSuccess(response.data.data))
    }
    dispatch(logoutUser())
    dispatch(generatingTokenFailed(response.data))
  } catch (error) {
    dispatch(generatingTokenFailed(error))
    dispatch(logoutUser())
  }
}
>>>>>>> Stashed changes

//* ***** Logout User   ********//

export const logoutUser = () => async (dispatch, getState, api) => {
<<<<<<< Updated upstream
 
  const cookie = Cookies.get('SOMANI');

  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  try {
    Axios.get(`${API.authbaseUrl}${API.logout}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    }).then((response) => console.log(response, 'logout Response'));
    Cookies.remove('SOMANI');

    dispatch(loggingoutUser());
    setTimeout(() => {
      Router.push('/');
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.log(error, 'LOGOUT API FAILED');
  }
};

//* ***** Reset Password   ********//

export function resetpassword(state) {
=======
  const cookie = Cookies.get('SOMANI')

  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  try {
    Axios.get(`${API.authbaseUrl}${API.logout}`, {
      headers: {
        authorization: jwtAccessToken
      }
    }).then((response) => console.log(response, 'logout Response'))
    Cookies.remove('SOMANI')

    dispatch(loggingoutUser())
    setTimeout(() => {
      Router.push('/')
      window.location.reload()
    }, 1000)
  } catch (error) {
    console.log(error, 'LOGOUT API FAILED')
  }
}

//* ***** Reset Password   ********//

export function resetpassword (state) {
>>>>>>> Stashed changes
  return async (dispatch, getState, api) => {
    const payload = {
      prevPassword: state.recent_password,
      password: state.new_password,
<<<<<<< Updated upstream
      cPassword: state.confirm_password,
    };
    dispatch(resetPassword());
    try {
      const response = await api.post(API.changePassword, payload);
      if (response.data.code === 200) {
        dispatch(resetPasswordSuccess(response.data));
      } else {
        dispatch(resetPasswordFailed(response.data));
      }
    } catch (error) {
      dispatch(resetPasswordFailed());
    }
  };
=======
      cPassword: state.confirm_password
    }
    dispatch(resetPassword())
    try {
      const response = await api.post(API.changePassword, payload)
      if (response.data.code === 200) {
        dispatch(resetPasswordSuccess(response.data))
      } else {
        dispatch(resetPasswordFailed(response.data))
      }
    } catch (error) {
      dispatch(resetPasswordFailed())
    }
  }
>>>>>>> Stashed changes
}

//* ***** Forgot Password   ********//

<<<<<<< Updated upstream
export function forgotPassword(state) {
  return async (dispatch, getState, api) => {
    const payload = {
      username: state.mobileNo,
    };
    dispatch(forgotpassword());
    try {
      const response = await api.post(API.forgotPassword, payload);
      if (response.data.code === 200) {
        dispatch(forgotPasswordSuccess(response.data.data));
      } else {
        dispatch(forgotPasswordFailed(response.data));
      }
    } catch (error) {
      dispatch(forgotPasswordFailed(errorMessage));
    }
  };
=======
export function forgotPassword (state) {
  return async (dispatch, getState, api) => {
    const payload = {
      username: state.mobileNo
    }
    dispatch(forgotpassword())
    try {
      const response = await api.post(API.forgotPassword, payload)
      if (response.data.code === 200) {
        dispatch(forgotPasswordSuccess(response.data.data))
      } else {
        dispatch(forgotPasswordFailed(response.data))
      }
    } catch (error) {
      dispatch(forgotPasswordFailed(errorMessage))
    }
  }
>>>>>>> Stashed changes
}

//* ***** OTP VARIFICATION   ********//

<<<<<<< Updated upstream
export function optVerification(state) {
  return async (dispatch, getState, api) => {
    const payload = {
      otp: state.otp_number,
      userid: getState().Auth.userId,
    };
    dispatch(otpverification());
    try {
      const response = await api.post(API.varifyOTP, payload);
      if (response.data.code === 200) {
        await Cookies.set('token', response.data.jwtAccessToken);
        dispatch(otpverificationSuccess(response.data));
      } else {
        dispatch(otpverificationFailed(response.data));
      }
    } catch (error) {
      dispatch(otpverificationFailed(errorMessage));
    }
  };
=======
export function optVerification (state) {
  return async (dispatch, getState, api) => {
    const payload = {
      otp: state.otp_number,
      userid: getState().Auth.userId
    }
    dispatch(otpverification())
    try {
      const response = await api.post(API.varifyOTP, payload)
      if (response.data.code === 200) {
        await Cookies.set('token', response.data.jwtAccessToken)
        dispatch(otpverificationSuccess(response.data))
      } else {
        dispatch(otpverificationFailed(response.data))
      }
    } catch (error) {
      dispatch(otpverificationFailed(errorMessage))
    }
  }
>>>>>>> Stashed changes
}

//* ***** SET NEW PASSWORD   ********//

<<<<<<< Updated upstream
export function setNewPassword(state) {
  return async (dispatch, getState, api) => {
    const authorization = Cookies.get('token');
    const headers = { Authorization: authorization, Cache: 'no-cache' };
    const payload = {
      password: state.newPassword,
      confirmPassword: state.confirmPassword,
    };
    dispatch(setnewPassword());
    try {
      const response = await api.post(API.setNewPassword, payload, {
        headers: headers,
      });
      if (response.data.code === 200) {
        dispatch(setnewPasswordSuccess(response.data));
      } else {
        dispatch(setnewPasswordFailed(response.data));
      }
    } catch (error) {
      dispatch(setnewPasswordFailed(errorMessage));
    }
  };
=======
export function setNewPassword (state) {
  return async (dispatch, getState, api) => {
    const authorization = Cookies.get('token')
    const headers = { Authorization: authorization, Cache: 'no-cache' }
    const payload = {
      password: state.newPassword,
      confirmPassword: state.confirmPassword
    }
    dispatch(setnewPassword())
    try {
      const response = await api.post(API.setNewPassword, payload, {
        headers: headers
      })
      if (response.data.code === 200) {
        dispatch(setnewPasswordSuccess(response.data))
      } else {
        dispatch(setnewPasswordFailed(response.data))
      }
    } catch (error) {
      dispatch(setnewPasswordFailed(errorMessage))
    }
  }
>>>>>>> Stashed changes
}
