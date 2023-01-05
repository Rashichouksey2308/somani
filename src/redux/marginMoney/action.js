import * as types from './actionType';
import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import router from 'next/router';
import { settingSidebar } from '../breadcrumb/action';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

function getAllMarginMoney() {
  return {
    type: types.GET_ALL_MARGINMONEY,
  };
}

function getAllMarginMoneySuccess(payload) {
  return {
    type: types.GET_ALL_MARGINMONEY_SUCCESSFULL,
    payload,
  };
}

function getAllMarginMoneyFailed() {
  return {
    type: types.GET_ALL_MARGINMONEY_FAILED,
  };
}

function getMarginMoney() {
  return {
    type: types.GET_MARGINMONEY,
  };
}

function getMarginMoneySuccess(payload) {
  return {
    type: types.GET_MARGINMONEY_SUCCESSFULL,
    payload,
  };
}

function getMarginMoneyFailed() {
  return {
    type: types.GET_MARGINMONEY_FAILED,
  };
}

function updatingMarginMoney() {
  return {
    type: types.UPDATE_MARGINMONEY,
  };
}

function updateMarginMoneySuccess(payload) {
  return {
    type: types.UPDATE_MARGINMONEY_SUCCESSFULL,
    payload,
  };
}

function updateMarginMoneyFailed() {
  return {
    type: types.UPDATE_MARGINMONEY_FAILED,
  };
}

function updatingRevisedMarginMoney() {
  return {
    type: types.UPDATE_MARGINMONEY_REVISED,
  };
}

function updatingRevisedMarginMoneySuccess(payload) {
  return {
    type: types.UPDATE_MARGINMONEY_REVISED_SUCCESSFULL,
    payload,
  };
}

function updatingRevisedMarginMoneyFailed() {
  return {
    type: types.UPDATE_MARGINMONEY_REVISED_FAILED,
  };
}

export const GetAllMarginMoney = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
   await Axios.get(`${API.corebaseUrl}${API.getMarginMoney}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllMarginMoneySuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllMarginMoneyFailed());
       handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllMarginMoneyFailed());
    dispatch(setNotLoading());
    handleErrorToast('GET MARGIN MONEY API FAILED')
  }
};

export const GetMarginMoney = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
   await Axios.get(`${API.corebaseUrl}${API.getMarginMoney}?order=${payload.orderId}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMarginMoneySuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getMarginMoneyFailed(response.data.data));
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMarginMoneyFailed());
    handleErrorToast('GET MARGIN MONEY API FAILED')
    dispatch(setNotLoading());
  }
};

export const UpdateMarginMoney = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
   await Axios.put(`${API.corebaseUrl}${API.updateMarginMoney}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateMarginMoneySuccess(response.data));
       handleSuccessToast('SAVED SUCCESSFULLY')
        let id = sessionStorage.getItem('marginId');
        dispatch(GetMarginMoney({ orderId: id }));
        dispatch(setNotLoading());
        dispatch(settingSidebar('Agreement & LC Module', 'Generic', 'Generic', '2'));
        // router.push('/generic/generic-list')
      } else {
        dispatch(updateMarginMoneyFailed(response.data));
       handleErrorToast('UPDATE REQUEST FAILED')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateMarginMoneyFailed());
   handleErrorToast('UPDATE MARGIN MONEY REQUEST FAILED')
    dispatch(setNotLoading());
  }
};

export const RevisedMarginMoney = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
   await Axios.put(`${API.corebaseUrl}${API.reviseMarginMoney}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updatingRevisedMarginMoneySuccess(response.data));
        handleSuccessToast('SAVED SUCCESSFULLY')
        const id = sessionStorage.getItem('marginId');

        dispatch(GetMarginMoney({ orderId: id }));
        dispatch(setNotLoading());
      } else {
        dispatch(updatingRevisedMarginMoneyFailed(response.data));
        handleErrorToast('UPDATE REQUEST FAILED')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updatingRevisedMarginMoneyFailed());
    handleErrorToast('REVISE MARGIN MONEY REQUEST FAILED')
    dispatch(setNotLoading());
  }
};
