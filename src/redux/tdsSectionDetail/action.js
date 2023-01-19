import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import  Router  from 'next/router';
import * as types from './actionType';
import { setIsLoading, setNotLoading } from '../Loaders/action'



// ******** Tds section Master Edit ******** //

function editTdsSectionSuccess(payload) {
  return {
    type: types.EDIT_TDS_SECTION_MASTER_SUCCESS,
    payload,
  };
}

function editTdsSectionFailed(payload = {}) {
  return {
    type: types.EDIT_TDS_SECTION_MASTER_FAILED,
    payload,
  };
}


export const editTDSSectionMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.put(`${API.corebaseUrl}${API.editTdsSectionMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(editTdsSectionSuccess(response.data.data));
      let toastMessage = 'PORT EDITED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      Router.reload();
      dispatch(setNotLoading());
    } else {
      dispatch(editTdsSectionFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(editTdsSectionFailed());

    let toastMessage = 'COULD NOT EDIT PORT DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};