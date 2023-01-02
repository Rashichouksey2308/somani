import * as types from './actionType';
import API from '../../utils/endpoints';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function getCommoditySuccess(payload) {
    return {
        type: types.GET_COMMODITY_SUCCESSFULL,
        payload,
    };
}

function getCommodityFailed(payload = {}) {
    return {
        type: types.GET_COMMODITY_FAILED,
        payload,
    };
}

function updateCommodityRemarkSuccess(payload) {
    return {
        type: types.UPDATE_COMMODITY_SUCCESSFULL,
        payload,
    }
}

function updateCommodityRemarkFailed(payload = {}) {
    return {
        type: types.UPDATE_COMMODITY_FAILED,
        payload
    }
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
    }
}

function updateInspectionRemarkFailed(payload = {}) {
    return {
        type: types.UPDATE_INSPECTION_FAILED,
        payload
    }
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

export const GetCommodity = (payload) => async (dispatch, getState, api) => {
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
                dispatch(getCommoditySuccess(response.data.data[0]));
                dispatch(setNotLoading());
            } else {
                dispatch(getCommodityFailed(response.data.data));
                const toastMessage = 'Could not fetch Commodity Details';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                }
                dispatch(setNotLoading());
            }
        });
    } catch (error) {
        dispatch(getCommodityFailed());
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
                }
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
        const response = await Axios.post(`${API.corebaseUrl}${API.updateCommodityRemark}`, payload, {
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
                }
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