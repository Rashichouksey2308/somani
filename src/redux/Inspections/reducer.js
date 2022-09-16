import * as types from './actionType'

const initialState = {
  gettingInspection: false,
  allInspection: null,
  Inspection: null,
  updatingInspection: false,
  modifiedDate: null,
}

function InspectionReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_INSPECTION:
      return {
        ...state,
        gettingInspection: true,
      }
    case types.GET_INSPECTION_SUCCESS:
      return {
        ...state,
        gettingInspection: false,
        Inspection: action.payload,
      }
    case types.GET_UPDATED_DATE:
      return {
        ...state,

        modifiedDate: action.payload,
      }
    case types.GET_INSPECTION_FAILED:
      return {
        ...state,
        gettingInspection: false,
      }
    case types.GET_ALL_INSPECTION:
      return {
        ...state,
        gettingInspection: true,
      }
    case types.GET_ALL_INSPECTION_SUCCESS:
      return {
        ...state,
        gettingInspection: false,
        allInspection: action.payload,
      }
    case types.GET_ALL_INSPECTION_FAILED:
      return {
        ...state,
        gettingInspection: false,
      }
    case types.UPDATE_INSPECTION:
      return {
        ...state,
        updatingInspection: true,
      }
    case types.UPDATE_INSPECTION_SUCCESS:
      return {
        ...state,
        updatingInspection: false,
      }
    case types.UPDATE_INSPECTION_FAILED:
      return {
        ...state,
        updatingInspection: false,
      }

    default:
      return state
  }
}

export default InspectionReducer
