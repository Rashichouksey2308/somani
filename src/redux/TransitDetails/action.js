import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'




function getTransitDetails() {
    return {
        type: types.GET_TRANSITDETAILS,
    }
}
function getTransitDetailsSuccess(payload) {
    return {
        type: types.GET_TRANSITDETAILS_SUCCESS,
        payload,
    }
}
function getTransitDetailsFailed() {
    return {
        type: types.GET_TRANSITDETAILS_FAILED,
    }
}
function getAllTransitDetails() {
    return {
        type: types.GET_ALL_TRANSITDETAILS,
    }
}
function getAllTransitDetailsSuccess(payload) {
    return {
        type: types.GET_ALL_TRANSITDETAILS_SUCCESS,
        payload,
    }
}
function getAllTransitDetailsFailed() {
    return {
        type: types.GET_ALL_TRANSITDETAILS_FAILED,
    }
}

function updateTransitDetails() {
    return {
        type: types.UPDATE_TRANSITDETAILS,
    }
}
function updateTransitDetailsSuccess(payload) {
    return {
        type: types.UPDATE_TRANSITDETAILS_SUCCESS,
        payload,
    }
}
function updateTransitDetailsFailed() {
    return {
        type: types.UPDATE_TRANSITDETAILS_FAILED,
    }
}

function getAdditionalData() {
    return {
        type: types.GET_ADDITTIONAL_DATA,
    }
}
function getAdditionalDataSuccess(payload) {
    return {
        type: types.GET_ADDITTIONAL_DATA_SUCCESS,
        payload,
    }
}
function getAdditionalDataFailed() {
    return {
        type: types.GET_ADDITTIONAL_DATA_FAILED,
    }
}




export const GetAllTransitDetails = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.get(`${API.corebaseUrl}${API.getTransitDetails}`, {
            headers: headers,
        }, payload).then((response) => {
            if (response.data.code === 200) {
                dispatch(getAllTransitDetailsSuccess(response.data.data))
            } else {
                dispatch(getAllTransitDetailsFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })         }
            }
        })
    } catch (error) {
        dispatch(getAllTransitDetailsFailed())

        let toastMessage = 'COULD NOT GET TRANSIT DETAILS AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) }
    }
}



export const GetTransitDetails = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.get(`${API.corebaseUrl}${API.getTransitDetails}${payload}`, {
            headers: headers,
        }).then((response) => {
            if (response.data.code === 200) {
                dispatch(getTransitDetailsSuccess(response.data.data))
            } else {
                dispatch(getTransitDetailsFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })         }
            }
        })
    } catch (error) {
        dispatch(getTransitDetailsFailed())

        let toastMessage = 'COULD NOT GET   TRANSIT DATA AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) }
    }
}

export const UpdateTransitDetails = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.put(`${API.corebaseUrl}${API.updateTransitDetails}`, payload, {
            headers: headers,
        }).then((response) => {
            if (response.data.code === 200) {
                dispatch(updateTransitDetailsSuccess(response.data.data))
                let toastMessage = 'UPDATE SUCCESSFULL'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })         }
            } else {
                dispatch(updateTransitDetailsFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })         }
            }
        })
    } catch (error) {
        dispatch(updateTransitDetailsFailed())

        let toastMessage = 'COULD NOT UPDATE TRANSIT DATA AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) }
    }
}

export const GetAdditionalData = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
        Axios.get(`${API.corebaseUrl}${API.fetchAdditionalData}${payload}`, {
            headers: headers,
        }, payload).then((response) => {
            if (response.data.code === 200) {
                dispatch(getAdditionalDataSuccess(response.data.data))
            } else {
                dispatch(getAdditionalDataFailed(response.data.data))
                let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })         }
            }
        })
    } catch (error) {
        dispatch(getAdditionalDataFailed())

        let toastMessage = 'COULD NOT GET TRANSIT DETAILS AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) }
    }
}