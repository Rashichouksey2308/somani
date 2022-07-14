 // import Cookies from 'js-cookie'
import Axios from 'axios'
import Router from 'next/router'
import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'
// import history from '../../history'
import Cookies from 'js-cookie'
import { setAuthenticationCookie } from '../../utils/authentication'

const errorMessage = {
    status: 400,
    message: 'Something went wrong',
  }

  function updatingCam(){
    return{
        type: types.UPDATE_CAM
    }
  }

  function updatingCamSuccess(){
    return{
        type: types.UPDATE_CAM_SUCCESS
    }
  }

  function updatingCamFailed(){
    return{
        type: types.UPDATE_CAM_FAILED
    }
  }

  function gettingDocuments(){
    return{
        type: types.GET_DOCUMENT
    }
  }

  function gettingDocumentsSuccess(){
    return{
        type: types.GET_DOCUMENT_SUCCESS
    }
  }
  function gettingDocumentsFailed(){
    return{
        type: types.GET_DOCUMENT_FAILED
    }
  }



  export const updateCam = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.updateCam}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updatingCamSuccess(response.data.data))
        } else {
          dispatch(updatingCamFailed())
        }
      })
    } catch (error) {
      dispatch(updatingCamFailed())
    }
  }




  export const GetDocuments = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.get(`${API.corebaseUrl}${API.getDocuments}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(gettingDocumentsSuccess(response.data.data))
        } else {
          dispatch(gettingDocumentsFailed())
        }
      })
    } catch (error) {
      dispatch(gettingDocumentsFailed())
    }
  }