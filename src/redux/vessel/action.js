import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'


function getVessel() {
    return {
        type: types.GET_VESSEL,
    }
}
function getVesselSuccess(payload) {
    return {
        type: types.GET_VESSEL_SUCCESS,
        payload,
    }
}
function getVesselFailed() {
    return {
        type: types.GET_VESSEL_FAILED,
    }
}

function updateVessel() {
    return {
        type: types.UPDATE_VESSEL,
    }
}
function updateVesselSuccess(payload) {
    return {
        type: types.UPDATE_VESSEL_SUCCESS,
        payload,
    }
}
function updateVesselFailed() {
    return {
        type: types.UPDATE_VESSEL_FAILED,
    }
}


export const GetAllVessel = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.get(`${API.corebaseUrl}${API.getVessel}`, payload, {
            headers: headers,
        }).then((response) => {
            if (response.data.code === 200) {
                dispatch(getVesselSuccess(response.data.data))
            } else {
                dispatch(getVesselFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage)) {
                    toast.error(toastMessage, { toastId: toastMessage })
                }
            }
        })
    } catch (error) {
        dispatch(getVesselFailed())

        let toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
        }
    }
}



export const GetVessel = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.get(`${API.corebaseUrl}${API.getVessel}`, payload, {
            headers: headers,
        }).then((response) => {
            if (response.data.code === 200) {
                dispatch(getVesselSuccess(response.data.data))
            } else {
                dispatch(getVesselFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage)) {
                    toast.error(toastMessage, { toastId: toastMessage })
                }
            }
        })
    } catch (error) {
        dispatch(getVesselFailed())

        let toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
        }
    }
}

export const UpdateVessel = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.get(`${API.corebaseUrl}${API.getVessel}`, payload, {
            headers: headers,
        }).then((response) => {
            if (response.data.code === 200) {
                dispatch(updateVesselSuccess(response.data.data))
            } else {
                dispatch(updateVesselFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage)) {
                    toast.error(toastMessage, { toastId: toastMessage })
                }
            }
        })
    } catch (error) {
        dispatch(updateVesselFailed())

        let toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
        }
    }
}