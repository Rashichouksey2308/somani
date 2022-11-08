<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingInsurance: false,
  insuranceResponse: [],
  creatingInsurance: false,
  createdInsuranceResponse: [],
  updatingInsurance: false,
  updatingInsuranceResponse: [],
  renewingInsurance: false,
  renewingInsuranceResponse: [],
  updatingQuotation: false,
<<<<<<< Updated upstream
  updatingQuotationResponse: [],
};

function InsuranceReducer(state = initialState, action) {
=======
  updatingQuotationResponse: []
}

function InsuranceReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_ALL_INSURANCE:
      return {
        ...state,
        gettingInsurance: true,
<<<<<<< Updated upstream
        insuranceResponse: [],
      };
=======
        insuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.GET_ALL_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        gettingInsurance: false,
<<<<<<< Updated upstream
        insuranceResponse: action.payload,
      };
=======
        insuranceResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_ALL_INSURANCE_FAILED:
      return {
        ...state,
        gettingInsurance: false,
<<<<<<< Updated upstream
        insuranceResponse: [],
      };
=======
        insuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.CREATE_INSURANCE:
      return {
        ...state,
        creatingInsurance: true,
<<<<<<< Updated upstream
        createdInsuranceResponse: [],
      };
=======
        createdInsuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.CREATE_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        creatingInsurance: false,
<<<<<<< Updated upstream
        createdInsuranceResponse: action.payload,
      };
=======
        createdInsuranceResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.CREATE_INSURANCE_FAILED:
      return {
        ...state,
        creatingInsurance: false,
<<<<<<< Updated upstream
        createdInsuranceResponse: [],
      };
=======
        createdInsuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_INSURANCE:
      return {
        ...state,
        updatingInsurance: true,
<<<<<<< Updated upstream
        updatingInsuranceResponse: [],
      };
=======
        updatingInsuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        updatingInsurance: false,
<<<<<<< Updated upstream
        updatingInsuranceResponse: action.payload,
      };
=======
        updatingInsuranceResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_INSURANCE_FAILED:
      return {
        ...state,
        updatingInsurance: false,
<<<<<<< Updated upstream
        updatingInsuranceResponse: [],
      };
=======
        updatingInsuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.RENEW_INSURANCE:
      return {
        ...state,
        renewingInsurance: true,
<<<<<<< Updated upstream
        renewingInsuranceResponse: [],
      };
=======
        renewingInsuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.RENEW_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        renewingInsurance: false,
<<<<<<< Updated upstream
        renewingInsuranceResponse: action.payload,
      };
=======
        renewingInsuranceResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.RENEW_INSURANCE_FAILED:
      return {
        ...state,
        renewingInsurance: false,
<<<<<<< Updated upstream
        renewingInsuranceResponse: [],
      };
=======
        renewingInsuranceResponse: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_QUOTATION:
      return {
        ...state,
        updatingQuotation: true,
<<<<<<< Updated upstream
        updatingQuotationResponse: [],
      };
=======
        updatingQuotationResponse: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_QUOTATION_SUCCESSFULL:
      return {
        ...state,
        updatingQuotation: false,
<<<<<<< Updated upstream
        updatingQuotationResponse: action.payload,
      };
=======
        updatingQuotationResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_QUOTATION_FAILED:
      return {
        ...state,
        updatingQuotation: false,
<<<<<<< Updated upstream
        updatingQuotationResponse: [],
      };

    default:
      return state;
  }
}

export default InsuranceReducer;
=======
        updatingQuotationResponse: []
      }

    default:
      return state
  }
}

export default InsuranceReducer
>>>>>>> Stashed changes
