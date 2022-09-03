import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

function changeTheme() {
  return {
    type: types.CHANGE_THEME,
  }
}

function changeThemeSuccess(value) {
  return {
    type: types.CHANGE_THEME_SUCCESS,
    value,
  }
}

function pageName(value) {
  return {
    type: types.PAGE_NAME,
    value,
  }
}

function pageTabName(value) {
  return {
    type: types.PAGE_TAB_NAME,
    value,
  }
}

function dynamicPage(value = null) {
  return {
    type: types.DYNAMIC_PAGE,
    value,
  }
}
function dynamicOrder(value = null) {
  return {
    type: types.DYNAMIC_ORDER,
    value,
  }
}
function changeCurrency(value = null) {
  return {
    type: types.CHANGE_CURRENCY,
    value,
  }
}
export const ChangeCurrency = (payload) => async (dispatch, getState, api) => {
  dispatch(changeCurrency(payload))
  sessionStorage.setItem('unitOfValue', payload)
}
export const ChangeTheme = () => async (dispatch, getState, api) => {
  dispatch(changeTheme())
  let isDark = localStorage.getItem('darkMode')
  if (isDark == 'true' || isDark == true) {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')

    localStorage.setItem('darkMode', false)
    dispatch(changeThemeSuccess(false))
  } else {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkMode', true)
    dispatch(changeThemeSuccess(true))
  }
}

export const setTheme = () => async (dispatch, getState, api) => {
  dispatch(changeTheme())
  let isDark = localStorage.getItem('darkMode')

  if (isDark == 'true' || isDark == true) {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkMode', true)
    dispatch(changeThemeSuccess(true))
  } else {
    document.body.classList.add('light-mode')

    localStorage.setItem('darkMode', false)
    dispatch(changeThemeSuccess(false))
  }
}
export const setPageName = (value) => async (dispatch, getState, api) => {
  dispatch(pageName(value))
}

export const setPageTabName = (value) => async (dispatch, getState, api) => {
  dispatch(pageTabName(value))
}

export const setDynamicName = (value) => async (dispatch, getState, api) => {
  dispatch(dynamicPage(value))
}

export const setDynamicOrder = (value) => async (dispatch, getState, api) => {
  console.log('start', value)
  dispatch(dynamicOrder(value))
}
