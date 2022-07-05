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

export const GetAllMarginMoney = (payload) => async (dispatch, getState, api) => {

  try {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    Axios.get(`${API.corebaseUrl}${API.getMarginMoney}${payload ? payload : ""}`, {
      headers: headers,
    }).then((response) => {
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
