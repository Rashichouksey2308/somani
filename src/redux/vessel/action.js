import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getVessel() {
  return {
    type: types.GET_VESSEL,
  }
}
function getVesselSuccess(payload) {
  return {
    type: types.GET_VESSEL_SUCCESS,
    payload,
  }
}
function getVesselFailed() {
  return {
    type: types.GET_VESSEL_FAILED,
  }
}
function getAllVessel() {
  return {
    type: types.GET_ALL_VESSEL,
  }
}
function getAllVesselSuccess(payload) {
  return {
    type: types.GET_ALL_VESSEL_SUCCESS,
    payload,
  }
}
function getAllVesselFailed() {
  return {
    type: types.GET_ALL_VESSEL_FAILED,
  }
}

function updateVessel() {
  return {
    type: types.UPDATE_VESSEL,
  }
}
function updateVesselSuccess(payload) {
  return {
    type: types.UPDATE_VESSEL_SUCCESS,
    payload,
  }
}
function updateVesselFailed() {
  return {
    type: types.UPDATE_VESSEL_FAILED,
  }
}

function uploadDocVessel() {
  return {
    type: types.UPLOAD_DOC_VESSEL,
  }
}
function uploadDocVesselSuccess(payload) {
  return {
    type: types.UPLOAD_DOC_VESSEL_SUCCESS,
    payload,
  }
}
function uploadDocVesselFailed() {
  return {
    type: types.UPLOAD_DOC_VESSEL_FAILED,
  }
}

export const GetAllVessel = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  console.log(
    `${API.corebaseUrl}${API.getVessel}`,
    `API.corebaseUrl{API.getVessel}`,
  )

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  console.log(
    `${API.corebaseUrl}${API.getVessel}`,
    jwtAccessToken,
    `API.corebaseUrl{API.getVessel}`,
  )
  try {
    Axios.get(
      `${API.corebaseUrl}${API.getVessel}`,
      {
        headers: headers,
      },
      payload,
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllVesselSuccess(response.data.data))
      } else {
        dispatch(getAllVesselFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getAllVesselFailed())

    let toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const GetVessel = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.getVessel}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        console.log('this')

        dispatch(getVesselSuccess(response.data.data))
      } else {
        dispatch(getVesselFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getVesselFailed())

    let toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const UpdateVessel = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.put(`${API.corebaseUrl}${API.getVessel}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateVesselSuccess(response.data.data))
      } else {
        dispatch(updateVesselFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(updateVesselFailed())

    let toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const UploadDocVessel = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.getVessel}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(uploadDocVesselSuccess(response.data.data))
        let toastMessage = 'DOCUMENT UPLOADED SUCCESSFULL'
        if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
        }
      } else {
        dispatch(uploadDocVesselFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(uploadDocVesselFailed())

    let toastMessage = 'COULD NOT UPLOAD Vessel Data AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}
