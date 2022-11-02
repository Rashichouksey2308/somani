import * as types from './actionType';
import API from '../../utils/endpoints';
import Axios from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';
function updateSupplier() {
  return {
    type: types.UPDATE_SUPPLIER,
  };
}

function updateSupplierSuccess(payload) {
  return {
    type: types.UPDATE_SUPPLIER_SUCCESSFULL,
    payload,
  };
}

function updateSupplierFailed() {
  return {
    type: types.UPDATE_SUPPLIER_FAILED,
  };
}

function getSupplier(payload) {
  return {
    type: types.GET_SUPPLIER,
    payload,
  };
}

function getSupplierSuccess(payload) {
  return {
    type: types.GET_SUPPLIER_SUCCESSFULL,
    payload,
  };
}

function getSupplierFailed() {
  return {
    type: types.GET_SUPPLIER_FAILED,
  };
}

function getAllSupplier(payload) {
  return {
    type: types.GET_ALL_SUPPLIER,
    payload,
  };
}

function getAllSupplierSuccess(payload) {
  console.log(payload,'supplierResponse')
  return {
    type: types.GET_ALL_SUPPLIER_SUCCESSFULL,
    payload,
  };
}

function getAllSupplierFailed() {
  return {
    type: types.GET_ALL_SUPPLIER_FAILED,
    
  };
}

export const UpdateSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(updateSupplier());
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.post(`${API.corebaseUrl}${API.supplier}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateSupplierSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(updateSupplierFailed(response.data));
        console.log('UPDATE REQUEST FAILED');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateSupplierFailed());
    console.log(error, 'UPDATE API FAILED');
    dispatch(setNotLoading());
  }
};

export const GetSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(getSupplier());
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.get(`${API.corebaseUrl}${API.supplier}${payload ? payload : ''}`, 
    {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getSupplierSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getSupplierFailed(response.data));
        console.log('fetch REQUEST FAILED');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getSupplierFailed());
    console.log(error, 'fetch API FAILED');
    dispatch(setNotLoading());
  }
};
export const GetAllSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(getAllSupplier());
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.get(`${API.corebaseUrl}${API.supplier}${payload ? payload : ''}`, 
    {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllSupplierSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllSupplierFailed(response.data));
        console.log('fetch REQUEST FAILED');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllSupplierFailed());
    console.log(error, 'fetch API FAILED');
    dispatch(setNotLoading());
  }
};

