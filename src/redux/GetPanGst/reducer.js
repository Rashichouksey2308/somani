import * as types from './actionType'

const initialState = {
  gettingCompanyPan: false,
  gettingCompanyPanResponse: null,
}

function GetCompanyPanReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COMPANY_PAN:
      return {
        ...state,
        gettingCompanyPan: true,
        gettingCompanyPanResponse: null,
      }
    case types.GET_COMPANY_PAN_SUCCESSFULL:
      return {
        ...state,
        gettingCompanyPan: false,
        gettingCompanyPanResponse: action.payload,
      }
    case types.GET_COMPANY_PAN_FAILED:
      return {
        ...state,
        gettingCompanyPan: false,
        gettingCompanyPanResponse: null,
      }

    default:
      return state
  }
}

export default GetCompanyPanReducer
