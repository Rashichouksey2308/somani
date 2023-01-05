import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global'

function getDelivery () {
  return {
    type: types.GET_DELIVERY
  }
}

function getDeliverySuccess (payload) {
  return {
    type: types.GET_DELIVERY_SUCCESS,
    payload
  }
}

function getDeliveryFailed () {
  return {
    type: types.GET_DELIVERY_FAILED
  }
}

function getAllDelivery () {
  return {
    type: types.GET_ALL_DELIVERY
  }
}

function getAllDeliverySuccess (payload) {
  return {
    type: types.GET_ALL_DELIVERY_SUCCESS,
    payload
  }
}

function getAllDeliveryFailed () {
  return {
    type: types.GET_ALL_DELIVERY_FAILED
  }
}

function updateDelivery () {
  return {
    type: types.UPDATE_DELIVERY
  }
}

function updateDeliverySuccess (payload) {
  return {
    type: types.UPDATE_DELIVERY_SUCCESS,
    payload
  }
}

function updateDeliveryFailed () {
  return {
    type: types.UPDATE_DELIVERY_FAILED
  }
}

export const GetAllDelivery = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
   await Axios.get(`${API.corebaseUrl}${API.delivery}${payload || ''}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllDeliverySuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getAllDeliveryFailed())
       handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getAllDeliveryFailed())
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const GetDelivery = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
   await Axios.get(`${API.corebaseUrl}${API.delivery}${payload}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getDeliverySuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getDeliveryFailed(response.data.data))
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getDeliveryFailed())
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const UpdateDelivery = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
   await Axios.put(`${API.corebaseUrl}${API.delivery}`, payload.payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateDeliverySuccess(response.data.data))
        const id = sessionStorage.getItem('ROrderID')
        dispatch(GetDelivery(`?deliveryId=${id}`))

        let toastMessage = 'SAVED SUCCESSFULLY'
        if (payload.task === 'submit') {
          toastMessage = 'updated successfully'
        }
       handleSuccessToast(toastMessage)
        dispatch(setNotLoading())
      } else {
        dispatch(updateDeliveryFailed(response.data.data))
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updateDeliveryFailed())
    handleErrorToast('COULD NOT SUBMIT YOUR REQUEST')
    dispatch(setNotLoading())
  }
}

export const UploadCustomDoc = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
   await Axios.post(`${API.corebaseUrl}${API.delivery}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getDeliverySuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getDeliveryFailed(response.data.data))
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getDeliveryFailed())
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME')
    dispatch(setNotLoading())
  }
}
