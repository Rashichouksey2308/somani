<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  orderSummary: [],
  leadSummary: [],
  commoditySummary: [],
  originSummary: [],
  customerSummary: [],
  exposureSummary: [],
  totalOrigin: 0,
<<<<<<< Updated upstream
  totalCustomer: 0,
};

function AnalyticsReducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_ORDER_DATA:
     
      return {
        ...state,
        orderSummary: action.payload,
      };
    case types.GET_LEAD_DATA:
      return {
        ...state,
        leadSummary: action.payload,
      };
    case types.GET_COMMODITY_DATA:
      return {
        ...state,
        commoditySummary: action.payload,
      };
=======
  totalCustomer: 0
}

function AnalyticsReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ORDER_DATA:

      return {
        ...state,
        orderSummary: action.payload
      }
    case types.GET_LEAD_DATA:
      return {
        ...state,
        leadSummary: action.payload
      }
    case types.GET_COMMODITY_DATA:
      return {
        ...state,
        commoditySummary: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_ORIGIN_DATA:
      return {
        ...state,
        originSummary: action.payload.payload,
<<<<<<< Updated upstream
        totalOrigin: action.payload.total,
      };
=======
        totalOrigin: action.payload.total
      }
>>>>>>> Stashed changes
    case types.GET_CUSTOMER_DATA:
      return {
        ...state,
        customerSummary: action.payload.payload,
<<<<<<< Updated upstream
        totalCustomer: action.payload.total,
      };
    case types.GET_EXPOSURE_DATA:
      return {
        ...state,
        exposureSummary: action.payload,
      };

    default:
      return state;
  }
}

export default AnalyticsReducer;
=======
        totalCustomer: action.payload.total
      }
    case types.GET_EXPOSURE_DATA:
      return {
        ...state,
        exposureSummary: action.payload
      }

    default:
      return state
  }
}

export default AnalyticsReducer
>>>>>>> Stashed changes
