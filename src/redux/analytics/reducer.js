import * as types from './actionType'

const initialState = {
  orderSummary: [],
  leadSummary: [],
  commoditySummary: [],
  originSummary: [],
  customerSummary: [],
  exposureSummary: [],
}

function AnalyticsReducer(state = initialState, action) {
  console.log(action.type, 'action3333')
  switch (action.type) {
    case types.GET_ORDER_DATA:
      console.log(action.payload, 'action.payload')
      return {
        ...state,
        orderSummary: action.payload,
      }
    case types.GET_LEAD_DATA:
      return {
        ...state,
        leadSummary: action.payload,
      }
    case types.GET_COMMODITY_DATA:
      return {
        ...state,
        commoditySummary: action.payload,
      }
    case types.GET_ORIGIN_DATA:
      return {
        ...state,
        originSummary: action.payload,
      }
    case types.GET_CUSTOMER_DATA:
      return {
        ...state,
        customerSummary: action.payload,
      }
    case types.GET_EXPOSURE_DATA:
      return {
        ...state,
        exposureSummary: action.payload,
      }

    default:
      return state
  }
}

export default AnalyticsReducer
