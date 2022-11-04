import * as types from './actionType';
import API from '../../utils/endpoints';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function createSupplier() {
  return {
    type: types.CREATE_SUPPLIER,
  };
}

function createSupplierSuccess(payload) {
  return {
    type: types.CREATE_SUPPLIER_SUCCESSFULL,
    payload,
  };
}

function createSupplierFailed() {
  return {
    type: types.CREATE_SUPPLIER_FAILED,
  };
}

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

export function ClearSupplier() {
  return {
    type: types.CLEAR_SUPPLIER,
  };
}

function uploadSupplierDoc(payload) {
  return {
    type: types.UPLOAD_SUPPLIER_DOC,
    payload,
  };
}

function uploadSupplierDocSuccess(payload) {
  return {
    type: types.UPLOAD_SUPPLIER_DOC_SUCCESSFULL,
    payload,
  };
}

function uploadSupplierDocFailed() {
  return {
    type: types.UPLOAD_SUPPLIER_DOC_FAILED,
  };
}

function deleteSupplierDoc(payload) {
  return {
    type: types.DELETE_SUPPLIER_DOC,
    payload,
  };
}

function deleteSupplierDocSuccess(payload) {
  return {
    type: types.DELETE_SUPPLIER_DOC_SUCCESSFULL,
    payload,
  };
}

function deleteSupplierDocFailed() {
  return {
    type: types.DELETE_SUPPLIER_DOC_FAILED,
  };
}

function searchSupplier() {
  return {
    type: types.SEARCH_SUPPLIER,
  };
}

function searchSupplierSuccess(payload) {
  return {
    type: types.SEARCH_SUPPLIER_SUCCESSFULL,
    payload,
  };
}

function searchSupplierFailed() {
  return {
    type: types.SEARCH_SUPPLIER_FAILED,
  };
}


export const CreateSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(createSupplier());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.post(`${API.corebaseUrl}${API.supplier}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        const toastMessage = 'supplier details added successfully';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(createSupplierSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(createSupplierFailed(response.data));
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(createSupplierFailed());
    dispatch(setNotLoading());
  }
};

export const UpdateSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(updateSupplier());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.put(`${API.corebaseUrl}${API.supplier}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        const toastMessage = 'supplier details updated successfully';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(updateSupplierSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(updateSupplierFailed(response.data));
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(updateSupplierFailed());
    dispatch(setNotLoading());
  }
};

export const GetSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(getSupplier());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.get(`${API.corebaseUrl}${API.supplier}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getSupplierSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getSupplierFailed(response.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getSupplierFailed());
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const GetAllSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(getAllSupplier());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.get(`${API.corebaseUrl}${API.supplier}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllSupplierSuccess(response.data.data));
        dispatch(setNotLoading());

      } else {
        dispatch(getAllSupplierFailed(response.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllSupplierFailed());
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const UploadSupplierDoc = (payload) => async (dispatch, getState, api) => {
  // dispatch(setIsLoading());
  // dispatch(uploadSupplierDoc());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.post(`${API.corebaseUrl}${API.SupplierUploadDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        // dispatch(uploadSupplierDocSuccess(response.data.data));
        // dispatch(setNotLoading());
        // const toastMessage = 'document uploaded successfully';
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        // }
        return response
      } else {
        dispatch(uploadSupplierDocFailed(response.data));
        // const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        // }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(uploadSupplierDocFailed());
    // const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
    // if (!toast.isActive(toastMessage.toUpperCase())) {
    //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    // }
    dispatch(setNotLoading());
  }
};

export const DeleteSupplierDoc = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  dispatch(deleteSupplierDoc());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    Axios.put(`${API.corebaseUrl}${API.supplierDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(deleteSupplierDocSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(deleteSupplierDocFailed(response.data));
        // const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        // }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(deleteSupplierDocFailed());
    // const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THE MOMENT';
    // if (!toast.isActive(toastMessage.toUpperCase())) {
    //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    // }
    dispatch(setNotLoading());
  }
};

export const SearchSupplier = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  let headers = { authorization: jwtAccessToken };
  try {
    dispatch(searchSupplier());
    Axios.get(`${API.corebaseUrl}${API.searchSupplier}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(searchSupplierSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(searchSupplierFailed(response.data.data));
        const toastMessage = 'Search Supplier request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(searchSupplierFailed());
    const toastMessage = 'Search Supplier request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
