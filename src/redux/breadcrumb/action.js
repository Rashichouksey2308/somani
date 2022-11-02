import * as types from './actionType';

export const getBreadcrumbValues = (payload) => (dispatch, getState) => {
  const prevValues = getState().Breadcrumb.breadCrumbData;

  dispatch({
    type: types.GET_BREADCRUMB_DATA,
    payload: {
      ...prevValues,
      ...payload,
    },
  });
};

export function clearBreadcrumbValues(payload) {
  return {
    type: types.CLEAR_BREADCRUMB_DATA,
    payload,
  };
}

export function setCurrency(payload) {
  return {
    type: types.SET_CURRENCY,
    payload,
  };
}

export function getCurrency(payload) {
  return {
    type: types.GET_CURRENCY,
    payload,
  };
}

export function getUnit(payload) {
  return {
    type: types.GET_UNIT,
    payload,
  };
}

export function setUnit(payload) {
  return {
    type: types.SET_UNIT,
    payload,
  };
}

export function setSidebar(payload) {
  return {
    type: types.SIDEBAR,
    payload,
  };
}

export const settingCurrency = (payload) => (dispatch, getState) => {
  localStorage.setItem('currency', payload);

  dispatch(setCurrency(payload));
};

export const settingUnit = (payload) => (dispatch, getState) => {
  localStorage.setItem('unit', payload);

  dispatch(setUnit(payload));
};
export const gettingCurrency = (payload) => (dispatch, getState) => {
  dispatch(getCurrency());
  return (
    localStorage.getItem('currency') ||
    getState().Breadcrumb.breadCrumbData.currency
  );
};

export const gettingUnit = (payload) => (dispatch, getState) => {
  dispatch(getUnit());
  return (
    localStorage.getItem('unit') || getState().Breadcrumb.breadCrumbData.unit
  );
};

export const settingSidebar =
  (sideBarMain, subsideBarMain, loadedSubPage, openList) =>
  (dispatch, getState) => {
    sessionStorage.setItem('sideBarMain', sideBarMain);
    sessionStorage.setItem('subsideBarMain', subsideBarMain);
    sessionStorage.setItem('loadedSubPage', loadedSubPage);
    sessionStorage.setItem('openList', openList);

    dispatch(setSidebar({ sideBarMain, subsideBarMain }));
  };
