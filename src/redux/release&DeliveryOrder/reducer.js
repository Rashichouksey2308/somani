<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingAllReleaseOrder: false,
  allReleaseOrder: null,
  gettingReleaseOrder: false,
  ReleaseOrderData: null,
  updatingReleaseOrder: false,
<<<<<<< Updated upstream
  updateReleaseOrderResponse: false,
};

function ReleaseOrderReducer(state = initialState, action) {
=======
  updateReleaseOrderResponse: false
}

function ReleaseOrderReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_ALL_DELIVERY:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingAllReleaseOrder: true,
      };
=======
        gettingAllReleaseOrder: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_DELIVERY_SUCCESS:
      return {
        ...state,
        gettingAllReleaseOrder: false,
<<<<<<< Updated upstream
        allReleaseOrder: action.payload,
      };
    case types.GET_ALL_DELIVERY_FAILED:
      return {
        ...state,
        gettingAllReleaseOrder: false,
      };
    case types.GET_DELIVERY:
      return {
        ...state,
        gettingAllReleaseOrder: true,
      };
=======
        allReleaseOrder: action.payload
      }
    case types.GET_ALL_DELIVERY_FAILED:
      return {
        ...state,
        gettingAllReleaseOrder: false
      }
    case types.GET_DELIVERY:
      return {
        ...state,
        gettingAllReleaseOrder: true
      }
>>>>>>> Stashed changes
    case types.GET_DELIVERY_SUCCESS:
      return {
        ...state,
        gettingAllReleaseOrder: false,
<<<<<<< Updated upstream
        ReleaseOrderData: action.payload,
      };
    case types.GET_DELIVERY_FAILED:
      return {
        ...state,
        gettingReleaseOrder: false,
      };
=======
        ReleaseOrderData: action.payload
      }
    case types.GET_DELIVERY_FAILED:
      return {
        ...state,
        gettingReleaseOrder: false
      }
>>>>>>> Stashed changes
    case types.UPDATE_DELIVERY:
      return {
        ...state,
        updatingReleaseOrder: true,
<<<<<<< Updated upstream
        updateReleaseOrderResponse: null,
      };
=======
        updateReleaseOrderResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_DELIVERY_SUCCESS:
      return {
        ...state,
        updatingReleaseOrder: false,
<<<<<<< Updated upstream
        updateReleaseOrderResponse: action.payload,
      };
=======
        updateReleaseOrderResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_DELIVERY_FAILED:
      return {
        ...state,
        updatingReleaseOrder: false,
<<<<<<< Updated upstream
        updateReleaseOrderResponse: null,
      };

    default:
      return state;
  }
}

export default ReleaseOrderReducer;
=======
        updateReleaseOrderResponse: null
      }

    default:
      return state
  }
}

export default ReleaseOrderReducer
>>>>>>> Stashed changes
