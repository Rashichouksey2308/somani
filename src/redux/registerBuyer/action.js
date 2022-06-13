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
    type: types.REGISTER_BUYER_SUCCESS,
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
    type: types.GET_BUYER_SUCCESSFULL,
    payload,
  };
}

function getBuyerFailed() {
  return {
    type: types.GET_BUYER_FAILED,
  };
}

function getAllBuyer() {
  return {
    type: types.GET_ALL_BUYER,
  };
}

function getAllBuyerSuccess(payload) {
  return {
    type: types.GET_ALL_BUYER_SUCCESSFULL,
    payload,
  };
}

function getAllBuyerFailed() {
  return {
    type: types.GET_ALL_BUYER_FAILED,
  };
}

function getGst() {
  return {
    type: types.GET_GST,
  };
}

function getGstSuccess(payload) {
  return {
    type: types.GET_GST_SUCCESS,
    payload,
  };
}

function getGstFailed() {
  return {
    type: types.GET_GST_FAILED,
  };
}

export const CreateBuyer = (payload) => async (dispatch, getState, api) => {
  dispatch(createBuyer());
  try {
   Axios.post(`${API.corebaseUrl}${API.registerCompany}`, payload).then((response)=>{
    // console.log(payload, "in action2")
    if (response.data.code === 200) {
      dispatch(createBuyerSuccess(response.data.data));
      // payload.history.goBack()
      
    } else {
      // console.log(response.data,"DD")
      dispatch(createBuyerFailed(response.data.data));
    
    }
  })
  } catch (error) {
    console.log(error, "API FAILED")
    dispatch(createBuyerFailed());

  }
};

export const UpdateBuyer = (payload) => async (dispatch, getState, api) => {
  // dispatch(updateBuyer()
  try {
    Axios.put(`${API.corebaseUrl}${API.updateBuyer}`, payload).then((response) => {
    if (response.data.code === 200) {
      dispatch(updateBuyerSuccess(response.data));
      
    } else {
      dispatch(updateBuyerFailed(response.data));
      console.log("UPDATE REQUEST FAILED")
    }
    })
  } catch (error) {
    dispatch(updateBuyerFailed());
    console.log(error, "UPDATE API FAILED")
  }
};

export const settingSelectBuyer = (payload) => {
  return {
    type: types.SET_BUYER,
    payload,
  };
};

export const settingDocument = (payload) => {
  // console.log("reached here")
  return {
    type: types.SET_DOCUMENT,
    payload,
  };
};

export const GetBuyer = (company) => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  // console.log(company, "in getbuyer1")
  try {
    // console.log("in getbuyer")
    Axios.get(`${API.corebaseUrl}${API.getBuyerOrder}?company=${company}`).then((response)=>{
    if (response.data.code === 200) {
      dispatch(getBuyerSuccess(response.data.data));
      // toast.error("Buyers fetched")
    } else {
      dispatch(getBuyerFailed(response.data.data));
    
    }
  })
  } catch (error) {
    dispatch(getBuyerFailed());
    
  }
};

export const GetAllBuyer = () => async (dispatch, getState, api) => {
  
  try {
    
    Axios.get(`${API.corebaseUrl}${API.getBuyers}`).then((response)=>{
    if (response.data.code === 200) {
      dispatch(getAllBuyerSuccess(response.data));
      // toast.error("Buyers fetched")
    } else {
      dispatch(getAllBuyerFailed(response.data));
      console.log( "GET ALL BUYER FAILED")
    
    }
  })
  } catch (error) {
    dispatch(getAllBuyerFailed());
    console.log(error, "GET ALL BUYER API FAILED")
    
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

export const GetGst = (payload) => async (dispatch, getState, api) => {
  // dispatch(createBuyer())
  try {
    // console.log(payload,"in getbuyer")
    Axios.post(`${API.baseUrl}${API.getGst}`,{pan:payload}).then((response)=>{
    if (response.data.code === 200) {
      dispatch(getGstSuccess(response.data));
      // toast.error("Buyers fetched")
    } else {
      dispatch(getGstFailed(response.data));
      console.log("GET GST ERROR")
    }
  })
  } catch (error) {
    dispatch(getGstFailed());
    console.log("GET GST API FAILED")
  }
};
