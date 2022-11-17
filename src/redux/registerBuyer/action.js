import * as types from './actionType';
import API from '../../utils/endpoints';
import Axios from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function createBuyer() {
  return {
    type: types.REGISTER_BUYER,
  };
}

function createBuyerSuccess() {
  return {
    type: types.REGISTER_BUYER_SUCCESS,
  };
}

function createBuyerFailed() {
  return {
    type: types.REGISTER_BUYER_FAILED,
  };
}

function updateBuyer() {
  return {
    type: types.UPDATE_BUYER,
  };
}

function updateBuyerSuccess() {
  return {
    type: types.UPDATE_BUYER_SUCCESSFULL,
  };
}

function updateBuyerFailed() {
  return {
    type: types.UPDATE_BUYER_FAILED,
  };
}

function deleteBuyer() {
  return {
    type: types.DELETE_BUYER,
  };
}

function deleteBuyerSuccess() {
  return {
    type: types.DELETE_BUYER_SUCCESSFULL,
  };
}

function deleteBuyerFailed() {
  return {
    type: types.DELETE_BUYER_FAILED,
  };
}

function getBuyer() {
  return {
    type: types.GET_BUYER,
  };
}

function getBuyerSuccess(payload) {
  return {
    type: types.GET_BUYER_SUCCESSFULL,
    payload,
  };
}

function getBuyerFailed() {
  return {
    type: types.GET_BUYER_FAILED,
  };
}
function getOrderLeads() {
  return {
    type: types.GET_ORDER_LEADS,
  };
}
function getOrderLeadsSuccess(payload) {
  return {
    type: types.GET_ORDER_LEADS_SUCCESSFULL,
    payload,
  };
}
function getOrderLeadsFailed() {
  return {
    type: types.GET_ORDER_LEADS_FAILED,
  };
}

function getAllBuyer() {
  return {
    type: types.GET_ALL_BUYER,
  };
}

function getAllBuyerSuccess(payload) {
  return {
    type: types.GET_ALL_BUYER_SUCCESSFULL,
    payload,
  };
}

function getAllBuyerFailed() {
  return {
    type: types.GET_ALL_BUYER_FAILED,
  };
}

function getAllOrder() {
  return {
    type: types.GET_ALL_ORDER,
  };
}

function getAllOrderSuccess(payload) {
  return {
    type: types.GET_ALL_ORDER_SUCCESSFULL,
    payload,
  };
}

function getAllOrderFailed() {
  return {
    type: types.GET_ALL_ORDER_FAILED,
  };
}

function getOrder() {
  return {
    type: types.GET_ORDER,
  };
}

function getOrderSuccess(payload) {
  return {
    type: types.GET_ORDER_SUCCESSFULL,
    payload,
  };
}

function getOrderFailed() {
  return {
    type: types.GET_ORDER_FAILED,
  };
}

function getGst() {
  return {
    type: types.GET_GST,
  };
}

function getGstSuccess(payload) {
  return {
    type: types.GET_GST_SUCCESS,
    payload,
  };
}

function getGstFailed() {
  return {
    type: types.GET_GST_FAILED,
  };
}

/// ///////**********  Image UPload   *********////////////

function uploadingDocument() {
  return { type: types.UPLOADDOCUMENT };
}

function uploadingDocumentSuccess(payload) {
  return {
    type: types.UPLOADDOCUMENT_SUCCESS,
    payload,
  };
}

function uploadingDocumentFailed() {
  return { type: types.UPLOADDOCUMENT_FAILED };
}

function createBuyerRouted() {
  return {
    type: types.REGISTER_BUYER_ROUTED,
  };
}

export const routeNewBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(createBuyerRouted());
};

export const CreateBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(createBuyer());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.post(`${API.corebaseUrl}${API.registerCompany}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createBuyerSuccess(response.data.data));

        const toastMessage = 'Lead Created Successfully';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        sessionStorage.setItem('orderID', response.data.data.form.orderDetails[0]);
        sessionStorage.setItem('company', response.data.data.form._id);
        sessionStorage.setItem('companyID', response.data.data.form._id);
        Router.push(`/review/${response.data.data.form._id}`);

        dispatch(setNotLoading());
      } else {
        dispatch(createBuyerFailed(response.data.data));
        const toastMessage = response.data.message;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createBuyerFailed());
    const toastMessage = error.message;
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const UpdateBuyer = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.post(`${API.corebaseUrl}${API.updateBuyer}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateBuyerSuccess(response.data));

      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateBuyerFailed(response.data));

      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateBuyerFailed());

    dispatch(setNotLoading());
    return 500;
  }
};

export const settingSelectBuyer = (payload) => {
  return {
    type: types.SET_BUYER,
    payload,
  };
};

export const settingDocument = (payload) => {
  return {
    type: types.SET_DOCUMENT,
    payload,
  };
};

export const GetBuyer = (payload) => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getBuyerOrder}?company=${payload.companyId}&order=${payload.orderId}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getBuyerSuccess(response.data.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getBuyerFailed(response.data.data));
        const toastMessage = 'Could not fetch Company Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getBuyerFailed());
    dispatch(setNotLoading());
  }
};
export const GetOrderLeads = () => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getOrderLeads}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getOrderLeadsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getOrderLeadsFailed(response.data.data));
        const toastMessage = 'Could not fetch Order Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getOrderLeadsFailed());
    dispatch(setNotLoading());
  }
};

export const GetAllBuyer = (payload) => async (dispatch, getState, api) => {
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
    dispatch(getAllBuyer());
    Axios.get(`${API.corebaseUrl}${API.getBuyers}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllBuyerSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllBuyerFailed(response.data));
        const toastMessage = 'Could not fetch Company Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllBuyerFailed());

    dispatch(setNotLoading());
  }
};

export const GetAllOrders = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
    const response = await Axios.get(`${API.corebaseUrl}${API.orderDetail}?order=${payload.orderId}`, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(getAllOrderSuccess(response.data.data));

      dispatch(setNotLoading());
    } else {
      dispatch(getAllOrderFailed(response.data.data));
      const toastMessage = 'Getting orders failed';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(getAllOrderFailed());

    dispatch(setNotLoading());
  }
};

export const GetOrders = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  try {
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };

    Axios.get(`${API.corebaseUrl}${API.getBuyers}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getOrderSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getOrderFailed(response.data.data));
        const toastMessage = 'Getting Order List Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getOrderFailed());

    dispatch(setNotLoading());
  }
};

export const DeleteBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  try {
    const response = await api.delete(`${API.createBuyer}?BuyerId=${payload.BuyerId}`);

    if (response.data.code === 200) {
      dispatch(deleteBuyerSuccess(response.data.data));

      payload.history.go(0);
      toast.error('Buyer Deleted Succesfully');
      dispatch(setNotLoading());
    } else {
      dispatch(deleteBuyerFailed(response.data.data));
      toast.error('Buyer could not be deleted');
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(deleteBuyerFailed());
    toast.error('Buyer could not be deleted');
    dispatch(setNotLoading());
  }
};

export const GetGst = (payload) => async (dispatch, getState, api) => {
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
    Axios.post(`${API.userbaseUrl}${API.getGst}`, { pan: payload }, { headers: headers }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getGstSuccess(response.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getGstFailed(response.data));
        const toastMessage = 'Could not fetch Gst at this moment';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getGstFailed());

    dispatch(setNotLoading());
  }
};

export const UploadDocument = (payload) => async (dispatch, getState, api) => {
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
    Axios.post(`${API.corebaseUrl}${API.uploadDocuments}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(uploadingDocumentSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(uploadingDocumentFailed());
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(uploadingDocumentFailed());
    dispatch(setNotLoading());
  }
};
