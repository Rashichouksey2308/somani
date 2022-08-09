import * as types from './actionType'

const initialState = {
  gettingDocuments: false,
  documentsFetched: null,
  addingDocument: false,
  deletingDocumet: false,
  updatingCam: false,
  fetchingKarzaGst: false,
}

function CreditReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_GST_KARZA:
      return {
        ...state,
        fetchingKarzaGst: true,
      }

    case types.GET_GST_KARZA_SUCCESS:
      return {
        ...state,
        fetchingKarzaGst: false,
      }
    case types.GET_GST_KARZA_FAILED:
      return {
        ...state,
        fetchingKarzaGst: false,
      }
    case types.GET_DOCUMENT:
      return {
        ...state,
        gettingDocuments: true,
      }

    case types.GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        gettingDocuments: false,
        documentsFetched: action.payload,
      }
    case types.GET_DOCUMENT_FAILED:
      return {
        ...state,
        gettingDocuments: false,
      }
    case types.UPDATE_CAM:
      return {
        ...state,
        updatingCam: true,
      }
    case types.UPDATE_CAM_SUCCESS:
      return {
        ...state,
        updatingCam: false,
      }
    case types.GET_DOCUMENT:
      return {
        ...state,
        updatingCam: false,
      }
    case types.ADD_DOCUMENT:
      return {
        ...state,
        addingDocument: true,
      }
    case types.ADD_DOCUMENT_SUCCESS:
      return {
        ...state,
        addingDocument: false,
      }
    case types.ADD_DOCUMENT_FAILED:
      return {
        ...state,
        addingDocument: false,
      }
    case types.DELETE_DOCUMENT:
      return {
        ...state,
        deletingDocumet: true,
      }
    case types.DELETE_DOCUMENT_SUCCESS:
      return {
        ...state,
        deletingDocumet: false,
      }
    case types.DELETE_DOCUMENT_FAILED:
      return {
        ...state,
        deletingDocumet: false,
      }
    default:
      return state
  }
}

export default CreditReducer
