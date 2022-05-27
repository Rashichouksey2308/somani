import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'

function fetchingAllUserTypes() {
  return {
    type: types.FETCH_ALL_USER_TYPES,
  }
}

function fetchingAllUserTypesSuccess(payload) {
  return {
    type: types.FETCH_ALL_USER_TYPES_SUCCESS,
    payload,
  }
}

function fetchingAllUserTypesFailed(payload) {
  return {
    type: types.FETCH_ALL_USER_TYPES_FAILED,
    payload,
  }
}

function registeringPrivilegedUser() {
  return {
    type: types.REGISTER_NEW_PRIVILEGED_USER,
  }
}

function registeringPrivilegedUserSuccess(payload) {
  toast('User Successfully Created', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  })
  return {
    type: types.REGISTER_NEW_PRIVILEGED_USER_SUCCESS,
    payload,
  }
}

function registeringPrivilegedUserFailed(payload) {
  toast.error(payload.message, {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  })
  return {
    type: types.REGISTER_NEW_PRIVILEGED_USER_FAILED,
    payload,
  }
}

function fetchingPrivilegedUsers() {
  return {
    type: types.FETCH_ALL_PRIVILEGED_USER,
  }
}

function fetchingPrivilegedUsersSuccess(payload) {
  return {
    type: types.FETCH_ALL_PRIVILEGED_USER_SUCCESS,
    payload,
  }
}

function fetchingPrivilegedUsersFailed(payload) {
  return {
    type: types.FETCH_ALL_PRIVILEGED_USER_FAILED,
    payload,
  }
}

function updatingPrivilegedUser() {
  return {
    type: types.UPDATE_PRIVILEGED_USER,
  }
}

function updatingPrivilegedUserSuccess(payload) {
  return {
    type: types.UPDATE_PRIVILEGED_USER_SUCCESS,
    payload,
  }
}

function updatingPrivilegedUserFailed(payload) {
  return {
    type: types.UPDATE_PRIVILEGED_USER_FAILED,
    payload,
  }
}

export const fetchAllUserTypes = () => async (dispatch, getState, api) => {
  dispatch(fetchingAllUserTypes())
  try {
    let response = await api.get(API.getUserTypeList)
    if (response.data.code === 200) {
      dispatch(fetchingAllUserTypesSuccess(response.data.data))
    } else {
      dispatch(fetchingAllUserTypesFailed(response.data))
    }
  } catch (error) {
    dispatch(fetchingAllUserTypesFailed('error'))
  }
}

export const registerPrivilegedUser =
  (payload) => async (dispatch, getState, api) => {
    dispatch(registeringPrivilegedUser())

    try {
      let response = await api.post(API.registerPrivilegedUser, payload)
      if (response.data.code === 200) {
        dispatch(registeringPrivilegedUserSuccess(response.data))
      } else {
        dispatch(registeringPrivilegedUserFailed(response.data))
      }
    } catch (error) {
      dispatch(registeringPrivilegedUserFailed('error'))
    }
  }

export const fetchPrivilegedUsers = () => async (dispatch, getState, api) => {
  dispatch(fetchingPrivilegedUsers())

  try {
    let response = await api.get(API.getPrivilegedUsers)
    if (response.data.code === 200) {
      dispatch(fetchingPrivilegedUsersSuccess(response.data.data))
    } else {
      dispatch(fetchingPrivilegedUsersFailed(response.data))
    }
  } catch (error) {
    dispatch(fetchingPrivilegedUsersFailed('error'))
  }
}

export const updatePrivilegedUser =
  (payload) => async (dispatch, getState, api) => {
    dispatch(updatingPrivilegedUser())

    try {
      let response = await api.post(API.updatePrivilegedUser, payload)
      if (response.data.code === 200) {
        dispatch(updatingPrivilegedUserSuccess(response.data))
      } else {
        dispatch(updatingPrivilegedUserFailed(response.data))
      }
    } catch (error) {
      dispatch(updatingPrivilegedUserFailed('error'))
    }
  }
