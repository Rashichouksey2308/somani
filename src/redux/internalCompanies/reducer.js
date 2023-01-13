import * as types from './actionType'

const initialState = {
  gettingAllInternalCompanies: false,
  allInternalCompanies: null,
  gettingInternalCompanies: false,
  internalCompanyResponse: null,
  updatingInternalCompanies: false,
  updateInternalCompaniesResponse: false,
  creatingInternalCompanies: false,
  createdInternalCompanies: null
}

function InternalCompaniesReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_INTERNAL_COMPANIES:
      return {
        ...state,
        gettingAllInternalCompanies: true
      }

    case types.GET_ALL_INTERNAL_COMPANIES_SUCCESS:
      return {
        ...state,
        gettingAllInternalCompanies: false,
        allInternalCompanies: action.payload
      }

    case types.GET_ALL_INTERNAL_COMPANIES_FAILED:
      return {
        ...state,
        gettingAllInternalCompanies: false,
        allInternalCompanies: null
      }

    case types.GET_INTERNAL_COMPANIES:
      return {
        ...state,
        gettingInternalCompanies: true
      }

    case types.GET_INTERNAL_COMPANIES_SUCCESS:
      return {
        ...state,
        gettingInternalCompanies: false,
        internalCompanyResponse: action.payload
      }

    case types.GET_INTERNAL_COMPANIES_FAILED:
      return {
        ...state,
        gettingInternalCompanies: false
      }

    case types.UPDATE_INTERNAL_COMPANIES:
      return {
        ...state,
        updatingInternalCompanies: true,
        updateInternalCompaniesResponse: null
      }
    case types.UPDATE_INTERNAL_COMPANIES_SUCCESS:
      return {
        ...state,
        updatingInternalCompanies: false,
        updateInternalCompaniesResponse: action.payload
      }
    case types.UPDATE_INTERNAL_COMPANIES_FAILED:
      return {
        ...state,
        updatingInternalCompanies: false,
        updateInternalCompaniesResponse: null
      }

    case types.CREATE_INTERNAL_COMPANIES:
      return {
        ...state,
        creatingInternalCompanies: true,
        createdInternalCompanies: null
      }
    case types.CREATE_INTERNAL_COMPANIES_SUCCESS:
      return {
        ...state,
        creatingInternalCompanies: false,
        createdInternalCompanies: action.payload
      }
    case types.CREATE_INTERNAL_COMPANIES_FAILED:
      return {
        ...state,
        creatingInternalCompanies: false,
        createdInternalCompanies: null
      }

    default:
      return state
  }
}

export default InternalCompaniesReducer
