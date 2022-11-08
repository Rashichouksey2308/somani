<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  updatingCredit: false,
  updatingCreditResponse: null,
  updatingCreditCalculate: false,
  updatedCreditCalculateResponse: null,
  updatingOrder: false,
  updatingOrderResponse: null,
  searchingLeads: false,
  searchedLeads: null,
  gettingTermsheet: false,
  updatingTermsheet: false,
  termsheet: [],
  gettingAllTermsheet: false,
  allTermsheets: [],
<<<<<<< Updated upstream
  termsheetPreview: {},
};

function OrderReducer(state = initialState, action) {
=======
  termsheetPreview: {}
}

function OrderReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_TERMSHEET:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingTermsheet: true,
      };
=======
        gettingTermsheet: true
      }
>>>>>>> Stashed changes

    case types.GET_TERMSHEET_SUCCESSFULL:
      return {
        ...state,
        gettingTermsheet: false,
<<<<<<< Updated upstream
        termsheet: action.payload,
      };
=======
        termsheet: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_TERMSHEET_FAILED:
      return {
        ...state,
        gettingTermsheet: false,
<<<<<<< Updated upstream
        termsheet: [],
      };
=======
        termsheet: []
      }
>>>>>>> Stashed changes

    case types.GET_ALL_TERMSHEET:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingAllTermsheet: true,
      };
=======
        gettingAllTermsheet: true
      }
>>>>>>> Stashed changes

    case types.GET_ALL_TERMSHEET_SUCCESSFULL:
      return {
        ...state,
        gettingAllTermsheet: false,
<<<<<<< Updated upstream
        allTermsheets: action.payload,
      };
=======
        allTermsheets: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_ALL_TERMSHEET_FAILED:
      return {
        ...state,
        gettingAllTermsheet: false,
<<<<<<< Updated upstream
        allTermsheets: [],
      };
=======
        allTermsheets: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_TERMSHEET:
      return {
        ...state,
<<<<<<< Updated upstream
        updatingTermsheet: true,
      };
=======
        updatingTermsheet: true
      }
>>>>>>> Stashed changes
    case types.UPDATE_TERMSHEET_SUCCESSFULL:
      return {
        ...state,
        updatingTermsheet: false,
<<<<<<< Updated upstream
        termsheetPreview: action.payload,
      };
=======
        termsheetPreview: action.payload
      }
>>>>>>> Stashed changes

    case types.UPDATE_TERMSHEET:
      return {
        ...state,
        updatingTermsheet: false,
<<<<<<< Updated upstream
        termsheet: action.payload,
      };
=======
        termsheet: action.payload
      }
>>>>>>> Stashed changes

    case types.SEARCH_LEADS:
      return {
        ...state,
<<<<<<< Updated upstream
        searchingLeads: true,
      };
=======
        searchingLeads: true
      }
>>>>>>> Stashed changes
    case types.SEARCH_LEADS_SUCCESSFULL:
      return {
        ...state,
        searchingLeads: false,
<<<<<<< Updated upstream
        searchedLeads: action.payload,
      };
=======
        searchedLeads: action.payload
      }
>>>>>>> Stashed changes
    case types.SEARCH_LEADS_FAILED:
      return {
        ...state,
        searchingLeads: false,
<<<<<<< Updated upstream
        searchedLeads: null,
      };
=======
        searchedLeads: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_CREDIT:
      return {
        ...state,
        updatingCrdit: true,
<<<<<<< Updated upstream
        updatedCreditResponse: null,
      };
=======
        updatedCreditResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_CREDIT_SUCCESSFULL:
      return {
        ...state,
        updatingCredit: false,
<<<<<<< Updated upstream
        updatedCreditResponse: action.payload,
      };
=======
        updatedCreditResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_CREDIT_FAILED:
      return {
        ...state,
        updatingCredit: false,
<<<<<<< Updated upstream
        updatedCreditResponse: null,
      };
=======
        updatedCreditResponse: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_CREDIT_CALCULATE:
      return {
        ...state,
        updatingCreditCalculate: true,
<<<<<<< Updated upstream
        updatedCreditCalculateResponse: null,
      };
=======
        updatedCreditCalculateResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_CREDIT_CALCULATE_SUCCESSFULL:
      return {
        ...state,
        updatingCreditCalculate: false,
<<<<<<< Updated upstream
        updatedCreditCalculateResponse: action.payload,
      };
=======
        updatedCreditCalculateResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_CREDIT_CALCULATE_FAILED:
      return {
        ...state,
        updatingCreditCalculate: false,
<<<<<<< Updated upstream
        updatedCreditCalculateResponse: null,
      };
=======
        updatedCreditCalculateResponse: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_ORDER:
      return {
        ...state,
        updatingOrder: true,
<<<<<<< Updated upstream
        updatedOrderResponse: null,
      };
=======
        updatedOrderResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_ORDER_SUCCESSFULL:
      return {
        ...state,
        updatingOrder: false,
<<<<<<< Updated upstream
        updatedOrderResponse: action.payload,
      };
=======
        updatedOrderResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_ORDER_FAILED:
      return {
        ...state,
        updatingOrder: false,
<<<<<<< Updated upstream
        updatedOrderResponse: null,
      };

    default:
      return state;
  }
}

export default OrderReducer;
=======
        updatedOrderResponse: null
      }

    default:
      return state
  }
}

export default OrderReducer
>>>>>>> Stashed changes
