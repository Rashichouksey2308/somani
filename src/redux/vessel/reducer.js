import * as types from './actionType'

const initialState = {
  gettingVessel: false,
  allVessel: null,
  Vessel: null,
  updatingVessel: false,
  uploadingDoc: false,
  uploadedDoc: {}
}

function VesselReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_VESSEL:
      return {
        ...state,
        gettingVessel: true
      }
    case types.GET_VESSEL_SUCCESS:
      return {
        ...state,
        gettingVessel: false,
        Vessel: action.payload
      }
    case types.GET_VESSEL_FAILED:
      return {
        ...state,
        gettingVessel: false
      }
    case types.GET_ALL_VESSEL:
      return {
        ...state,
        gettingVessel: true
      }
    case types.GET_ALL_VESSEL_SUCCESS:
      return {
        ...state,
        gettingVessel: false,
        allVessel: action.payload
      }
    case types.GET_ALL_VESSEL_FAILED:
      return {
        ...state,
        gettingVessel: false
      }
    case types.UPDATE_VESSEL:
      return {
        ...state,
        updatingVessel: true
      }
    case types.UPDATE_VESSEL_SUCCESS:
      return {
        ...state,
        updatingVessel: false
      }
    case types.UPDATE_VESSEL_FAILED:
      return {
        ...state,
        updatingVessel: false
      }

    case types.UPLOAD_DOC_VESSEL:
      return {
        ...state,
        uploadingDoc: true
      }
    case types.UPLOAD_DOC_VESSEL_SUCCESS:
      return {
        ...state,
        uploadingDoc: false,
        uploadedDoc: action.payload
      }
    case types.UPLOAD_DOC_VESSEL_FAILED:
      return {
        ...state,
        uploadingDoc: false
      }
    default:
      return state
  }
}

export default VesselReducer
