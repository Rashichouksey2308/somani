import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast } from '@/utils/helpers/global'

function placeNewOrder () {
  return {
    type: types.PLACE_ORDER
  }
}

function placeNewOrderSuccess (payload) {
  return {
    type: types.PLACE_ORDER_SUCCESSFULL,
    payload
  }
}

function placeNewOrderFailed () {
  return {
    type: types.PLACE_ORDER_FAILED
  }
}

function placeorderRouted () {
  return {
    type: types.PLACED_ORDER_ROUTED
  }
}

export const PlaceNewOrderRouted = (payload) => async (dispatch, getState, api) => {
  dispatch(placeorderRouted())
}

export const PlaceNewOrder = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  dispatch(placeNewOrder())

  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
   await Axios.post(`${API.corebaseUrl}${API.newOrder}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(placeNewOrderSuccess(response.data.data))

        const toastMessage = 'ORDER PLACED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(placeNewOrderFailed())
       handleErrorToast('FAILED TO PLACE NEW ORDER')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(placeNewOrderFailed())
    handleErrorToast(error.message)
    dispatch(setNotLoading())
  }
}
