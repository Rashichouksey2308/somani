import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { GetAllOrders } from 'redux/registerBuyer/action'
import { GetCompanyDetails } from 'redux/companyDetail/action'

export function isLoading(payload) {
  return {
    type: types.IS_LOADING,
    payload,
  }
}

export function notLoading(payload) {
  return {
    type: types.NOT_LOADING,
    payload,
  }
}

export const setIsLoading = (payload) => (dispatch, getState) => {
  dispatch(isLoading(true))
}
export const setNotLoading = (payload) => (dispatch, getState) => {
  dispatch(isLoading(false))
}
