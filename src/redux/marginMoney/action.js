import * as types from './actionType';
import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import router from 'next/router';
import { settingSidebar } from '../breadcrumb/action';
import { setIsLoading, setNotLoading } from '../Loaders/action';

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
    Axios.get(`${API.corebaseUrl}${API.getMarginMoney}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllMarginMoneySuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllMarginMoneyFailed(response.data.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllMarginMoneyFailed());
    dispatch(setNotLoading());
    const toastMessage = 'GET MARGIN MONEY API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
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
    Axios.get(`${API.corebaseUrl}${API.getMarginMoney}?order=${payload.orderId}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMarginMoneySuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getMarginMoneyFailed(response.data.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMarginMoneyFailed());

    const toastMessage = 'GET MARGIN MONEY API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
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
    Axios.put(`${API.corebaseUrl}${API.updateMarginMoney}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateMarginMoneySuccess(response.data));
        const toastMessage = 'SAVED SUCCESSFULLY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), {
            toastId: toastMessage,
          });
        }
        dispatch(setNotLoading());
        dispatch(settingSidebar('Agreement & LC Module', 'Generic', 'Generic', '2'));
        router.push('/generic/generic-list');
      } else {
        dispatch(updateMarginMoneyFailed(response.data));
        const toastMessage = 'UPDATE REQUEST FAILED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateMarginMoneyFailed());
    const toastMessage = 'UPDATE MARGIN MONEY REQUEST FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
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
    Axios.put(`${API.corebaseUrl}${API.reviseMarginMoney}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updatingRevisedMarginMoneySuccess(response.data));
        const toastMessage = 'SAVED SUCCESSFULLY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), {
            toastId: toastMessage,
          });
        }
        const id = sessionStorage.getItem('marginId');

        dispatch(GetMarginMoney({ orderId: id }));
        dispatch(setNotLoading());
   
      } else {
        dispatch(updatingRevisedMarginMoneyFailed(response.data));
        const toastMessage = 'UPDATE REQUEST FAILED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updatingRevisedMarginMoneyFailed());
    const toastMessage = 'REVISE MARGIN MONEY REQUEST FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
