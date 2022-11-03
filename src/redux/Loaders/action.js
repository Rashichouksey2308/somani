import * as types from './actionType';

export function isLoading(payload) {
  return {
    type: types.IS_LOADING,
    payload,
  };
}

export function notLoading(payload) {
  return {
    type: types.NOT_LOADING,
    payload,
  };
}

export const setIsLoading = (payload) => (dispatch, getState) => {
  dispatch(isLoading(true));
};
export const setNotLoading = (payload) => (dispatch, getState) => {
  dispatch(isLoading(false));
};
