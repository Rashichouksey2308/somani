import * as types from './actionType';
import API from '../../utils/endpoints';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function getCommodityDetailsSuccess(payload) {
  return {
    type: types.GET_COMMODITY_SUCCESSFULL,
    payload,
  };
}

function getCommodityDetailsFailed(payload = {}) {
  return {
    type: types.GET_COMMODITY_FAILED,
    payload,
  };
}

function updateCommodityRemarkSuccess(payload) {
  return {
    type: types.UPDATE_COMMODITY_SUCCESSFULL,
    payload,
  };
}

function updateCommodityRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_COMMODITY_FAILED,
    payload,
  };
}

function getCommodityPickupRecordsSuccess(payload) {
  return {
    type: types.GET_COMMODITY_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getCommodityPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_COMMODITY_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function updateInspectionRemarkSuccess(payload) {
  return {
    type: types.UPDATE_INSPECTION_SUCCESSFULL,
    payload,
  };
}

function updateInspectionRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_INSPECTION_FAILED,
    payload,
  };
}

function getVendorPickupRecordsSuccess(payload) {
  return {
    type: types.GET_VENDOR_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getVendorPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_VENDOR_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getUserSuccess(payload) {
  return {
    type: types.GET_USER_SUCCESSFULL,
    payload,
  };
}

function getUserFailed(payload = {}) {
  return {
    type: types.GET_USER_FAILED,
    payload,
  };
}

function getInspectionSuccess(payload) {
  return {
    type: types.GET_INSPECTION_DETAILS_SUCCESSFULL,
    payload,
  };
}

function getInspectionFailed(payload = {}) {
  return {
    type: types.GET_INSPECTION_DETAILS_FAILED,
    payload,
  };
}

function getInspectionPickupRecordsSuccess(payload) {
  return {
    type: types.GET_INSPECTION_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getInspectionPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_INSPECTION_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getCreditCAMPickupRecordsSuccess(payload) {
  return {
    type: types.GET_CREDIT_CAM_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getCreditCAMPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_CREDIT_CAM_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getTransactionSummaryPickupRecordsSuccess(payload) {
  return {
    type: types.GET_TRANSACTION_SUMMARY_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getTransactionSummaryPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_TRANSACTION_SUMMARY_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getGenericPickupRecordsSuccess(payload) {
  return {
    type: types.GET_GENERICS_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getGenericPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_GENERICS_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getLetterofCreditPickupRecordsSuccess(payload) {
  return {
    type: types.GET_LETTER_OF_CREDIT_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getLetterofCreditPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_LETTER_OF_CREDIT_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getInternalCompanyPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_INTERNAL_COMPANY_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getInternalCompanyPickupRecordsSuccess(payload) {
  return {
    type: types.GET_INTERNAL_COMPANY_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getUserPickupRecordsSuccess(payload) {
  return {
    type: types.GET_USER_PICKUP_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getUserPickupRecordsFailed(payload = {}) {
  return {
    type: types.GET_USER_PICKUP_RECORDS_FAILED,
    payload,
  };
}

function getGoNoGoLogicPickupRecordsSuccess(payload) {
    return {
        type: types.GET_GO_NO_GO_LOGIC_PICKUP_RECORDS_SUCCESSFULL,
        payload,
    };
}

function getGoNoGoLogicPickupRecordsFailed(payload = {}) {
    return {
        type: types.GET_GO_NO_GO_LOGIC_PICKUP_RECORDS_FAILED,
        payload,
    };
}

function getUserMasterDetailsSuccess(payload) {
  return {
    type: types.GET_USER_MASTER_DETAILS_SUCCESSFULL,
    payload,
  };
}

function getUserMasterDetailsFailed(payload = {}) {
  return {
    type: types.GET_USER_MASTER_DETAILS_FAILED,
    payload,
  };
}

function updateUserMasterRemarkSuccess(payload) {
  return {
    type: types.UPDATE_USER_MASTER_REMARK_SUCCESSFULL,
    payload,
  };
}

function updateUserMasterRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_USER_MASTER_REMARK_FAILED,
    payload,
  };
}

function getGoNoGoLogicDetailsSuccess(payload) {
  return {
    type: types.GET_GO_NO_GO_LOGIC_DETAILS_SUCCESSFULL,
    payload,
  };
}

function getGoNoGoLogicDetailsFailed(payload = {}) {
  return {
    type: types.GET_GO_NO_GO_LOGIC_DETAILS_FAILED,
    payload,
  };
}

function updateGoNoGoLogicRemarkSuccess(payload) {
  return {
    type: types.UPDATE_GO_NO_GO_LOGIC_REMARK_SUCCESSFULL,
    payload,
  };
}

function updateGoNoGoLogicRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_GO_NO_GO_LOGIC_REMARK_FAILED,
    payload,
  };
}

function getInternalCompanyDetailsSuccess(payload) {
  return {
    type: types.GET_INTERNAL_COMPANY_DETAILS_SUCCESSFULL,
    payload,
  };
}

function getInternalCompanyDetailsFailed(payload = {}) {
  return {
    type: types.GET_INTERNAL_COMPANY_DETAILS_FAILED,
    payload,
  };
}

function updateInternalCompanyRemarkSuccess(payload) {
  return {
    type: types.UPDATE_INTERNAL_COMPANY_REMARK_SUCCESSFULL,
    payload,
  };
}

function updateInternalCompanyRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_INTERNAL_COMPANY_REMARK_FAILED,
    payload,
  };
}

function getVendorDetailsSuccess(payload) {
  return {
    type: types.GET_VENDOR_DETAILS_SUCCESSFULL,
    payload,
  };
}

function getVendorDetailsFailed(payload = {}) {
  return {
    type: types.GET_VENDOR_DETAILS_FAILED,
    payload,
  };
}

function updateVendorRemarkSuccess(payload) {
  return {
    type: types.UPDATE_VENDOR_REMARK_SUCCESSFULL,
    payload,
  };
}

function updateVendorRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_VENDOR_REMARK_FAILED,
    payload,
  };
}

function getLcModuleDetailsSuccess(payload) {
  return {
    type: types.GET_LC_MODULE_DETAILS_SUCCESSFULL,
    payload,
  };
}

function getLcModuleDetailsFailed(payload = {}) {
  return {
    type: types.GET_LC_MODULE_DETAILS_FAILED,
    payload,
  };
}

function updateLcModuleRemarkSuccess(payload) {
  return {
    type: types.UPDATE_LC_MODULE_REMARK_SUCCESSFULL,
    payload,
  };
}

function updateLcModuleRemarkFailed(payload = {}) {
  return {
    type: types.UPDATE_LC_MODULE_REMARK_FAILED,
    payload,
  };
}

export const GetCommodityDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getCommodityDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCommodityDetailsSuccess(response?.data?.data?.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getCommodityDetailsFailed(response.data.data));
        const toastMessage = 'Could not fetch Commodity Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCommodityDetailsFailed());
    dispatch(setNotLoading());
  }
};

export const GetCommodityPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getCommodityPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        let data = {
          data: response?.data?.data,
          total: response?.data?.total,
        };
        dispatch(getCommodityPickupRecordsSuccess(data));
        dispatch(setNotLoading());
      } else {
        dispatch(getCommodityPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Commodity Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCommodityPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateCommodityRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateCommodityRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateCommodityRemarkSuccess(response.data));

      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateCommodityRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateCommodityRemarkFailed());

    dispatch(setNotLoading());
    return 500;
  }
};

export const GetUserDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getUserDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getUserSuccess(response.data.data[0]));

        dispatch(setNotLoading());
      } else {
        dispatch(getUserFailed(response.data.data));
        const toastMessage = 'Could not fetch User Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getUserFailed());
    dispatch(setNotLoading());
  }
};

export const GetVendorPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getVendorPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        let data = {
          data: response?.data?.data?.data,
          totalCount: response?.data?.data?.total,
        };
        dispatch(getVendorPickupRecordsSuccess(data));
        dispatch(setNotLoading());
      } else {
        dispatch(getVendorPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Vendor Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getVendorPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetInspectionDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getInspectionDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getInspectionSuccess(response?.data?.data?.data[0]));

        dispatch(setNotLoading());
      } else {
        dispatch(getInspectionFailed(response.data.data));
        const toastMessage = 'Could not fetch Inspection Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getInspectionFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateInspectionRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateInspectionRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateInspectionRemarkSuccess(response.data));

      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateInspectionRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateInspectionRemarkFailed());

    dispatch(setNotLoading());
    return 500;
  }
};

export const GetInspectionPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getInspectionPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getInspectionPickupRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getInspectionPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Inspection Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getInspectionPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetCreditCAMPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getCreditCAMPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCreditCAMPickupRecordsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getCreditCAMPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Credit CAM Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCreditCAMPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetTransactionSummaryPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getTransactionSummaryPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getTransactionSummaryPickupRecordsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getTransactionSummaryPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Transaction Summary Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getTransactionSummaryPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetGenericsPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getGenericsPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getGenericPickupRecordsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getGenericPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Generic Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getGenericPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetLetterOfCreditPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getLetterofCreditPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getLetterofCreditPickupRecordsSuccess(response.data.data));
        dispatch(setNotLoading());
    } else {
        dispatch(getLetterofCreditPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Letter of Credit Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getLetterofCreditPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetGoNoGoLogicPickupRecords = (payload) => async (dispatch, getState, api) => {
    dispatch(setIsLoading());

    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [, , jwtAccessToken] = decodedString.split('#');
    const headers = {
        authorization: jwtAccessToken,
        Cache: 'no-cache',
        'Access-Control-Allow-Origin': '*',
    };
    try {
        Axios.get(`${API.corebaseUrl}${API.getGoNoGoLogicPickupRecords}${payload}`, {
            headers: headers,
        }).then((response) => {
            if (response.data.code === 200) {
                dispatch(getGoNoGoLogicPickupRecordsSuccess(response.data.data));
                dispatch(setNotLoading());
            } else {
                dispatch(getGoNoGoLogicPickupRecordsFailed(response.data.data));
                const toastMessage = 'Could not fetch Go No Go Logic Details';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                }
                dispatch(setNotLoading());
            }
        });
    } catch (error) {
        dispatch(getGoNoGoLogicPickupRecordsFailed());
        dispatch(setNotLoading());
    }
};

export const GetInternalCompanyPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getInternalCompanyPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getInternalCompanyPickupRecordsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getInternalCompanyPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Internal Company Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getInternalCompanyPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};
export const GetUserPickupRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getUserPickupRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getUserPickupRecordsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getUserPickupRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch User Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getUserPickupRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetUserMasterDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getUserMasterDetails}${payload}`, {
      headers: headers,
    }, ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getUserMasterDetailsSuccess(response?.data?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getUserMasterDetailsFailed(response.data.data));
        const toastMessage = 'Could not fetch User Master Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getUserMasterDetailsFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateUserMasterRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateUserMasterRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateUserMasterRemarkSuccess(response.data));

      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateUserMasterRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateUserMasterRemarkFailed());

    dispatch(setNotLoading());
    return 500;
  }
};

export const GetGoNoGoLogicDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getGoNoGoLogicDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getGoNoGoLogicDetailsSuccess(response?.data?.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getGoNoGoLogicDetailsFailed(response.data.data));
        const toastMessage = 'Could not fetch Go No Go Logic Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getGoNoGoLogicDetailsFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateGoNoGoLogicRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateGoNoGoLogicRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateGoNoGoLogicRemarkSuccess(response.data));
      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateGoNoGoLogicRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateGoNoGoLogicRemarkFailed());
    dispatch(setNotLoading());
    return 500;
  }
};

export const GetInternalCompanyDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getInternalCompanyDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getInternalCompanyDetailsSuccess(response?.data?.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getInternalCompanyDetailsFailed(response.data.data));
        const toastMessage = 'Could not fetch Internal Company Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getInternalCompanyDetailsFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateInternalCompanyRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateInternalCompanyRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateInternalCompanyRemarkSuccess(response.data));
      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateInternalCompanyRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateInternalCompanyRemarkFailed());
    dispatch(setNotLoading());
    return 500;
  }
};

export const GetVendorDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getVendorDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getVendorDetailsSuccess(response?.data?.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getVendorDetailsFailed(response.data.data));
        const toastMessage = 'Could not fetch Vendor Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getVendorDetailsFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateVendorRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateVendorRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateVendorRemarkSuccess(response.data));
      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateVendorRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateVendorRemarkFailed());
    dispatch(setNotLoading());
    return 500;
  }
};

export const GetLcModuleDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getLcModuleDetails}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getLcModuleDetailsSuccess(response?.data?.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getLcModuleDetailsFailed(response.data.data));
        const toastMessage = 'Could not fetch Lc Module Details';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getLcModuleDetailsFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateLcModuleRemark = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateLcModuleRemark}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updateLcModuleRemarkSuccess(response.data));
      dispatch(setNotLoading());
      return 200;
    } else {
      dispatch(updateLcModuleRemarkFailed(response.data));
      const toastMessage = 'Cannot add remark, something went wrong';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(updateLcModuleRemarkFailed());
    dispatch(setNotLoading());
    return 500;
  }
};