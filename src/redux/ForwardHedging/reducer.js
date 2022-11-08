<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingForwardHedging: false,
  allForwardHedging: null,
  ForwardHedging: null,
  updatingForwardHedging: false,
<<<<<<< Updated upstream
  updateForwardHedgingResponse: false,
};

function ForwardHedgingReducer(state = initialState, action) {
=======
  updateForwardHedgingResponse: false
}

function ForwardHedgingReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_ALL_FORWARDHEDGING:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingForwardHedging: true,
      };
=======
        gettingForwardHedging: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_FORWARDHEDGING_SUCCESS:
      return {
        ...state,
        gettingForwardHedging: false,
<<<<<<< Updated upstream
        allForwardHedging: action.payload,
      };
    case types.GET_ALL_FORWARDHEDGING_FAILED:
      return {
        ...state,
        gettingForwardHedging: false,
      };
    case types.GET_FORWARDHEDGING:
      return {
        ...state,
        gettingForwardHedging: true,
      };
=======
        allForwardHedging: action.payload
      }
    case types.GET_ALL_FORWARDHEDGING_FAILED:
      return {
        ...state,
        gettingForwardHedging: false
      }
    case types.GET_FORWARDHEDGING:
      return {
        ...state,
        gettingForwardHedging: true
      }
>>>>>>> Stashed changes
    case types.GET_FORWARDHEDGING_SUCCESS:
      return {
        ...state,
        gettingForwardHedging: false,
<<<<<<< Updated upstream
        ForwardHedging: action.payload,
      };
    case types.GET_FORWARDHEDGING_FAILED:
      return {
        ...state,
        gettingForwardHedging: false,
      };
=======
        ForwardHedging: action.payload
      }
    case types.GET_FORWARDHEDGING_FAILED:
      return {
        ...state,
        gettingForwardHedging: false
      }
>>>>>>> Stashed changes
    case types.UPDATE_FORWARDHEDGING:
      return {
        ...state,
        updatingForwardHedging: true,
<<<<<<< Updated upstream
        updateForwardHedgingResponse: null,
      };
=======
        updateForwardHedgingResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_FORWARDHEDGING_SUCCESS:
      return {
        ...state,
        updatingForwardHedging: false,
<<<<<<< Updated upstream
        updateForwardHedgingResponse: action.payload,
      };
=======
        updateForwardHedgingResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_FORWARDHEDGING_FAILED:
      return {
        ...state,
        updatingForwardHedging: false,
<<<<<<< Updated upstream
        updateForwardHedgingResponse: null,
      };

    default:
      return state;
  }
}

export default ForwardHedgingReducer;
=======
        updateForwardHedgingResponse: null
      }

    default:
      return state
  }
}

export default ForwardHedgingReducer
>>>>>>> Stashed changes
