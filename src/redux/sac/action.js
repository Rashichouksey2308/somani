import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import  Router  from 'next/router';
import * as types from './actionType';
import { setIsLoading, setNotLoading } from '../Loaders/action'



// ******** SAC Master Edit ******** //

function editSACSuccess(payload) {
  return {
    type: types.EDIT_SAC_MASTER_SUCCESS,
    payload,
  };
}

function editSACFailed(payload = {}) {
  return {
    type: types.EDIT_SAC_MASTER_FAILED,
    payload,
  };
}


export const editSACMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.put(`${API.corebaseUrl}${API.editSACMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(editSACSuccess(response.data.data));
      let toastMessage = 'PORT EDITED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      Router.reload();
      dispatch(setNotLoading());
    } else {
      dispatch(editSACFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(editSACFailed());

    let toastMessage = 'COULD NOT EDIT PORT DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};