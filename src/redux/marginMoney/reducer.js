import * as types from "./actionType";

const initialState = {
    gettingMarginMoney: false,
    marginMoneyResponse: [],
    updatingMarginMoney: false,
    updatingMarginMoneyResponse: []
}

function MarginMoneyReducer(state = initialState, action) {

    switch (action.type) {
        
      case types.GET_ALL_MARGINMONEY:
        return {
          ...state,
          gettingMarginMoney: true,
          marginMoneyResponse: []
        }
  
      case types.GET_ALL_MARGINMONEY_SUCCESSFULL:
        return {
          ...state,
          gettingMarginMoney: false,
          marginMoneyResponse: action.payload
        }
      case types.GET_ALL_MARGINMONEY_FAILED:
        return {
          ...state,
          gettingMarginMoney: false,
          marginMoneyResponse: []
        }

      case types.UPDATE_MARGINMONEY:
        return {
          ...state,
          updateMarginMoney: true,
          updatingMarginMoneyResponse: []
        }
  
      case types.UPDATE_MARGINMONEY_SUCCESSFULL:
        return {
          ...state,
          updatingMarginMoney: false,
          updatingMarginMoneyResponse: action.payload
        }
      case types.UPDATE_MARGINMONEY_FAILED:
        return {
          ...state,
          updatingMarginMoney: false,
          updatingMarginMoneyResponse: []
        }
      
      default: 
        return state;

    }      
}
    
export default MarginMoneyReducer;