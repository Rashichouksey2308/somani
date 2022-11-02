import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { setIsLoading, setNotLoading } from '../Loaders/action'
function updateSupplier () {
  return {
    type: types.UPDATE_SUPPLIER
  }
}

function updateSupplierSuccess (payload) {
  return {
    type: types.UPDATE_SUPPLIER_SUCCESSFULL,
    payload
  }
}

function updateSupplierFailed () {
  return {
    type: types.UPDATE_SUPPLIER_FAILED
  }
}

function getSupplier (payload) {
  return {
    type: types.GET_SUPPLIER,
    payload
  }
}

function getSupplierSuccess (payload) {
  return {
    type: types.GET_SUPPLIER_SUCCESSFULL,
    payload
  }
}

function getSupplierFailed () {
  return {
    type: types.GET_SUPPLIER_FAILED
  }
}

function getAllSupplier (payload) {
  return {
    type: types.GET_ALL_SUPPLIER,
    payload
  }
}

function getAllSupplierSuccess (payload) {
  console.log(payload, 'supplierResponse')
  return {
    type: types.GET_ALL_SUPPLIER_SUCCESSFULL,
    payload
  }
}

function getAllSupplierFailed () {
  return {
    type: types.GET_ALL_SUPPLIER_FAILED

  }
}


export function ClearSupplier () {
  return {
    type: types.CLEAR_SUPPLIER

  }
}

export const UpdateSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  dispatch(updateSupplier())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.supplier}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        const toastMessage = 'request send successfully'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(updateSupplierSuccess(response.data))
        dispatch(setNotLoading())
      } else {
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(updateSupplierFailed(response.data))
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(updateSupplierFailed())
    dispatch(setNotLoading())
  }
}

export const GetSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  dispatch(getSupplier())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.supplier}${payload || ''}`,
      {
        headers: headers
      }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getSupplierSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getSupplierFailed(response.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getSupplierFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
export const GetAllSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  dispatch(getAllSupplier())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.supplier}${payload || ''}`,
      {
        headers: headers
      }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllSupplierSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getAllSupplierFailed(response.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getAllSupplierFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
