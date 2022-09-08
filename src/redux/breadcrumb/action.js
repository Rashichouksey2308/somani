import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { GetAllOrders } from 'redux/registerBuyer/action'
import { GetCompanyDetails } from 'redux/companyDetail/action'

export const getBreadcrumbValues = (payload) => (dispatch, getState) => {
  const prevValues = getState().Breadcrumb.breadCrumbData
  console.log(prevValues, 'rahul')
  dispatch({
    type: types.GET_BREADCRUMB_DATA,
    payload: {
      ...prevValues,
      ...payload,
    },
  })
}

export function clearBreadcrumbValues(payload) {
  return {
    type: types.CLEAR_BREADCRUMB_DATA,
    payload,
  }
}
