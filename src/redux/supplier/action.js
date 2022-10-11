import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { setIsLoading, setNotLoading } from '../Loaders/action'
function updateSupplier() {
  return {
    type: types.UPDATE_SUPPLIER,
  }
}

function updateSupplierSuccess() {
  return {
    type: types.UPDATE_SUPPLIER_SUCCESSFULL,
  }
}

function updateSupplierFailed() {
  return {
    type: types.UPDATE_SUPPLIER_FAILED,
  }
}

export const UpdateSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  dispatch(updateSupplier())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.updateSupplier}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateSupplierSuccess(response.data))
        dispatch(setNotLoading())
      } else {
        dispatch(updateSupplierFailed(response.data))
        console.log('UPDATE REQUEST FAILED')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updateSupplierFailed())
    console.log(error, 'UPDATE API FAILED')
    dispatch(setNotLoading())
  }
}
