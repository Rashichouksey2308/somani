import Cookies from 'js-cookie'
import Axios from 'axios'
import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'

const errorMessage = {
  status: 400,
  message: 'Something went wrong',
}

function updatingCam() {
  return {
    type: types.UPDATE_CAM,
  }
}

function updatingCamSuccess() {
  return {
    type: types.UPDATE_CAM_SUCCESS,
  }
}

function updatingCamFailed() {
  return {
    type: types.UPDATE_CAM_FAILED,
  }
}

function gettingDocuments() {
  return {
    type: types.GET_DOCUMENT,
  }
}

function gettingDocumentsSuccess(payload) {
  return {
    type: types.GET_DOCUMENT_SUCCESS,
    payload,
  }
}
function gettingDocumentsFailed() {
  return {
    type: types.GET_DOCUMENT_FAILED,
  }
}
function addingDocuments() {
  return {
    type: types.ADD_DOCUMENT,
  }
}

function addingDocumentsSuccess(payload) {
  return {
    type: types.ADD_DOCUMENT_SUCCESS,
    payload,
  }
}
function addingDocumentsFailed() {
  return {
    type: types.ADD_DOCUMENT_FAILED,
  }
}

function deleteDocuments() {
  return {
    type: types.DELETE_DOCUMENT,
  }
}

function deleteDocumentsSuccess(payload) {
  return {
    type: types.DELETE_DOCUMENT_SUCCESS,
    payload,
  }
}
function deleteDocumentsFailed() {
  return {
    type: types.DELETE_DOCUMENT_FAILED,
  }
}

export const UpdateCam = (payload) => async (dispatch, getState, api) => {
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
        let toastMessage = 'CAM APPROVED'
        if (!toast.isActive(toastMessage)) {
          toast.success(toastMessage, { toastId: toastMessage })
        }
      } else {
        dispatch(updatingCamFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(updatingCamFailed())
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const GetDocuments = (payload) => async (dispatch, getState, api) => {
  try {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    console.log('here in getDocuments')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    Axios.get(
      `${API.corebaseUrl}${API.getDocuments}${payload}`,
      {
        headers: headers,
      },
      payload,
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(gettingDocumentsSuccess(response.data.data))
      } else {
        dispatch(gettingDocumentsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(gettingDocumentsFailed())
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}


export const AddingDocument = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.addDocuments}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(addingDocumentsSuccess(response.data.data))
        let toastMessage = 'Document Successfully Added'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      } else {
        dispatch(addingDocumentsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(addingDocumentsFailed())
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const DeleteDocument = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.deleteDocument}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(deleteDocumentsSuccess(response.data.data))
        let toastMessage = 'Document Successfully Added'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      } else {
        dispatch(deleteDocumentsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(deleteDocumentsFailed())
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

