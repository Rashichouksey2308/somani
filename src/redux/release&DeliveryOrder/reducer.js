import * as types from './actionType'

const initialState = {
  gettingAllReleaseOrder: false,
  allReleaseOrder: null,
  gettingReleaseOrder: false,
  ReleaseOrderData: null,
  updatingReleaseOrder: false,
  updateReleaseOrderResponse: false,
}

function ReleaseOrderReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_DELIVERY:
      return {
        ...state,
        gettingAllReleaseOrder: true,
      }
    case types.GET_ALL_DELIVERY_SUCCESS:
      return {
        ...state,
        gettingAllReleaseOrder: false,
        allReleaseOrder: action.payload,
      }
    case types.GET_ALL_DELIVERY_FAILED:
      return {
        ...state,
        gettingAllReleaseOrder: false,
      }
    case types.GET_DELIVERY:
      return {
        ...state,
        gettingAllReleaseOrder: true,
      }
    case types.GET_DELIVERY_SUCCESS:
      return {
        ...state,
        gettingAllReleaseOrder: false,
        ReleaseOrderData: action.payload,
      }
    case types.GET_DELIVERY_FAILED:
      return {
        ...state,
        gettingReleaseOrder: false,
      }
    case types.UPDATE_DELIVERY:
      return {
        ...state,
        updatingReleaseOrder: true,
        updateReleaseOrderResponse: null
      }
    case types.UPDATE_DELIVERY_SUCCESS:
      return {
        ...state,
        updatingReleaseOrder: false,
        updateReleaseOrderResponse: action.payload
      }
    case types.UPDATE_DELIVERY_FAILED:
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
