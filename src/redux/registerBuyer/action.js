import * as types from './actionType';
import API from '../../utils/endpoints';
import Axios from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast } from '@/utils/helpers/global';

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

function getAllUpdatedBuyer() {
  return {
    type: types.GET_ALL_UPDATED_BUYER,
  };
}

function getAllUpdatedBuyerSuccess(payload) {
  return {
    type: types.GET_ALL_UPDATED_BUYER_SUCCESSFULL,
    payload,
  };
}

function getAllUpdatedBuyerFailed() {
  return {
    type: types.GET_ALL_UPDATED_BUYER_FAILED,
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
  await  Axios.post(`${API.corebaseUrl}${API.registerCompany}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createBuyerSuccess());

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
        dispatch(createBuyerFailed());
       handleErrorToast(response.data.message)
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createBuyerFailed());
   handleErrorToast(error.message)
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
      dispatch(updateBuyerSuccess());

      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateBuyerFailed());

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
   await Axios.get(`${API.corebaseUrl}${API.getBuyerOrder}?company=${payload.companyId}&order=${payload.orderId}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getBuyerSuccess(response.data.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getBuyerFailed());
     handleErrorToast('Could not fetch Company Details')
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
    await Axios.get(`${API.corebaseUrl}${API.getBuyers}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllBuyerSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllBuyerFailed());
        handleErrorToast('Could not fetch Company Details')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllBuyerFailed());
    dispatch(setNotLoading());
  }
};

export const GetAllUpdatedBuyer = (payload) => async (dispatch, getState, api) => {
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
    dispatch(getAllUpdatedBuyer());
    Axios.get(`${API.corebaseUrl}${API.getUpdatedBuyers}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllUpdatedBuyerSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllUpdatedBuyerFailed(response.data));
        const toastMessage = 'Could not fetch Company Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllUpdatedBuyerFailed());

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
      dispatch(getAllOrderFailed());
     handleErrorToast('Getting orders failed')
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
   await Axios.get(`${API.corebaseUrl}${API.getBuyers}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getOrderSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getOrderFailed());
       handleErrorToast('Getting Order List Failed')
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
      dispatch(deleteBuyerSuccess());

      payload.history.go(0);
      toast.error('Buyer Deleted Succesfully');
      dispatch(setNotLoading());
    } else {
      dispatch(deleteBuyerFailed());
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
   await Axios.post(`${API.userbaseUrl}${API.getGst}`, { pan: payload }, { headers: headers }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getGstSuccess(response.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getGstFailed());
        handleErrorToast('Could not fetch Gst at this moment')
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
   await Axios.post(`${API.corebaseUrl}${API.uploadDocuments}`, payload, {
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

// leads search filter controller

function getCommodityFilter() {
  return {
    type: types.GET_COMMODITY_FILTERS,
  };
}

function getCommodityFilterSuccess(payload) {
  return {
    type: types.GET_COMMODITY_FILTERS_SUCCESS,
    payload,
  };
}

function getCommodityFilterFailed() {
  return {
    type: types.GET_COMMODITY_FILTERS_FAILED,
  };
}
export const GetCommodityFilters = () => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getCommodityFilters}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCommodityFilterSuccess(response?.data?.data.commodities));
        dispatch(setNotLoading());
      } else {
        dispatch(getCommodityFilterFailed(response?.data?.data.commodities));
        const toastMessage = 'Could not fetch Order Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCommodityFilterFailed());
    dispatch(setNotLoading());
  }
};

function getCompanyFilter() {
  return {
    type: types.GET_COMPANY_FILTERS,
  };
}

function getCompanyFilterSuccess(payload) {
  return {
    type: types.GET_COMPANY_FILTERS_SUCCESS,
    payload,
  };
}

function getCompanyFilterFailed() {
  return {
    type: types.GET_COMPANY_FILTERS_FAILED,
  };
}
export const GetCompanyFilters = () => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getCompanyFilters}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCompanyFilterSuccess(response.data.data.companies));
        dispatch(setNotLoading());
      } else {
        dispatch(getCompanyFilterFailed(response.data.data.companies));
        const toastMessage = 'Could not fetch Order Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCompanyFilterFailed());
    dispatch(setNotLoading());
  }
};

function getStatusFilter() {
  return {
    type: types.GET_STATUS_FILTERS,
  };
}

function getStatusFilterSuccess(payload) {
  return {
    type: types.GET_STATUS_FILTERS_SUCCESS,
    payload,
  };
}

function getStatusFilterFailed() {
  return {
    type: types.GET_STATUS_FILTERS_FAILED,
  };
}
export const GetStatusFilters = () => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getStatusFilters}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getStatusFilterSuccess(response.data.data.status));
        dispatch(setNotLoading());
      } else {
        dispatch(getStatusFilterFailed(response.data.data.status));
        const toastMessage = 'Could not fetch Order Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getStatusFilterFailed());
    dispatch(setNotLoading());
  }
};
