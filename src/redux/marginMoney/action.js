import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'

function getAllMarginMoney() {
  return {
    type: types.GET_ALL_MARGINMONEY,
  }
}
function getAllMarginMoneySuccess(payload) {
  return {
    type: types.GET_ALL_MARGINMONEY_SUCCESSFULL,
    payload,
  }
}
function getAllMarginMoneyFailed() {
  return {
    type: types.GET_ALL_MARGINMONEY_FAILED,
  }
}

function getMarginMoney() {
  return {
    type: types.GET_MARGINMONEY,
  }
}
function getMarginMoneySuccess(payload) {
  return {
    type: types.GET_MARGINMONEY_SUCCESSFULL,
    payload,
  }
}
function getMarginMoneyFailed() {
  return {
    type: types.GET_MARGINMONEY_FAILED,
  }
}

function updatingMarginMoney() {
  return {
    type: types.UPDATE_MARGINMONEY,
  }
}
function updateMarginMoneySuccess(payload) {
  return {
    type: types.UPDATE_MARGINMONEY_SUCCESSFULL,
    payload,
  }
}
function updateMarginMoneyFailed() {
  return {
    type: types.UPDATE_MARGINMONEY_FAILED,
  }
}

export const GetAllMarginMoney =
  (payload) => async (dispatch, getState, api) => {
    try {
      let cookie = Cookies.get('SOMANI')
      const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

      let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
      var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
      Axios.get(
        `${API.corebaseUrl}${API.getMarginMoney}${payload ? payload : ''}`,
        {
          headers: headers,
        },
      ).then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllMarginMoneySuccess(response.data.data))
        } else {
          dispatch(getAllMarginMoneyFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(getAllMarginMoneyFailed())

      let toastMessage = 'GET MARGIN MONEY API FAILED'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

export const GetMarginMoney = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(
      `${API.corebaseUrl}${API.getMarginMoney}?orderId=${payload.orderId}`,
      {
        headers: headers,
      },
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMarginMoneySuccess(response.data.data))
      } else {
        dispatch(getMarginMoneyFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getMarginMoneyFailed())

    let toastMessage = 'GET MARGIN MONEY API FAILED'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const UpdateMarginMoney =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.updateMarginMoney}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateMarginMoneySuccess(response.data))
        } else {
          dispatch(updateMarginMoneyFailed(response.data))
          let toastMessage = 'UPDATE REQUEST FAILED'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(updateMarginMoneyFailed())
      let toastMessage = 'UPDATE MARGIN MONEY REQUEST FAILED'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }
