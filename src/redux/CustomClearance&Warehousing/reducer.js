import * as types from './actionType'

const initialState = {
  gettingAllCustomClearance: false,
  allCustomClearance: null,
  gettingCustomClearance: false,
  customClearance: null,
  updatingCustomClearance: false,
  updateCustomClearanceResponse: false,
}

function CustomClearanceReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CUSTOM_CLEARANCE:
      return {
        ...state,
        gettingAllCustomClearance: true,
      }
    case types.GET_ALL_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        gettingAllCustomClearance: false,
        allCustomClearance: action.payload,
      }
    case types.GET_ALL_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingAllCustomClearance: false,
      }
    case types.GET_CUSTOM_CLEARANCE:
      return {
        ...state,
        gettingAllCustomClearance: true,
      }
    case types.GET_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        gettingAllCustomClearance: false,
        customClearance: action.payload,
      }
    case types.GET_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingCustomClearance: false,
      }
    case types.UPDATE_CUSTOM_CLEARANCE:
      return {
        ...state,
        updatingCustomClearance: true,
        updateCustomClearanceResponse: null
      }
    case types.UPDATE_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        updatingCustomClearance: false,
        updateCustomClearanceResponse: action.payload
      }
    case types.UPDATE_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        updatingCustomClearance: false,
        updateCustomClearanceResponse: null
      }

    default:
      return state
  }
}

export default CustomClearanceReducer
