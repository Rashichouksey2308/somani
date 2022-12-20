import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import * as types from './actionType'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function getInternalCompanies () {
  return {
    type: types.GET_INTERNAL_COMPANIES
  }
}

function getInternalCompaniesSuccess (payload) {
  return {
    type: types.GET_INTERNAL_COMPANIES_SUCCESS,
    payload
  }
}

function getInternalCompaniesFailed () {
  return {
    type: types.GET_INTERNAL_COMPANIES_FAILED
  }
}

function getAllInternalCompanies () {
  return {
    type: types.GET_ALL_INTERNAL_COMPANIES
  }
}

function getAllInternalCompaniesSuccess (payload) {
  return {
    type: types.GET_ALL_INTERNAL_COMPANIES_SUCCESS,
    payload
  }
}

function getAllInternalCompaniesFailed () {
  return {
    type: types.GET_ALL_INTERNAL_COMPANIES_FAILED
  }
}

function updateInternalCompanies () {
  return {
    type: types.UPDATE_INTERNAL_COMPANIES
  }
}

function updateInternalCompaniesSuccess (payload) {
  return {
    type: types.UPDATE_INTERNAL_COMPANIES_SUCCESS,
    payload
  }
}

function updateInternalCompaniesFailed () {
  return {
    type: types.UPDATE_INTERNAL_COMPANIES_FAILED
  }
}

function createInternalCompanies () {
  return {
    type: types.CREATE_INTERNAL_COMPANIES
  }
}

function createInternalCompaniesSuccess (payload) {
  return {
    type: types.CREATE_INTERNAL_COMPANIES_SUCCESS,
    payload
  }
}

function createInternalCompaniesFailed () {
  return {
    type: types.CREATE_INTERNAL_COMPANIES_FAILED
  }
}

export const GetAllInternalCompanies = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')



  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.get(`${API.corebaseUrl}${API.getInternalCompanies}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllInternalCompaniesSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getAllInternalCompaniesFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getAllInternalCompaniesFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getAllInternalCompaniesFailed())

    const toastMessage = 'COULD NOT GET INTERNAL COMPANIES AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetInternalCompanies = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.get(`${API.corebaseUrl}${API.getInternalCompanies}${payload || ''}`, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getInternalCompaniesSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getInternalCompaniesFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(getInternalCompaniesFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(getInternalCompaniesFailed())

    const toastMessage = 'COULD NOT GET INTERNAL COMPANIES AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const CreateInternalCompanies = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.post(`${API.corebaseUrl}${API.getInternalCompanies}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(createInternalCompaniesSuccess(response.data.data))

          const toastMessage = 'created  SUCCESSFULLY'

          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          dispatch(setNotLoading())
        } else {
          dispatch(createInternalCompaniesFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(createInternalCompaniesFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(createInternalCompaniesFailed())

    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdateInternalCompanies = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.put(`${API.corebaseUrl}${API.getInternalCompanies}`, payload, {
      headers: headers
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(updateInternalCompaniesSuccess(response.data.data))

          const toastMessage = 'updated  SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          sessionStorage.removeItem('internalCompanyId')
          dispatch(setNotLoading())
        } else {
          dispatch(updateInternalCompaniesFailed())
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
      .catch((error) => {
        dispatch(updateInternalCompaniesFailed())
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      })
  } catch (error) {
    dispatch(updateInternalCompaniesFailed())

    const toastMessage = 'COULD NOT UPDATE INTERNAL COMPANIES AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
