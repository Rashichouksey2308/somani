import * as types from './actionType'

const initialState = {
  gettingLc: false,
  lcModule: null,
  updatingLc: false,
  updatingLcResponse: null,
  updatingLcAmendment: false,
  updatingLcAmendmentResponse: null,
  updatingAmendment: false,
  updatingAmendmentResponse: null,
}

function LcModuleReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LC_MODULE:
      return {
        ...state,
        gettingLc: true,
        lcModule: null,
      }
    case types.GET_LC_MODULE_SUCCESS:
      return {
        ...state,
        gettingLc: false,
        lcModule: action.payload,
      }
    case types.GET_LC_MODULE_FAILED:
      return {
        ...state,
        gettingLc: false,
        lcModule: null,
      }

    case types.UPDATE_LC_MODULE:
      return {
        ...state,
        updatingLc: true,
        updatingLcResponse: null,
      }
    case types.UPDATE_LC_MODULE_SUCCESS:
      return {
        ...state,
        updatingLc: false,
        updatingLcResponse: action.payload,
      }
    case types.UPDATE_LC_MODULE_FAILED:
      return {
        ...state,
        updatingLc: false,
        updatingLcResponse: null,
      }

    case types.UPDATE_LC_AMENDMENT:
      return {
        ...state,
        updatingLcAmendment: true,
        updatingLcAmendmentResponse: null,
      }
    case types.UPDATE_LC_AMENDMENT_SUCCESS:
      return {
        ...state,
        updatingLcAmendment: false,
        updatingLcAmendmentResponse: action.payload,
      }
    case types.UPDATE_LC_AMENDMENT_FAILED:
      return {
        ...state,
        updatingLcAmendment: false,
        updatingLcAmendmentResponse: null,
      }

    case types.UPDATE_LC_AMENDMENT_POST:
      return {
        ...state,
        updatingAmendment: true,
        updatingAmendmentResponse: null,
      }
    case types.UPDATE_LC_AMENDMENT_POST_SUCCESS:
      return {
        ...state,
        updatingAmendment: false,
        updatingAmendmentResponse: action.payload,
      }
    case types.UPDATE_LC_AMENDMENT_POST_FAILED:
      return {
        ...state,
        updatingAmendment: false,
        updatingAmendmentResponse: null,
      }

    default:
      return state
  }
}

export default LcModuleReducer
