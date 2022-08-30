import * as types from './actionType'

const initialState = {
  gettingCompanyDetail: false,
  companyData: null,
  updatingCompany: false,
  gettingCreditData: false,
  creditData: null,
  caseDetails: null
}

function CompanyReducer(state = initialState, action) {
  switch (action.type) {

    case types.GET_COMPANY_DETAIL:
      return {
        gettingCompanyDetail: true,
        companyData: null,
      }
    case types.GET_COMPANY_DETAIL_SUCCESS:
      return {
        gettingCompanyDetail: false,
        companyData: action.payload,
      }
    case types.GET_COMPANY_DETAIL_FAILED:
      return {
        gettingCompanyDetail: false,
        companyData: null,
      }

    case types.GET_CREDIT_DETAIL:
      return {
        gettingCreditData: true,
        creditData: null,
      }
    case types.GET_CREDIT_DETAIL_SUCCESS:
      return {
        gettingCreditData: false,
        creditData: action.payload,
      }
    case types.GET_CREDIT_DETAIL_FAILED:
      return {
        gettingCreditData: false,
        creditData: null,
      }

    case types.UPDATE_COMPANY_DETAIL:
      return {
        ...state,
        updatingCompany: true,
      }
    case types.UPDATE_COMPANY_DETAIL_SUCCESS:
      return {
        ...state,
        updatingCompany: false,
      }
    case types.UPDATE_COMPANY_DETAIL_FAILED:
      return {
        ...state,
        updatingCompany: false,
      }

    // case types.GET_CASE_DETAILS:
    //   return {
    //     ...state,
    //   }
    case types.GET_CASE_DETAILS_SUCCESS:
      return {
        ...state,
        caseDetails: action.payload,
      }
    // case types.GET_CASE_DETAILS_FAILED:
    //   return {
    //     ...state,
    //     updatingCompany: false,
    //   }


    default:
      return state
  }
}

export default CompanyReducer
