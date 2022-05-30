import * as types from "./actionType";
import API from "../../utils/endpoints";
import Axios from "axios";

function createBuyer() {
  return {
    type: types.REGISTER_BUYER,
  };
}

function createBuyerSuccess() {
  return {
    type: types.REGISTER_BUYER_SUCCESSFULL,
  };
}

function createBuyerFailed() {
  return {
    type: types.REGISTER_BUYER_FAILED,
  };
}
function updateBuyer() {
  return {
    type: types.UPDATE_BUYER,
  };
}

function updateBuyerSuccess() {
  return {
    type: types.UPDATE_BUYER_SUCCESSFULL,
  };
}

function updateBuyerFailed() {
  return {
    type: types.UPDATE_BUYER_FAILED,
  };
}
function deleteBuyer() {
  return {
    type: types.DELETE_BUYER,
  };
}

function deleteBuyerSuccess() {
  return {
    type: types.DELETE_BUYER_SUCCESSFULL,
  };
}

function deleteBuyerFailed() {
  return {
    type: types.DELETE_BUYER_FAILED,
  };
}
function getBuyer() {
  return {
    type: types.GET_BUYER,
  };
}

function getBuyerSuccess(payload) {
  return {
    type: types.GET_Buyer_SUCCESSFULL,
    payload,
  };
}

function getBuyerFailed() {
  return {
    type: types.GET_Buyer_FAILED,
  };
}

export const CreateBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(createBuyer());
  try {
    const response = await Axios.post(`${API.baseUrl}${API.registerCompany}`, payload);
    if (response.data.code === 200) {
      dispatch(createBuyerSuccess(response.data.data));
      // payload.history.goBack()
      
    } else {
      // console.log(response.data,"DD")
      dispatch(createBuyerFailed(response.data.data));
    
    }
  } catch (error) {
    dispatch(createBuyerFailed());

  }
};

export const UpdateBuyer = (payload) => async (dispatch, getState, api) => {
  // dispatch(updateBuyer()
  try {
    const response = await api.put(API.createBuyer, payload);
    if (response.data.code === 200) {
      dispatch(updateBuyerSuccess(response.data.data));
      payload.history.go(0);
      
    } else {
      dispatch(updateBuyerFailed(response.data.data));
    
    }
  } catch (error) {
    dispatch(updateBuyerFailed());
  
  }
};

export const settingSelectBuyer = (payload) => {
  return {
    type: types.SET_Buyer,
    payload,
  };
};

export const GetBuyer = () => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  try {
    const response = await api.get(
      `${API.createBuyer}`
    );
    if (response.data.code === 200) {
      dispatch(getBuyerSuccess(response.data.data));
      // toast.error("Buyers fetched")
    } else {
      dispatch(getBuyerFailed(response.data.data));
    
    }
  } catch (error) {
    dispatch(getBuyerFailed());
    
  }
};
export const DeleteBuyer = (payload) => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  try {
    const response = await api.delete(
      `${API.createBuyer}?BuyerId=${payload.BuyerId}`
    );

    if (response.data.code === 200) {
      dispatch(deleteBuyerSuccess(response.data.data));
      // window.location.reload(false)
      payload.history.go(0);
      toast.error("Buyer Deleted Succesfully");
    } else {
      dispatch(deleteBuyerFailed(response.data.data));
      toast.error("Buyer could not be deleted");
    }
  } catch (error) {
    dispatch(deleteBuyerFailed());
    toast.error("Buyer could not be deleted");
  }
};
