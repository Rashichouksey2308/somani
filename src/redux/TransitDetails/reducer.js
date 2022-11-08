<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingTransitDetails: false,
  allTransitDetails: null,
  TransitDetails: null,
  updatingTransitDetails: false,
  gettingAdditionalData: false,
<<<<<<< Updated upstream
  additionalData: null,
};

function TransitDetailsReducer(state = initialState, action) {
=======
  additionalData: null
}

function TransitDetailsReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_TRANSITDETAILS:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingTransitDetails: true,
      };
=======
        gettingTransitDetails: true
      }
>>>>>>> Stashed changes
    case types.GET_TRANSITDETAILS_SUCCESS:
      return {
        ...state,
        gettingTransitDetails: false,
<<<<<<< Updated upstream
        TransitDetails: action.payload,
      };
    case types.GET_TRANSITDETAILS_FAILED:
      return {
        ...state,
        gettingTransitDetails: false,
      };
    case types.GET_ALL_TRANSITDETAILS:
      return {
        ...state,
        gettingTransitDetails: true,
      };
=======
        TransitDetails: action.payload
      }
    case types.GET_TRANSITDETAILS_FAILED:
      return {
        ...state,
        gettingTransitDetails: false
      }
    case types.GET_ALL_TRANSITDETAILS:
      return {
        ...state,
        gettingTransitDetails: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_TRANSITDETAILS_SUCCESS:
      return {
        ...state,
        gettingTransitDetails: false,
<<<<<<< Updated upstream
        allTransitDetails: action.payload,
      };
    case types.GET_ALL_TRANSITDETAILS_FAILED:
      return {
        ...state,
        gettingTransitDetails: false,
      };
    case types.UPDATE_TRANSITDETAILS:
      return {
        ...state,
        updatingTransitDetails: true,
      };
    case types.UPDATE_TRANSITDETAILS_SUCCESS:
      return {
        ...state,
        updatingTransitDetails: false,
      };
    case types.UPDATE_TRANSITDETAILS_FAILED:
      return {
        ...state,
        updatingTransitDetails: false,
      };
    case types.GET_ADDITTIONAL_DATA:
      return {
        ...state,
        gettingAdditionalData: true,
      };
=======
        allTransitDetails: action.payload
      }
    case types.GET_ALL_TRANSITDETAILS_FAILED:
      return {
        ...state,
        gettingTransitDetails: false
      }
    case types.UPDATE_TRANSITDETAILS:
      return {
        ...state,
        updatingTransitDetails: true
      }
    case types.UPDATE_TRANSITDETAILS_SUCCESS:
      return {
        ...state,
        updatingTransitDetails: false
      }
    case types.UPDATE_TRANSITDETAILS_FAILED:
      return {
        ...state,
        updatingTransitDetails: false
      }
    case types.GET_ADDITTIONAL_DATA:
      return {
        ...state,
        gettingAdditionalData: true
      }
>>>>>>> Stashed changes
    case types.GET_ADDITTIONAL_DATA_SUCCESS:
      return {
        ...state,
        gettingAdditionalData: false,
<<<<<<< Updated upstream
        additionalData: action.payload,
      };
    case types.GET_ADDITTIONAL_DATA_FAILED:
      return {
        ...state,
        gettingAdditionalData: false,
      };
    default:
      return state;
  }
}

export default TransitDetailsReducer;
=======
        additionalData: action.payload
      }
    case types.GET_ADDITTIONAL_DATA_FAILED:
      return {
        ...state,
        gettingAdditionalData: false
      }
    default:
      return state
  }
}

export default TransitDetailsReducer
>>>>>>> Stashed changes
