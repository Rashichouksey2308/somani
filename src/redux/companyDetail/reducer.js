<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingCompanyDetail: false,
  companyData: null,
  updatingCompany: false,
  gettingCreditData: false,
  creditData: null,
<<<<<<< Updated upstream
  caseDetails: null,
};

function CompanyReducer(state = initialState, action) {
=======
  caseDetails: null
}

function CompanyReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_COMPANY_DETAIL:
      return {
        gettingCompanyDetail: true,
<<<<<<< Updated upstream
        companyData: null,
      };
    case types.GET_COMPANY_DETAIL_SUCCESS:
      return {
        gettingCompanyDetail: false,
        companyData: action.payload,
      };
    case types.GET_COMPANY_DETAIL_FAILED:
      return {
        gettingCompanyDetail: false,
        companyData: null,
      };
=======
        companyData: null
      }
    case types.GET_COMPANY_DETAIL_SUCCESS:
      return {
        gettingCompanyDetail: false,
        companyData: action.payload
      }
    case types.GET_COMPANY_DETAIL_FAILED:
      return {
        gettingCompanyDetail: false,
        companyData: null
      }
>>>>>>> Stashed changes

    case types.GET_CREDIT_DETAIL:
      return {
        gettingCreditData: true,
<<<<<<< Updated upstream
        creditData: null,
      };
    case types.GET_CREDIT_DETAIL_SUCCESS:
      return {
        gettingCreditData: false,
        creditData: action.payload,
      };
    case types.GET_CREDIT_DETAIL_FAILED:
      return {
        gettingCreditData: false,
        creditData: null,
      };
=======
        creditData: null
      }
    case types.GET_CREDIT_DETAIL_SUCCESS:
      return {
        gettingCreditData: false,
        creditData: action.payload
      }
    case types.GET_CREDIT_DETAIL_FAILED:
      return {
        gettingCreditData: false,
        creditData: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_COMPANY_DETAIL:
      return {
        ...state,
<<<<<<< Updated upstream
        updatingCompany: true,
      };
    case types.UPDATE_COMPANY_DETAIL_SUCCESS:
      return {
        ...state,
        updatingCompany: false,
      };
    case types.UPDATE_COMPANY_DETAIL_FAILED:
      return {
        ...state,
        updatingCompany: false,
      };

  
    case types.GET_CASE_DETAILS_SUCCESS:
      return {
        ...state,
        caseDetails: action.payload,
      };
    

    default:
      return state;
  }
}

export default CompanyReducer;
=======
        updatingCompany: true
      }
    case types.UPDATE_COMPANY_DETAIL_SUCCESS:
      return {
        ...state,
        updatingCompany: false
      }
    case types.UPDATE_COMPANY_DETAIL_FAILED:
      return {
        ...state,
        updatingCompany: false
      }

    case types.GET_CASE_DETAILS_SUCCESS:
      return {
        ...state,
        caseDetails: action.payload
      }

    default:
      return state
  }
}

export default CompanyReducer
>>>>>>> Stashed changes
