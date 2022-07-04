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

function changeThemeFailed() {
  return {
    type: types.CHANGE_THEME_FAILED,
  }
}

export const ChangeTheme = () => async (dispatch, getState, api) => {
  dispatch(changeTheme())
  let isDark = localStorage.getItem('darkMode')
  console.log(isDark, 'reducerlight')
  if (isDark == 'true' || isDark == true) {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')

    localStorage.setItem('darkMode', false)
    dispatch(changeThemeSuccess(false))
  } else {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    console.log('reducerlight2')
    localStorage.setItem('darkMode', true)
    dispatch(changeThemeSuccess(true))
  }
  console.log(localStorage.getItem('darkMode'), 'darkkkki')
}

export const setTheme = () => async (dispatch, getState, api) => {
  dispatch(changeTheme())
  let isDark = localStorage.getItem('darkMode')
  console.log(isDark, 'reducerlight')
  if (isDark == 'true' || isDark == true) {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkMode', true)
    dispatch(changeThemeSuccess(true))
  } else {
    document.body.classList.add('light-mode')
    console.log('reducerlight2')
    localStorage.setItem('darkMode', false)
    dispatch(changeThemeSuccess(false))
  }
}
