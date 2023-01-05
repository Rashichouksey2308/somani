import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import * as types from './actionType'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function getPorts () {
  return {
    type: types.GET_PORTS
  }
}

function getPortsSuccess (payload) {
  return {
    type: types.GET_PORTS_SUCCESS,
    payload
  }
}

function getPortsFailed () {
  return {
    type: types.GET_PORTS_FAILED
  }
}

function getAllPorts () {
  return {
    type: types.GET_ALL_PORTS
  }
}

function getAllPortsSuccess (payload) {
  return {
    type: types.GET_ALL_PORTS_SUCCESS,
    payload
  }
}

function getAllPortsFailed () {
  return {
    type: types.GET_ALL_PORTS_FAILED
  }
}

function updatePorts () {
  return {
    type: types.UPDATE_PORTS
  }
}

function updatePortsSuccess (payload) {
  return {
    type: types.UPDATE_PORTS_SUCCESS,
    payload
  }
}

function updatePortsFailed () {
  return {
    type: types.UPDATE_PORTS_FAILED
  }
}

function createPorts () {
  return {
    type: types.CREATE_PORTS
  }
}

function createPortsSuccess (payload) {
  return {
    type: types.CREATE_PORTS_SUCCESS,
    payload
  }
}

function createPortsFailed () {
  return {
    type: types.CREATE_PORTS_FAILED
  }
}

export const GetAllPorts = (payload) => async (dispatch, getState, api) => {
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
   await Axios.get(`${API.corebaseUrl}${API.getPorts}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllPortsSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getAllPortsFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getAllPortsFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getAllPortsFailed())

    const toastMessage = 'COULD NOT GET PORTS AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetPorts = (payload) => async (dispatch, getState, api) => {
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
   await Axios.get(`${API.corebaseUrl}${API.getPorts}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getPortsSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getPortsFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getPortsFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getPortsFailed())

    const toastMessage = 'COULD NOT GET PORTS AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const CreatePorts = (payload) => async (dispatch, getState, api) => {
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
   await Axios.post(`${API.corebaseUrl}${API.getPorts}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(createPortsSuccess(response.data.data))

          const toastMessage = 'created  SUCCESSFULLY'

          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          dispatch(setNotLoading())
        } else {
          dispatch(createPortsFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(createPortsFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(createPortsFailed())

    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdatePorts = (payload) => async (dispatch, getState, api) => {
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
   await Axios.put(`${API.corebaseUrl}${API.getPorts}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(updatePortsSuccess(response.data.data))

          const toastMessage = 'updated  SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          sessionStorage.removeItem('internalCompanyId')
          dispatch(setNotLoading())
        } else {
          dispatch(updatePortsFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(updatePortsFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(updatePortsFailed())

    const toastMessage = 'COULD NOT UPDATE PORTS AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
