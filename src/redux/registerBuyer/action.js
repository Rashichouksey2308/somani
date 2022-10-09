import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { data } from 'jquery'
import { settingSidebar } from '../breadcrumb/action'

function createBuyer() {
  return {
    type: types.REGISTER_BUYER,
  }
}

function createBuyerSuccess() {
  return {
    type: types.REGISTER_BUYER_SUCCESS,
  }
}

function createBuyerFailed() {
  return {
    type: types.REGISTER_BUYER_FAILED,
  }
}
function updateBuyer() {
  return {
    type: types.UPDATE_BUYER,
  }
}

function updateBuyerSuccess() {
  return {
    type: types.UPDATE_BUYER_SUCCESSFULL,
  }
}

function updateBuyerFailed() {
  return {
    type: types.UPDATE_BUYER_FAILED,
  }
}
function deleteBuyer() {
  return {
    type: types.DELETE_BUYER,
  }
}

function deleteBuyerSuccess() {
  return {
    type: types.DELETE_BUYER_SUCCESSFULL,
  }
}

function deleteBuyerFailed() {
  return {
    type: types.DELETE_BUYER_FAILED,
  }
}
function getBuyer() {
  return {
    type: types.GET_BUYER,
  }
}

function getBuyerSuccess(payload) {
  return {
    type: types.GET_BUYER_SUCCESSFULL,
    payload,
  }
}

function getBuyerFailed() {
  return {
    type: types.GET_BUYER_FAILED,
  }
}

function getAllBuyer() {
  return {
    type: types.GET_ALL_BUYER,
  }
}

function getAllBuyerSuccess(payload) {
  return {
    type: types.GET_ALL_BUYER_SUCCESSFULL,
    payload,
  }
}

function getAllBuyerFailed() {
  return {
    type: types.GET_ALL_BUYER_FAILED,
  }
}

function getAllOrder() {
  return {
    type: types.GET_ALL_ORDER,
  }
}

function getAllOrderSuccess(payload) {
  return {
    type: types.GET_ALL_ORDER_SUCCESSFULL,
    payload,
  }
}

function getAllOrderFailed() {
  return {
    type: types.GET_ALL_ORDER_FAILED,
  }
}

function getOrder() {
  return {
    type: types.GET_ORDER,
  }
}

function getOrderSuccess(payload) {
  return {
    type: types.GET_ORDER_SUCCESSFULL,
    payload,
  }
}

function getOrderFailed() {
  return {
    type: types.GET_ORDER_FAILED,
  }
}

function getGst() {
  return {
    type: types.GET_GST,
  }
}

function getGstSuccess(payload) {
  return {
    type: types.GET_GST_SUCCESS,
    payload,
  }
}

function getGstFailed() {
  return {
    type: types.GET_GST_FAILED,
  }
}

//////////**********  Image UPload   *********////////////

function uploadingDocument() {
  return { type: types.UPLOADDOCUMENT }
}

function uploadingDocumentSuccess(payload) {
  return {
    type: types.UPLOADDOCUMENT_SUCCESS,
    payload,
  }
}

function uploadingDocumentFailed() {
  return { type: types.UPLOADDOCUMENT_FAILED }
}

function createBuyerRouted() {
  return {
    type: types.REGISTER_BUYER_ROUTED,
  }
}
export const routeNewBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(createBuyerRouted())
}

export const CreateBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(createBuyer())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.registerCompany}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createBuyerSuccess(response.data.data))
        // document.getElementById('CompanyDetailsForm').reset()
        // document.getElementById('OrderDetailsForm').reset()
        // console.log(response.data.data, "THIS IS CREATE BUYER")
        let toastMessage = 'Lead Created Successfully'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        sessionStorage.setItem(
          'orderID',
          response.data.data.form.orderDetails[0],
        )
        sessionStorage.setItem('company', response.data.data.form._id)
        Router.push(`/review/${response.data.data.form._id}`)
        // if (response.data.data.queue == 'ReviewQueue') {
        //   dispatch(
        //     GetBuyer({
        //       companyId: response.data.data.form._id,
        //       orderId: response.data.data.form.orderDetails[0],
        //     }),
        //   )

        // }

        // Router.push('/leads')

        // payload.history.goBack()
      } else {
        dispatch(createBuyerFailed(response.data.data))
        let toastMessage = response.data.message
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    console.log(error, 'API FAILED')
    dispatch(createBuyerFailed())
    let toastMessage = error.message
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateBuyer = (payload) => async (dispatch, getState, api) => {
  // dispatch(updateBuyer()
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.updateBuyer}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateBuyerSuccess(response.data))
        dispatch(settingSidebar('Leads', 'Credit Queue', 'Credit Queue', '1'))
        Router.push('/review')
      } else {
        dispatch(updateBuyerFailed(response.data))
        console.log('UPDATE REQUEST FAILED')
      }
    })
  } catch (error) {
    dispatch(updateBuyerFailed())
    console.log(error, 'UPDATE API FAILED')
  }
}

export const settingSelectBuyer = (payload) => {
  return {
    type: types.SET_BUYER,
    payload,
  }
}

export const settingDocument = (payload) => {
  // console.log("reached here")
  return {
    type: types.SET_DOCUMENT,
    payload,
  }
}

export const GetBuyer = (payload) => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  // console.log(company, "in getbuyer1")
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    // console.log("in getbuyer")
    Axios.get(
      `${API.corebaseUrl}${API.getBuyerOrder}?company=${payload.companyId}&order=${payload.orderId}`,
      { headers: headers },
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getBuyerSuccess(response.data.data))
        // toast.error("Buyers fetched")
      } else {
        dispatch(getBuyerFailed(response.data.data))
        let toastMessage = 'Could not fetch Company Details'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getBuyerFailed())
  }
}

export const GetAllBuyer = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    dispatch(getAllBuyer())
    Axios.get(`${API.corebaseUrl}${API.getBuyers}${payload ? payload : ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllBuyerSuccess(response.data))
        // toast.error("Buyers fetched")
      } else {
        dispatch(getAllBuyerFailed(response.data))
        let toastMessage = 'Could not fetch Company Details'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getAllBuyerFailed())
    console.log(error, 'GET ALL BUYER API FAILED')
  }
}

export const GetAllOrders = (payload) => async (dispatch, getState, api) => {
  try {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    let response = await Axios.get(
      `${API.corebaseUrl}${API.orderDetail}?order=${payload.orderId}`,
      {
        headers: headers,
      },
    )
    if (response.data.code === 200) {
      dispatch(getAllOrderSuccess(response.data.data))
      // toast.error("Buyers fetched")
    } else {
      dispatch(getAllOrderFailed(response.data.data))
      let toastMessage = 'Getting orders failed'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    dispatch(getAllOrderFailed())
    console.log(error, 'GET ALL ORDER API FAILED')
  }
}

export const GetOrders = (payload) => async (dispatch, getState, api) => {
  try {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    Axios.get(`${API.corebaseUrl}${API.getBuyers}${payload ? payload : ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getOrderSuccess(response.data.data))
      } else {
        dispatch(getOrderFailed(response.data.data))
        let toastMessage = 'Getting Order List Failed'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getOrderFailed())
    console.log(error, 'GET ALL ORDERS API FAILED')
  }
}

export const DeleteBuyer = (payload) => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  try {
    const response = await api.delete(
      `${API.createBuyer}?BuyerId=${payload.BuyerId}`,
    )

    if (response.data.code === 200) {
      dispatch(deleteBuyerSuccess(response.data.data))
      // window.location.reload(false)
      payload.history.go(0)
      toast.error('Buyer Deleted Succesfully')
    } else {
      dispatch(deleteBuyerFailed(response.data.data))
      toast.error('Buyer could not be deleted')
    }
  } catch (error) {
    dispatch(deleteBuyerFailed())
    toast.error('Buyer could not be deleted')
  }
}

export const GetGst = (payload) => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    // console.log(payload,"in getbuyer")
    Axios.post(
      `${API.baseUrl}${API.getGst}`,
      { pan: payload },
      { headers: headers },
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getGstSuccess(response.data))
        // toast.error("Buyers fetched")
      } else {
        dispatch(getGstFailed(response.data))
        let toastMessage = 'Could not fetch Gst at this moment'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getGstFailed())
    console.log('GET GST API FAILED')
  }
}

export const UploadDocument = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.uploadDocuments}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(uploadingDocumentSuccess(response.data.data))
      } else {
        dispatch(uploadingDocumentFailed())
      }
    })
  } catch (error) {
    dispatch(uploadingDocumentFailed())
  }
}
