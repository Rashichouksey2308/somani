import * as types from './actionType'

const initialState = {
  gettingAllReleaseOrder: false,
  allReleaseOrder: null,
  gettingReleaseOrder: false,
  ReleaseOrder: null,
  updatingReleaseOrder: false,
  updateReleaseOrderResponse: false,
}

function ReleaseOrderReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CUSTOM_CLEARANCE:
      return {
        ...state,
        gettingAllReleaseOrder: true,
      }
    case types.GET_ALL_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        gettingAllReleaseOrder: false,
        allReleaseOrder: action.payload,
      }
    case types.GET_ALL_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingAllReleaseOrder: false,
      }
    case types.GET_CUSTOM_CLEARANCE:
      return {
        ...state,
        gettingAllReleaseOrder: true,
      }
    case types.GET_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        gettingAllReleaseOrder: false,
        ReleaseOrder: action.payload,
      }
    case types.GET_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        gettingReleaseOrder: false,
      }
    case types.UPDATE_CUSTOM_CLEARANCE:
      return {
        ...state,
        updatingReleaseOrder: true,
        updateReleaseOrderResponse: null
      }
    case types.UPDATE_CUSTOM_CLEARANCE_SUCCESS:
      return {
        ...state,
        updatingReleaseOrder: false,
        updateReleaseOrderResponse: action.payload
      }
    case types.UPDATE_CUSTOM_CLEARANCE_FAILED:
      return {
        ...state,
        updatingReleaseOrder: false,
        updateReleaseOrderResponse: null
      }

    default:
      return state
  }
}

export default ReleaseOrderReducer
