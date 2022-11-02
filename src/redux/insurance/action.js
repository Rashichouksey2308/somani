import * as types from './actionType';
import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function getAllInsurance() {
  return {
    type: types.GET_ALL_INSURANCE,
  };
}

function getAllInsuranceSuccess(payload) {
  return {
    type: types.GET_ALL_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function getAllInsuranceFailed() {
  return {
    type: types.GET_ALL_INSURANCE_FAILED,
  };
}

function createInsurance() {
  return {
    type: types.CREATE_INSURANCE,
  };
}

function createInsuranceSuccess(payload) {
  return {
    type: types.CREATE_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function createInsuranceFailed() {
  return {
    type: types.CREATE_INSURANCE_FAILED,
  };
}

function updatingInsurance() {
  return {
    type: types.UPDATE_INSURANCE,
  };
}

function updateInsuranceSuccess(payload) {
  return {
    type: types.UPDATE_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function updateInsuranceFailed() {
  return {
    type: types.UPDATE_INSURANCE_FAILED,
  };
}

function renewingInsurance() {
  return {
    type: types.RENEW_INSURANCE,
  };
}

function renewInsuranceSuccess(payload) {
  return {
    type: types.RENEW_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function renewInsuranceFailed() {
  return {
    type: types.RENEW_INSURANCE_FAILED,
  };
}

function updateQuotation() {
  return {
    type: types.UPDATE_QUOTATION,
  };
}

function updateQuotationSuccess(payload) {
  return {
    type: types.UPDATE_QUOTATION_SUCCESSFULL,
    payload,
  };
}

function updateQuotationFailed() {
  return {
    type: types.UPDATE_QUOTATION_FAILED,
  };
}

export const GettingAllInsurance =
  (payload) => async (dispatch, getState, api) => {
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
      Axios.get(`${API.corebaseUrl}${API.getInsurance}${payload || ''}`, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllInsuranceSuccess(response.data.data));
          dispatch(setNotLoading());
        } else {
          dispatch(getAllInsuranceFailed(response.data.data));
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          dispatch(setNotLoading());
        }
      });
    } catch (error) {
      dispatch(getAllInsuranceFailed());

      const toastMessage = 'GET INSURANCE API FAILED';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  };

export const CreateInsurance = (payload) => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createInsuranceSuccess(response.data.data));
        const toastMessage = 'INSURANC CREATED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      } else {
        dispatch(createInsuranceFailed(response.data.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createInsuranceFailed());

    const toastMessage = 'COULD NOT CREATE INSURANCE AT THIS TIME';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const UpdateInsurance = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    const response = await Axios.put(
      `${API.corebaseUrl}${API.getInsurance}`,
      payload,
      {
        headers: headers,
      },
    );
    if (response.data.code === 200) {
      dispatch(updateInsuranceSuccess(response.data));
      const toastMessage = 'SAVED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return response.data.code;
      //   router.push('/margin-money')
    } else {
      dispatch(updateInsuranceFailed(response.data));
      const toastMessage = 'UPDATE REQUEST FAILED';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updateInsuranceFailed());
    const toastMessage = 'UPDATE INSURANCE REQUEST FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const RenewInsurance = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.put(`${API.corebaseUrl}${API.renewInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(renewInsuranceSuccess(response.data.data));
        const toastMessage = 'REQUEST SENT SUCCESSFULLY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
        //   router.push('/margin-money')
      } else {
        dispatch(renewInsuranceFailed(response.data.data));
        const toastMessage = 'RENEW REQUEST FAILED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(renewInsuranceFailed());
    const toastMessage = 'RENEW INSURANCE REQUEST FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
export const UpdateQuotation = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    const response = await Axios.put(
      `${API.corebaseUrl}${API.updateQuotation}`,
      payload,
      {
        headers: headers,
      },
    );
    if (response.data.code === 200) {
      dispatch(updateQuotationSuccess(response.data));
      const toastMessage = 'SAVED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return response.data.code;
      //   router.push('/margin-money')
    } else {
      dispatch(updateQuotationFailed(response.data));
      const toastMessage = 'UPDATE REQUEST FAILED';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updateQuotationFailed());
    const toastMessage = 'UPDATE QUOTATION REQUEST FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
