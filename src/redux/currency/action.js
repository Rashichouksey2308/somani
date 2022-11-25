import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import * as types from './actionType'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function getCurrency () {
  return {
    type: types.GET_CURRENCY
  }
}

function getCurrencySuccess (payload) {
  return {
    type: types.GET_CURRENCY_SUCCESS,
    payload
  }
}

function getCurrencyFailed () {
  return {
    type: types.GET_CURRENCY_FAILED
  }
}

function getAllCurrency () {
  return {
    type: types.GET_ALL_CURRENCY
  }
}

function getAllCurrencySuccess (payload) {
  return {
    type: types.GET_ALL_CURRENCY_SUCCESS,
    payload
  }
}

function getAllCurrencyFailed () {
  return {
    type: types.GET_ALL_CURRENCY_FAILED
  }
}

function updateCurrency () {
  return {
    type: types.UPDATE_CURRENCY
  }
}

function updateCurrencySuccess (payload) {
  return {
    type: types.UPDATE_CURRENCY_SUCCESS,
    payload
  }
}

function updateCurrencyFailed () {
  return {
    type: types.UPDATE_CURRENCY_FAILED
  }
}

function createCurrency () {
  return {
    type: types.CREATE_CURRENCY
  }
}

function createCurrencySuccess (payload) {
  return {
    type: types.CREATE_CURRENCY_SUCCESS,
    payload
  }
}

function createCurrencyFailed () {
  return {
    type: types.CREATE_CURRENCY_FAILED
  }
}

export const GetAllCurrency = (payload) => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getCurrency}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllCurrencySuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getAllCurrencyFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getAllCurrencyFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getAllCurrencyFailed())

    const toastMessage = 'COULD NOT GET CURRENCY AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetCurrency = (payload) => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getCurrency}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getCurrencySuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getCurrencyFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getCurrencyFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getCurrencyFailed())

    const toastMessage = 'COULD NOT GET CURRENCY AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const CreateCurrency = (payload) => async (dispatch, getState, api) => {
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
    Axios.post(`${API.corebaseUrl}${API.getCurrency}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(createCurrencySuccess(response.data.data))

          const toastMessage = 'created  SUCCESSFULLY'

          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          dispatch(setNotLoading())
        } else {
          dispatch(createCurrencyFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(createCurrencyFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(createCurrencyFailed())

    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdateCurrency = (payload) => async (dispatch, getState, api) => {
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
    Axios.put(`${API.corebaseUrl}${API.getCurrency}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(updateCurrencySuccess(response.data.data))

          const toastMessage = 'updated  SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          sessionStorage.removeItem('internalCompanyId')
          dispatch(setNotLoading())
        } else {
          dispatch(updateCurrencyFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(updateCurrencyFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(updateCurrencyFailed())

    const toastMessage = 'COULD NOT UPDATE CURRENCY AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
