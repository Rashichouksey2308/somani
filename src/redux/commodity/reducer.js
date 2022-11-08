<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingAllCommodity: false,
  allCommodity: null,
  gettingCommodity: false,
  Commodity: null,
  updatingCommodity: false,
  updateCommodityResponse: false,
  creatingCommodity: false,
<<<<<<< Updated upstream
  createdCommodity: null,
};

function CommodityReducer(state = initialState, action) {
=======
  createdCommodity: null
}

function CommodityReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_ALL_COMMODITY:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingAllCommodity: true,
      };
=======
        gettingAllCommodity: true
      }
>>>>>>> Stashed changes

    case types.GET_ALL_COMMODITY_SUCCESS:
      return {
        ...state,
        gettingAllCommodity: false,
<<<<<<< Updated upstream
        allCommodity: action.payload,
      };
=======
        allCommodity: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_ALL_COMMODITY_FAILED:
      return {
        ...state,
        gettingAllCommodity: false,
<<<<<<< Updated upstream
        allCommodity: null,
      };
=======
        allCommodity: null
      }
>>>>>>> Stashed changes

    case types.GET_COMMODITY:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingCommodity: true,
      };
=======
        gettingCommodity: true
      }
>>>>>>> Stashed changes

    case types.GET_COMMODITY_SUCCESS:
      return {
        ...state,
        gettingCommodity: false,
<<<<<<< Updated upstream
        Commodity: action.payload,
      };
=======
        Commodity: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_COMMODITY_FAILED:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingCommodity: false,
      };
=======
        gettingCommodity: false
      }
>>>>>>> Stashed changes

    case types.UPDATE_COMMODITY:
      return {
        ...state,
        updatingCommodity: true,
<<<<<<< Updated upstream
        updateCommodityResponse: null,
      };
=======
        updateCommodityResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_COMMODITY_SUCCESS:
      return {
        ...state,
        updatingCommodity: false,
<<<<<<< Updated upstream
        updateCommodityResponse: action.payload,
      };
=======
        updateCommodityResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_COMMODITY_FAILED:
      return {
        ...state,
        updatingCommodity: false,
<<<<<<< Updated upstream
        updateCommodityResponse: null,
      };
=======
        updateCommodityResponse: null
      }
>>>>>>> Stashed changes

    case types.CREATE_COMMODITY:
      return {
        ...state,
        creatingCommodity: true,
<<<<<<< Updated upstream
        createdCommodity: null,
      };
=======
        createdCommodity: null
      }
>>>>>>> Stashed changes
    case types.CREATE_COMMODITY_SUCCESS:
      return {
        ...state,
        creatingCommodity: false,
<<<<<<< Updated upstream
        createdCommodity: action.payload,
      };
=======
        createdCommodity: action.payload
      }
>>>>>>> Stashed changes
    case types.CREATE_COMMODITY_FAILED:
      return {
        ...state,
        creatingCommodity: false,
<<<<<<< Updated upstream
        createdCommodity: null,
      };

    default:
      return state;
  }
}

export default CommodityReducer;
=======
        createdCommodity: null
      }

    default:
      return state
  }
}

export default CommodityReducer
>>>>>>> Stashed changes
