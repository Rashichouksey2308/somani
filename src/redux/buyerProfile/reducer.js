import * as types from "./actionType";

const initialState = {
  updatingCredit: false,
  updatingCreditResponse: null,
  updatingOrder: false,
  updatingOrderResponse: null,
  searchingLeads: false,
  searchedLeads: null,
  gettingTermsheet: false,
  updatingTermsheet: false,
  termsheet: [],
}

function OrderReducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_TERMSHEET:
      return {
        ...state,
        gettingTermsheet: true
      }

    case types.GET_TERMSHEET_SUCCESSFULL:
      return {
        ...state,
        gettingTermsheet: false,
        termsheet: action.payload
      }
    case types.GET_TERMSHEET_FAILED:
      return {
        ...state,
        gettingTermsheet: false,
        termsheet: []
      }

    case types.UPDATE_TERMSHEET:
      return {
        ...state,
        updatingTermsheet: true
      }
    case types.UPDATE_TERMSHEET_SUCCESSFULL:
      return {
        ...state,
        updatingTermsheet: false

      }

    case types.UPDATE_TERMSHEET:
      return {
        ...state,
        updatingTermsheet: false
      }





    case types.SEARCH_LEADS:
      return {
        ...state,
        searchingLeads: true
      }
    case types.SEARCH_LEADS_SUCCESSFULL:
      return {
        ...state,
        searchingLeads: false,
        searchedLeads: action.payload
      }
    case types.SEARCH_LEADS_FAILED:
      return {
        ...state,
        searchingLeads: false,
        searchedLeads: null
      }

    case types.UPDATE_CREDIT:
      return {
        ...state,
        updatingCrdit: true,
        updatedCreditResponse: null,
      }
    case types.UPDATE_CREDIT_SUCCESSFULL:
      return {
        ...state,
        updatingCredit: false,
        updatedCreditResponse: action.payload,
      }
    case types.UPDATE_CREDIT_FAILED:
      return {
        ...state,
        updatingCredit: false,
        updatedCreditResponse: null,
      }

    case types.UPDATE_ORDER:
      return {
        ...state,
        updatingOrder: true,
        updatedOrderResponse: null,
      }
    case types.UPDATE_ORDER_SUCCESSFULL:
      return {
        ...state,
        updatingOrder: false,
        updatedOrderResponse: action.payload,
      }
    case types.UPDATE_ORDER_FAILED:
      return {
        ...state,
        updatingOrder: false,
        updatedOrderResponse: null,
      }

    default:
      return state
  }

}

export default OrderReducer