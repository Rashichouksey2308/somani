// import Cookies from 'js-cookie'
import Axios from 'axios'
import Router from 'next/router'
import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'
// import history from '../../history'
import Cookies from 'js-cookie'
import { setAuthenticationCookie } from '../../utils/authentication'
import { setIsLoading, setNotLoading } from '../Loaders/action'
const errorMessage = {
  status: 400,
  message: 'Something went wrong',
}

function getOrderData(payload) {
  return {
    type: types.GET_ORDER_DATA,
    payload,
  }
}
function getLeadData(payload) {
  return {
    type: types.GET_LEAD_DATA,
    payload,
  }
}
function getCommodityData(payload) {
  return {
    type: types.GET_COMMODITY_DATA,
    payload,
  }
}
function getOriginData(payload) {
  return {
    type: types.GET_ORIGIN_DATA,
    payload,
  }
}
function getCustomerData(payload) {
  return {
    type: types.GET_CUSTOMER_DATA,
    payload,
  }
}
function getExposureData(payload) {
  console.log(payload, 'exposureSummary.data.data')
  return {
    type: types.GET_EXPOSURE_DATA,
    payload,
  }
}

export const getAnalystData = () => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading())
    let cookie = Cookies.get('SOMANI')
    console.log(cookie, 'cookie')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    console.log(decodedString, 'decodedString')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    // let response = await api.post(API.login, payload);
    let orderSummary = await Axios.get(
      `${API.corebaseUrl}${API.orderSummary}`,
      {
        headers: {
          authorization: jwtAccessToken,
        },
      },
    )
    let leadSummary = await Axios.get(`${API.corebaseUrl}${API.leadSummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    })
    let commoditySummary = await Axios.get(
      `${API.corebaseUrl}${API.commoditySummary}`,
      {
        headers: {
          authorization: jwtAccessToken,
        },
      },
    )
    let originSummary = await Axios.get(
      `${API.corebaseUrl}${API.originSummary}`,
      {
        headers: {
          authorization: jwtAccessToken,
        },
      },
    )
    let customerSummary = await Axios.get(
      `${API.corebaseUrl}${API.customerSummary}`,
      {
        headers: {
          authorization: jwtAccessToken,
        },
      },
    )
    let exposureSummary = await Axios.get(
      `${API.corebaseUrl}${API.exposureSummary}`,
      {
        headers: {
          authorization: jwtAccessToken,
        },
      },
    )

    if (orderSummary.data.code == 200) {
      console.log(orderSummary.data.data.data, 'orderSummary.data.data')
      dispatch(getOrderData(orderSummary.data.data.data))
    }
    if (leadSummary.data.code == 200) {
      dispatch(getLeadData(leadSummary.data.data.data))
    }
    if (commoditySummary.data.code == 200) {
      dispatch(getCommodityData(commoditySummary.data.data.data))
    }
    if (originSummary.data.code == 200) {
      dispatch(
        getOriginData({
          payload: originSummary.data.data.data,
          total: originSummary.data.data.totalOrderValue,
        }),
      )
    }
    if (customerSummary.data.code == 200) {
      dispatch(
        getCustomerData({
          payload: customerSummary.data.data.data,
          total: customerSummary.data.data.totalOrderValue,
        }),
      )
    }
    if (exposureSummary.data.code == 200) {
      dispatch(getExposureData(exposureSummary.data.data.data))
    }
    dispatch(setNotLoading())
  } catch (error) {
    dispatch(setNotLoading())
    console.log('API FAILED')
    // dispatch(loggingUserFailed(errorMessage))
  }
}
