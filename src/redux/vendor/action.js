import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import * as types from './actionType'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function getVendor () {
  return {
    type: types.GET_VENDOR
  }
}

function getVendorSuccess (payload) {
  return {
    type: types.GET_VENDOR_SUCCESS,
    payload
  }
}

function getVendorFailed () {
  return {
    type: types.GET_VENDOR_FAILED
  }
}

function getAllVendor () {
  return {
    type: types.GET_ALL_VENDOR
  }
}

function getAllVendorSuccess (payload) {
  return {
    type: types.GET_ALL_VENDOR_SUCCESS,
    payload
  }
}

function getAllVendorFailed () {
  return {
    type: types.GET_ALL_VENDOR_FAILED
  }
}

function updateVendor () {
  return {
    type: types.UPDATE_VENDOR
  }
}

function updateVendorSuccess (payload) {
  return {
    type: types.UPDATE_VENDOR_SUCCESS,
    payload
  }
}

function updateVendorFailed () {
  return {
    type: types.UPDATE_VENDOR_FAILED
  }
}

function createVendor () {
  return {
    type: types.CREATE_VENDOR
  }
}

function createVendorSuccess (payload) {
  return {
    type: types.CREATE_VENDOR_SUCCESS,
    payload
  }
}

function createVendorFailed () {
  return {
    type: types.CREATE_VENDOR_FAILED
  }
}

export const GetAllVendor = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.get(`${API.corebaseUrl}${API.getVendor}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllVendorSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getAllVendorFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getAllVendorFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getAllVendorFailed())

    const toastMessage = 'COULD NOT GET INTERNAL COMPANIES AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetVendor = (payload) => async (dispatch, getState, api) => {
 
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.get(`${API.corebaseUrl}${API.getVendor}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getVendorSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getVendorFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getVendorFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getVendorFailed())

    const toastMessage = 'COULD NOT GET INTERNAL COMPANIES AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const CreateVendor = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.post(`${API.corebaseUrl}${API.getVendor}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(createVendorSuccess(response.data.data))

          const toastMessage = 'created  SUCCESSFULLY'

          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          dispatch(setNotLoading())
        } else {
          dispatch(createVendorFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(createVendorFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(createVendorFailed())

    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdateVendor = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.put(`${API.corebaseUrl}${API.getVendor}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(updateVendorSuccess(response.data.data))

          const toastMessage = 'updated  SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          sessionStorage.removeItem('internalCompanyId')
          dispatch(setNotLoading())
        } else {
          dispatch(updateVendorFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(updateVendorFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(updateVendorFailed())

    const toastMessage = 'COULD NOT UPDATE INTERNAL COMPANIES AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
