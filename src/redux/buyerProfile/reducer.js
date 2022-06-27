import * as types from "./actionType";

const initialState = {
    updatingCredit: false,
    updatingCreditResponse: null
} 

function OrderReducer(state=initialState, action) {

    switch(action.type){

        case types.UPDATE_CREDIT:
            return {
              ...state,
              updatingCrdit: true,
              updatedCreditResponse: null,
            }
          case types.UPDATE_CREDIT_SUCCESSFULL:
            return {
              ...state,
              updatingCredit: false,
              updatedCreditResponse: action.payload,
            }
          case types.UPDATE_CREDIT_FAILED:
            return {
              ...state,
              updatingCredit: false,
              updatedCreditResponse: null,
            }
          
          default: 
            return state  
    }

}

export default OrderReducer