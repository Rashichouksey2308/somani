import Axios from 'axios';
import API from '../../utils/endpoints';
import * as types from './actionType';

import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';

const errorMessage = {
  status: 400,
  message: 'Something went wrong',
};

function getOrderData(payload) {
  return {
    type: types.GET_ORDER_DATA,
    payload,
  };
}

function getLeadData(payload) {
  return {
    type: types.GET_LEAD_DATA,
    payload,
  };
}

function getCommodityData(payload) {
  return {
    type: types.GET_COMMODITY_DATA,
    payload,
  };
}

function getOriginData(payload) {
  return {
    type: types.GET_ORIGIN_DATA,
    payload,
  };
}

function getCustomerData(payload) {
  return {
    type: types.GET_CUSTOMER_DATA,
    payload,
  };
}

function getExposureData(payload) {
  return {
    type: types.GET_EXPOSURE_DATA,
    payload,
  };
}

export const getAnalystData = () => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    const cookie = Cookies.get('SOMANI');

    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

    const orderSummary = await Axios.get(`${API.corebaseUrl}${API.orderSummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    });
    const leadSummary = await Axios.get(`${API.corebaseUrl}${API.leadSummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    });
    const commoditySummary = await Axios.get(`${API.corebaseUrl}${API.commoditySummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    });
    const originSummary = await Axios.get(`${API.corebaseUrl}${API.originSummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    });
    const customerSummary = await Axios.get(`${API.corebaseUrl}${API.customerSummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    });
    const exposureSummary = await Axios.get(`${API.corebaseUrl}${API.exposureSummary}`, {
      headers: {
        authorization: jwtAccessToken,
      },
    });

    if (orderSummary.data.code == 200) {
      dispatch(getOrderData(orderSummary.data.data.data));
    }
    if (leadSummary.data.code == 200) {
      dispatch(getLeadData(leadSummary.data.data.data));
    }
    if (commoditySummary.data.code == 200) {
      dispatch(getCommodityData(commoditySummary.data.data.data));
    }
    if (originSummary.data.code == 200) {
      dispatch(
        getOriginData({
          payload: originSummary.data.data.data,
          total: originSummary.data.data.totalOrderValue,
        }),
      );
    }
    if (customerSummary.data.code == 200) {
      dispatch(
        getCustomerData({
          payload: customerSummary.data.data.data,
          total: customerSummary.data.data.totalOrderValue,
        }),
      );
    }
    if (exposureSummary.data.code == 200) {
      dispatch(getExposureData(exposureSummary.data.data.data));
    }
    dispatch(setNotLoading());
  } catch (error) {
    dispatch(setNotLoading());
  }
};
