<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingMarginMoney: false,
  marginMoneyResponse: [],
  getMarginMoney: false,
  margin: [],
  updatingMarginMoney: false,
  updatingMarginMoneyResponse: [],
  revisedMarginMoney: false,
<<<<<<< Updated upstream
  revisedMarginMoneyResponse: null,
};

function MarginMoneyReducer(state = initialState, action) {
=======
  revisedMarginMoneyResponse: null
}

function MarginMoneyReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_ALL_MARGINMONEY:
      return {
        ...state,
        gettingMarginMoney: true,
<<<<<<< Updated upstream
        marginMoneyResponse: [],
      };
=======
        marginMoneyResponse: []
      }
>>>>>>> Stashed changes

    case types.GET_ALL_MARGINMONEY_SUCCESSFULL:
      return {
        ...state,
        gettingMarginMoney: false,
<<<<<<< Updated upstream
        marginMoneyResponse: action.payload,
      };
=======
        marginMoneyResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_ALL_MARGINMONEY_FAILED:
      return {
        ...state,
        gettingMarginMoney: false,
<<<<<<< Updated upstream
        marginMoneyResponse: [],
      };
=======
        marginMoneyResponse: []
      }
>>>>>>> Stashed changes

    case types.GET_MARGINMONEY:
      return {
        ...state,
        getMarginMoney: true,
<<<<<<< Updated upstream
        margin: [],
      };
=======
        margin: []
      }
>>>>>>> Stashed changes

    case types.GET_MARGINMONEY_SUCCESSFULL:
      return {
        ...state,
        getMarginMoney: false,
<<<<<<< Updated upstream
        margin: action.payload,
      };
=======
        margin: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_MARGINMONEY_FAILED:
      return {
        ...state,
        getMarginMoney: false,
<<<<<<< Updated upstream
        margin: [],
      };
=======
        margin: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_MARGINMONEY:
      return {
        ...state,
        updateMarginMoney: true,
<<<<<<< Updated upstream
        updatingMarginMoneyResponse: [],
      };
=======
        updatingMarginMoneyResponse: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_MARGINMONEY_SUCCESSFULL:
      return {
        ...state,
        updatingMarginMoney: false,
<<<<<<< Updated upstream
        updatingMarginMoneyResponse: action.payload,
      };
=======
        updatingMarginMoneyResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_MARGINMONEY_FAILED:
      return {
        ...state,
        updatingMarginMoney: false,
<<<<<<< Updated upstream
        updatingMarginMoneyResponse: [],
      };
=======
        updatingMarginMoneyResponse: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_MARGINMONEY_REVISED:
      return {
        ...state,
        revisedMarginMoney: true,
<<<<<<< Updated upstream
        revisedMarginMoneyResponse: null,
      };
=======
        revisedMarginMoneyResponse: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_MARGINMONEY_REVISED_SUCCESSFULL:
      return {
        ...state,
        revisedMarginMoney: false,
<<<<<<< Updated upstream
        revisedMarginMoneyResponse: action.payload,
      };
=======
        revisedMarginMoneyResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_MARGINMONEY_REVISED_FAILED:
      return {
        ...state,
        revisedMarginMoney: false,
<<<<<<< Updated upstream
        revisedMarginMoneyResponse: null,
      };

    default:
      return state;
  }
}

export default MarginMoneyReducer;
=======
        revisedMarginMoneyResponse: null
      }

    default:
      return state
  }
}

export default MarginMoneyReducer
>>>>>>> Stashed changes
