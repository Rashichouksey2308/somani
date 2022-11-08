<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

export const showSidebar = (payload) => {
  return {
    type: types.SHOW_SIDEBAR,
<<<<<<< Updated upstream
    payload,
  };
};
export const hideSidebar = () => {
  return {
    type: types.HIDE_SIDEBAR,
  };
};
=======
    payload
  }
}
export const hideSidebar = () => {
  return {
    type: types.HIDE_SIDEBAR
  }
}
>>>>>>> Stashed changes

export const isMobile = (payload) => {
  return {
    type: types.IS_MOBILE,
<<<<<<< Updated upstream
    payload,
  };
};
=======
    payload
  }
}
>>>>>>> Stashed changes

export const setMobile = (value) => {
  return {
    type: types.SET_MOBILE,
<<<<<<< Updated upstream
    value,
  };
};

export const settingMobile = (value) => async (dispatch, getState, api) => {
  dispatch(setMobile(value));
};
=======
    value
  }
}

export const settingMobile = (value) => async (dispatch, getState, api) => {
  dispatch(setMobile(value))
}
>>>>>>> Stashed changes
