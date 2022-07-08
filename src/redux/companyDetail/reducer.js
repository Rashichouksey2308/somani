import * as types from './actionType'

const initialState = {
  gettingCompanyDetail: false,
  companyData: null,
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
    default:
      return state
  }
}

export default CompanyReducer
