import * as types from './actionType'

const initialState = {
  gettingAllDocument: false,
  allDocument: null,
  gettingDocument: false,
  documentResponse: null,
  updatingDocument: false,
  updatedDocumentResponse: false,
  creatingDocument: false,
  createdDocument: null
}

function DocumentReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_DOCUMENT:
      return {
        ...state,
        gettingAllDocument: true
      }

    case types.GET_ALL_DOCUMENT_SUCCESS:
      return {
        ...state,
        gettingAllDocument: false,
        allDocument: action.payload
      }

    case types.GET_ALL_DOCUMENT_FAILED:
      return {
        ...state,
        gettingAllDocument: false,
        allDocument: null
      }

    case types.GET_DOCUMENT:
      return {
        ...state,
        gettingDocument: true
      }

    case types.GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        gettingDocument: false,
        documentResponse: action.payload
      }

    case types.GET_DOCUMENT_FAILED:
      return {
        ...state,
        gettingDocument: false
      }

    case types.UPDATE_DOCUMENT:
      return {
        ...state,
        updatingDocument: true,
        updatedDocumentResponse: null
      }
    case types.UPDATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        updatingDocument: false,
        updatedDocumentResponse: action.payload
      }
    case types.UPDATE_DOCUMENT_FAILED:
      return {
        ...state,
        updatingDocument: false,
        updatedDocumentResponse: null
      }

    case types.CREATE_DOCUMENT:
      return {
        ...state,
        creatingDocument: true,
        createdDocument: null
      }
    case types.CREATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        creatingDocument: false,
        createdDocument: action.payload
      }
    case types.CREATE_DOCUMENT_FAILED:
      return {
        ...state,
        creatingDocument: false,
        createdDocument: null
      }

    default:
      return state
  }
}

export default DocumentReducer