import * as types from './actionType'

export const showSidebar = (payload) => {
  return {
    type: types.SHOW_SIDEBAR,
    payload,
  }
}
export const hideSidebar = () => {
  return {
    type: types.HIDE_SIDEBAR,
  }
}

export const isMobile = (payload) => {
  return {
    type: types.IS_MOBILE,
    payload,
  }
}

export const setMobile = (value) => {
  return {
    type: types.SET_MOBILE,
    value,
  }
}

export const settingMobile = (value) => async (dispatch, getState, api) => {
  console.log('set')
  dispatch(setMobile(value))
}
