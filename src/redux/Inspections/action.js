import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'
import moment from 'moment'

function getInspection() {
  return {
    type: types.GET_INSPECTION,
  }
}
function getInspectionSuccess(payload) {
  return {
    type: types.GET_INSPECTION_SUCCESS,
    payload,
  }
}
function getInspectionFailed() {
  return {
    type: types.GET_INSPECTION_FAILED,
  }
}
function getAllInspection() {
  return {
    type: types.GET_ALL_INSPECTION,
  }
}
function getAllInspectionSuccess(payload) {
  return {
    type: types.GET_ALL_INSPECTION_SUCCESS,
    payload,
  }
}
function getAllInspectionFailed() {
  return {
    type: types.GET_ALL_INSPECTION_FAILED,
  }
}

function updateInspection() {
  return {
    type: types.UPDATE_INSPECTION,
  }
}
function updateInspectionSuccess(payload) {
  return {
    type: types.UPDATE_INSPECTION_SUCCESS,
    payload,
  }
}
function updateInspectionFailed() {
  return {
    type: types.UPDATE_INSPECTION_FAILED,
  }
}

function updateDate(payload) {
  return {
    type: types.GET_UPDATED_DATE,
    payload,
  }
}
export const GetAllInspection =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    console.log(
      `${API.corebaseUrl}${API.getVessel}`,
      `API.corebaseUrl{API.getVessel}`,
    )

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      let response = await Axios.get(
        `${API.corebaseUrl}${API.getInspection}${payload ? payload : ''}`,
        {
          headers: headers,
        },
      )

      if (response.data.code === 200) {
        dispatch(getAllInspectionSuccess(response.data.data))
      } else {
        dispatch(getAllInspectionFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    } catch (error) {
      dispatch(getAllInspectionFailed())

      let toastMessage = 'COULD NOT GET INSPECTION DATA AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }

export const GetInspection = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    let response = await Axios.get(
      `${API.corebaseUrl}${API.getInspection}${payload}`,
      {
        headers: headers,
      },
    )
    if (response.data.code === 200) {
      dispatch(getInspectionSuccess(response.data.data))
      localStorage.setItem(
        'inceptionlastmodified',
        moment(response.data.data[0].updatedAt).format('DD MMM,HH:mm:a'),
      )
      dispatch(
        updateDate(
          moment(response.data.data[0].updatedAt).format('DD MMM,HH:mm:a'),
        ),
      )
    } else {
      dispatch(getInspectionFailed(response.data.data))
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    dispatch(getInspectionFailed())

    let toastMessage = 'COULD NOT GET   INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateInspection =
  (payload) => async (dispatch, getState, api) => {
    try {
      let cookie = Cookies.get('SOMANI')
      const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
      console.log(payload.task, 'payload Third party23')

      let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
      var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }

      let response = await Axios.put(
        `${API.corebaseUrl}${API.updateInspection}`,
        payload.fd,
        {
          headers: headers,
        },
      )
      console.log(response, 'response')
      if (response.data.code === 200) {
        let toastMessage = 'UPDATED SUCCESSFULLY'
        console.log(payload.task, 'payload.task')
        if (payload.task == 'save') {
          console.log(payload.task, 'payload.task213132')
          toastMessage = 'Saved Successfully'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage,
            })
          }
        } else {
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage,
            })
          }

          localStorage.setItem(
            'inceptionlastmodified',
            moment(response.data.timestamp).format('DD MMM,HH:mm:a'),
          )
          dispatch(
            updateDate(
              moment(response.data.timestamp).format('DD MMM,HH:mm:a'),
            ),
          )
        }
        dispatch(updateInspectionSuccess(response.data.data))
      } else {
        dispatch(updateInspectionFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    } catch (error) {
      dispatch(updateInspectionFailed())

      let toastMessage = 'COULD NOT UPDATE INSPECTION DATA AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }
