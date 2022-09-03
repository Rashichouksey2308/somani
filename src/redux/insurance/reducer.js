import * as types from './actionType'

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
  updatingQuotationResponse: [],
}

function InsuranceReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_INSURANCE:
      return {
        ...state,
        gettingInsurance: true,
        insuranceResponse: [],
      }

    case types.GET_ALL_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        gettingInsurance: false,
        insuranceResponse: action.payload,
      }
    case types.GET_ALL_INSURANCE_FAILED:
      return {
        ...state,
        gettingInsurance: false,
        insuranceResponse: [],
      }

    case types.CREATE_INSURANCE:
      return {
        ...state,
        creatingInsurance: true,
        createdInsuranceResponse: [],
      }

    case types.CREATE_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        creatingInsurance: false,
        createdInsuranceResponse: action.payload,
      }
    case types.CREATE_INSURANCE_FAILED:
      return {
        ...state,
        creatingInsurance: false,
        createdInsuranceResponse: [],
      }

    case types.UPDATE_INSURANCE:
      return {
        ...state,
        updatingInsurance: true,
        updatingInsuranceResponse: [],
      }

    case types.UPDATE_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        updatingInsurance: false,
        updatingInsuranceResponse: action.payload,
      }
    case types.UPDATE_INSURANCE_FAILED:
      return {
        ...state,
        updatingInsurance: false,
        updatingInsuranceResponse: [],
      }

    case types.RENEW_INSURANCE:
      return {
        ...state,
        renewingInsurance: true,
        renewingInsuranceResponse: [],
      }

    case types.RENEW_INSURANCE_SUCCESSFULL:
      return {
        ...state,
        renewingInsurance: false,
        renewingInsuranceResponse: action.payload,
      }
    case types.RENEW_INSURANCE_FAILED:
      return {
        ...state,
        renewingInsurance: false,
        renewingInsuranceResponse: [],
      }

    case types.UPDATE_QUOTATION:
      return {
        ...state,
        updatingQuotation: true,
        updatingQuotationResponse: [],
      }

    case types.UPDATE_QUOTATION_SUCCESSFULL:
      return {
        ...state,
        updatingQuotation: false,
        updatingQuotationResponse: action.payload,
      }
    case types.UPDATE_QUOTATION_FAILED:
      return {
        ...state,
        updatingQuotation: false,
        updatingQuotationResponse: [],
      }

    default:
      return state
  }
}

export default InsuranceReducer;
