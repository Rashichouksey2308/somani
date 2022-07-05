import * as types from "./actionType";

const initialState = {
    gettingMarginMoney: false,
    marginMoneyResponse: []
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
      
      default: 
        return state;

    }      
}
    
export default MarginMoneyReducer;