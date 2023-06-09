import Axios from 'axios'
import Router from 'next/router'
import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'
import { handleErrorToast } from '@/utils/helpers/global'
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
}

//* ***** Verify Token   ********//

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
}

//* ***** Generate Token   ********//

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
}

//* ***** Reset Password   ********//

export function resetPassword () {
  return { type: types.RESET_PASSWORD }
}

export function resetPasswordSuccess () {
  toast('Password Successfully Changed', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
  return { type: types.RESET_PASSWORD_SUCCESS }
}

export function resetPasswordFailed () {
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
  return { type: types.RESET_PASSWORD_FAILED }
}

export function handlePageLoading (payload) {
  return {
    type: types.HANDLE_PAGE_LOADING,
    payload
  }
}

//* ***** Forgot Password   ********//

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
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
  return { type: types.FORGOT_PASSWORD_FAILED }
}

//* ***** OTP VARIFICATION   ********//

export function otpverification () {
  return { type: types.OTP_VARIFICATION }
}

export function otpverificationSuccess () {
  history.push('/set-new-password')
  window.location.reload()
  return { type: types.OTP_VARIFICATION_SUCCESS }
}

export function otpverificationFailed () {
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
  return { type: types.OTP_VARIFICATION_FAILED }
}

//* ***** SET NEW PASSWORD   ********//

export function setnewPassword () {
  return { type: types.SET_NEW_PASSWORD }
}

export function setnewPasswordSuccess () {
  history.push('/login')
  toast('Password Successfully Changed', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
  return { type: types.SET_NEW_PASSWORD_SUCCESS }
}

export function setnewPasswordFailed () {
  toast.error('Something went wrong', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
  return { type: types.SET_NEW_PASSWORD_FAILED }
}

//* ***** LOGIN  ********//

export const loginUser = (payload) => async (dispatch, getState, api) => {
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
      handleErrorToast('Please check your credentials and Try Again!')
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
      dispatch(validatingTokenSuccess(response.data.data))
      return response.data.data
    } else {
      if (response.data.code === 401||response.data.code === 402) {
        dispatch(generateToken())
      }
      dispatch(validatingTokenFailed(response.data.data))
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
    }
  } catch (error) {
    dispatch(validatingTokenFailed())
    dispatch(generateToken())
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
  }
}

//* ***** Generate Token  ********//

export const generateToken = () => async (dispatch, getState, api) => {
  try {
    const cookie = await Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')

    const response = await Axios.post(`${API.authbaseUrl}${API.generateToken}`, {
      refreshToken: refreshToken,
      userId: userId
    })

    if (response.data.code === 200) {
      const {
        data: { data: jwtAccessToken }
      } = response
      // await Cookies.remove('SOMANI')

      await setAuthenticationCookie({
        jwtAccessToken,
        refreshToken,
        user: { userId }
      })
      dispatch(generatingTokenSuccess(response.data.data))
    }else {
      dispatch(logoutUser())
      dispatch(generatingTokenFailed(response.data))
    }

  } catch (error) {
    dispatch(generatingTokenFailed(error))
    dispatch(logoutUser())
  }
}

//* ***** Logout User   ********//

export const logoutUser = () => async (dispatch, getState, api) => {
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
  return async (dispatch, getState, api) => {
    const payload = {
      prevPassword: state.recent_password,
      password: state.new_password,
      cPassword: state.confirm_password
    }
    dispatch(resetPassword())
    try {
      const response = await api.post(API.changePassword, payload)
      if (response.data.code === 200) {
        dispatch(resetPasswordSuccess())
      } else {
        dispatch(resetPasswordFailed())
      }
    } catch (error) {
      dispatch(resetPasswordFailed())
    }
  }
}

//* ***** Forgot Password   ********//

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
        dispatch(forgotPasswordFailed())
      }
    } catch (error) {
      dispatch(forgotPasswordFailed())
    }
  }
}

//* ***** OTP VARIFICATION   ********//

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
        dispatch(otpverificationSuccess())
      } else {
        dispatch(otpverificationFailed())
      }
    } catch (error) {
      dispatch(otpverificationFailed())
    }
  }
}

//* ***** SET NEW PASSWORD   ********//

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
        dispatch(setnewPasswordSuccess())
      } else {
        dispatch(setnewPasswordFailed())
      }
    } catch (error) {
      dispatch(setnewPasswordFailed())
    }
  }
}
