import * as types from './actionType'

const initialState = {
  gettingCompanyDetail: false,
  companyData: null,
  updatingCompany: false
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
      case types.UPDATE_COMPANY_DETAIL:
        return {
          ...state,
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
    default:
      return state
  }
}

export default CompanyReducer
