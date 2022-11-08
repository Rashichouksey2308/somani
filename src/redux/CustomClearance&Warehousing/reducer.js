<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingAllCustomClearance: false,
  allCustomClearance: null,
  gettingCustomClearance: false,
  customClearance: null,
  updatingCustomClearance: false,
<<<<<<< Updated upstream
  updateCustomClearanceResponse: false,
};

function CustomClearanceReducer(state = initialState, action) {
=======
  updateCustomClearanceResponse: false
}

function CustomClearanceReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_ALL_CUSTOM_CLEARANCE:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingAllCustomClearance: true,
      };
=======
        gettingAllCustomClearance: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        gettingAllCustomClearance: false,
<<<<<<< Updated upstream
        allCustomClearance: action.payload,
      };
    case types.GET_ALL_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingAllCustomClearance: false,
      };
    case types.GET_CUSTOM_CLEARANCE:
      return {
        ...state,
        gettingAllCustomClearance: true,
      };
=======
        allCustomClearance: action.payload
      }
    case types.GET_ALL_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingAllCustomClearance: false
      }
    case types.GET_CUSTOM_CLEARANCE:
      return {
        ...state,
        gettingAllCustomClearance: true
      }
>>>>>>> Stashed changes
    case types.GET_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        gettingAllCustomClearance: false,
<<<<<<< Updated upstream
        customClearance: action.payload,
      };
    case types.GET_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingCustomClearance: false,
      };
=======
        customClearance: action.payload
      }
    case types.GET_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingCustomClearance: false
      }
>>>>>>> Stashed changes
    case types.UPDATE_CUSTOM_CLEARANCE:
      return {
        ...state,
        updatingCustomClearance: true,
<<<<<<< Updated upstream
        updateCustomClearanceResponse: null,
      };
=======
        updateCustomClearanceResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        updatingCustomClearance: false,
<<<<<<< Updated upstream
        updateCustomClearanceResponse: action.payload,
      };
=======
        updateCustomClearanceResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        updatingCustomClearance: false,
<<<<<<< Updated upstream
        updateCustomClearanceResponse: null,
      };

    default:
      return state;
  }
}

export default CustomClearanceReducer;
=======
        updateCustomClearanceResponse: null
      }

    default:
      return state
  }
}

export default CustomClearanceReducer
>>>>>>> Stashed changes
