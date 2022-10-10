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

export function setCurrency(payload) {
  return {
    type: types.SET_CURRENCY,
    payload,
  }
}
export function getCurrency(payload) {
  return {
    type: types.GET_CURRENCY,
    payload,
  }
}
export function getUnit(payload) {
  return {
    type: types.GET_UNIT,
    payload,
  }
}
export function setUnit(payload) {
  return {
    type: types.SET_UNIT,
    payload,
  }
}
export function setSidebar(payload) {
  console.log(payload, '97899789')
  return {
    type: types.SIDEBAR,
    payload,
  }
}

export const settingCurrency = (payload) => (dispatch, getState) => {
  localStorage.setItem('currency', payload)
  console.log(payload, 'currency')
  dispatch(setCurrency(payload))
}

export const settingUnit = (payload) => (dispatch, getState) => {
  localStorage.setItem('unit', payload)
  console.log(payload, 'currency')
  dispatch(setUnit(payload))
}
export const gettingCurrency = (payload) => (dispatch, getState) => {
  dispatch(getCurrency())
  return (
    localStorage.getItem('currency') ||
    getState().Breadcrumb.breadCrumbData.currency
  )
}

export const gettingUnit = (payload) => (dispatch, getState) => {
  dispatch(getUnit())
  return (
    localStorage.getItem('unit') || getState().Breadcrumb.breadCrumbData.unit
  )
}

export const settingSidebar =
  (sideBarMain, subsideBarMain, loadedSubPage, openList) =>
  (dispatch, getState) => {
    sessionStorage.setItem('sideBarMain', sideBarMain)
    sessionStorage.setItem('subsideBarMain', subsideBarMain)
    sessionStorage.setItem('loadedSubPage', loadedSubPage)
    sessionStorage.setItem('openList', openList)
    console.log({ sideBarMain, subsideBarMain }, 'ideBarMain}')
    dispatch(setSidebar({ sideBarMain, subsideBarMain }))
  }
