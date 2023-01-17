import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import moment from 'moment'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast } from '@/utils/helpers/global'

function getInspection () {
  return {
    type: types.GET_INSPECTION
  }
}

function getInspectionSuccess (payload) {
  return {
    type: types.GET_INSPECTION_SUCCESS,
    payload
  }
}

function getInspectionFailed () {
  return {
    type: types.GET_INSPECTION_FAILED
  }
}

function getAllInspection () {
  return {
    type: types.GET_ALL_INSPECTION
  }
}

function getAllInspectionSuccess (payload) {
  return {
    type: types.GET_ALL_INSPECTION_SUCCESS,
    payload
  }
}

function getAllInspectionFailed () {
  return {
    type: types.GET_ALL_INSPECTION_FAILED
  }
}

function updateInspection () {
  return {
    type: types.UPDATE_INSPECTION
  }
}

function updateInspectionSuccess (payload) {
  return {
    type: types.UPDATE_INSPECTION_SUCCESS,
    payload
  }
}

function updateInspectionFailed () {
  return {
    type: types.UPDATE_INSPECTION_FAILED
  }
}

function updateDate (payload) {
  return {
    type: types.GET_UPDATED_DATE,
    payload
  }
}

export const GetAllInspection = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.get(`${API.corebaseUrl}${API.getInspection}${payload || ''}`, {
      headers: headers
    })

    if (response.data.code === 200) {
      dispatch(getAllInspectionSuccess(response.data.data))
      dispatch(setNotLoading())
    } else {
      dispatch(getAllInspectionFailed())
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(getAllInspectionFailed())

    const toastMessage = 'COULD NOT GET INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetInspection = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.get(`${API.corebaseUrl}${API.getInspection}${payload}`, {
      headers: headers
    })
    if (response.data.code === 200) {
      dispatch(getInspectionSuccess(response.data.data))
      localStorage.setItem('inceptionlastmodified', moment(response.data.data[0].updatedAt).format('DD MMM,HH:mm:a'))
      dispatch(updateDate(moment(response.data.data[0].updatedAt).format('DD MMM,HH:mm:a')))
      dispatch(setNotLoading())
    } else {
      dispatch(getInspectionFailed())
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(getInspectionFailed())
    handleErrorToast('COULD NOT GET INSPECTION DATA AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const UpdateInspection = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }

    const response = await Axios.put(`${API.corebaseUrl}${API.updateInspection}`, payload.fd, {
      headers: headers
    })

    if (response.data.code === 200) {
      let toastMessage = 'UPDATED SUCCESSFULLY'

      if (payload.task == 'save') {
        toastMessage = 'Saved Successfully'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), {
            toastId: toastMessage
          })
        }
      } else {
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), {
            toastId: toastMessage
          })
        }

        localStorage.setItem('inceptionlastmodified', moment(response.data.timestamp).format('DD MMM,HH:mm:a'))
        dispatch(updateDate(moment(response.data.timestamp).format('DD MMM,HH:mm:a')))
      }
      dispatch(updateInspectionSuccess(response.data.data))
      dispatch(setNotLoading())
      return response.data.code
    } else {
      dispatch(updateInspectionFailed())
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(updateInspectionFailed())
    handleErrorToast('COULD NOT UPDATE INSPECTION DATA AT THIS TIME')
    dispatch(setNotLoading())
  }
}
