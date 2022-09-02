import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getLifting() {
  return {
    type: types.GET_LIFTING_DATA,
  }
}
function getLiftingSuccess(payload) {
  return {
    type: types.GET_LIFTING_DATA_SUCCESS,
    payload,
  }
}
function getLiftingFailed() {
  return {
    type: types.GET_LIFTING_DATA_FAILED,
  }
}
function getAllLifting() {
  return {
    type: types.GET_ALL_LIFTING_DATA,
  }
}
function getAllLiftingSuccess(payload) {
  return {
    type: types.GET_ALL_LIFTING_DATA_SUCCESS,
    payload,
  }
}
function getAllLiftingFailed() {
  return {
    type: types.GET_ALL_LIFTING_DATA_FAILED,
  }
}

function updateLiftingData() {
  return {
    type: types.UPDATE_LIFTING_DATA,
  }
}
function updateLiftingDataSuccess(payload) {
  return {
    type: types.UPDATE_LIFTING_DATA_SUCCESS,
    payload,
  }
}
function updateLiftingDataFailed() {
  return {
    type: types.UPDATE_LIFTING_DATA_FAILED,
  }
}

export const GetAllLifting = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  console.log(
    `${API.corebaseUrl}${API.getVessel}`,
    `API.corebaseUrl{API.getVessel}`,
  )

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.lifting}${payload ? payload : ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllLiftingSuccess(response.data.data))
      } else {
        dispatch(getAllLiftingFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getAllLiftingFailed())

    let toastMessage = 'COULD NOT GET INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const GetLifting = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.getLifting}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getLiftingSuccess(response.data.data))
      } else {
        dispatch(getLiftingFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getLiftingFailed())

    let toastMessage = 'COULD NOT GET   INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateLiftingData =
  (payload) => async (dispatch, getState, api) => {
    console.log('sending')
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.lifting}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateLiftingDataSuccess(response.data.data))
          let toastMessage = 'UPDATED SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
        } else {
          dispatch(updateLiftingDataFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(updateLiftingDataFailed())

      let toastMessage = 'COULD NOT UPDATE INSPECTION DATA AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }
