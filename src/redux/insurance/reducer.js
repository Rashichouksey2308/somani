import * as types from './actionType'

const initialState = {
  gettingInsurance: false,
  insuranceResponse: [],
  creatingInsurance: false,
  createdInsuranceResponse: [],
  updatingInsurance: false,
  updatingInsuranceResponse: [],
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

    default:
      return state
  }
}

export default InsuranceReducer;
