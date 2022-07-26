import * as types from './actionType'

const initialState = {
  gettingLc: false,
  lcModule: null,
  updatingLc: false,
  updatingLcResponse: null,
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

    default:
      return state
  }
}

export default LcModuleReducer
