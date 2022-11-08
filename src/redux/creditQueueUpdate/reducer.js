<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingDocuments: false,
  documentsFetched: null,
  addingDocument: false,
  deletingDocumet: false,
  updatingCam: false,
<<<<<<< Updated upstream
  fetchingKarzaGst: false,
};

function CreditReducer(state = initialState, action) {
=======
  fetchingKarzaGst: false
}

function CreditReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_GST_KARZA:
      return {
        ...state,
<<<<<<< Updated upstream
        fetchingKarzaGst: true,
      };
=======
        fetchingKarzaGst: true
      }
>>>>>>> Stashed changes

    case types.GET_GST_KARZA_SUCCESS:
      return {
        ...state,
<<<<<<< Updated upstream
        fetchingKarzaGst: false,
      };
    case types.GET_GST_KARZA_FAILED:
      return {
        ...state,
        fetchingKarzaGst: false,
      };
    case types.GET_DOCUMENT:
      return {
        ...state,
        gettingDocuments: true,
      };
=======
        fetchingKarzaGst: false
      }
    case types.GET_GST_KARZA_FAILED:
      return {
        ...state,
        fetchingKarzaGst: false
      }
    case types.GET_DOCUMENT:
      return {
        ...state,
        gettingDocuments: true
      }
>>>>>>> Stashed changes

    case types.GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        gettingDocuments: false,
<<<<<<< Updated upstream
        documentsFetched: action.payload,
      };
    case types.GET_DOCUMENT_FAILED:
      return {
        ...state,
        gettingDocuments: false,
      };
    case types.UPDATE_CAM:
      return {
        ...state,
        updatingCam: true,
      };
    case types.UPDATE_CAM_SUCCESS:
      return {
        ...state,
        updatingCam: false,
      };
    case types.GET_DOCUMENT:
      return {
        ...state,
        updatingCam: false,
      };
    case types.ADD_DOCUMENT:
      return {
        ...state,
        addingDocument: true,
      };
    case types.ADD_DOCUMENT_SUCCESS:
      return {
        ...state,
        addingDocument: false,
      };
    case types.ADD_DOCUMENT_FAILED:
      return {
        ...state,
        addingDocument: false,
      };
    case types.DELETE_DOCUMENT:
      return {
        ...state,
        deletingDocumet: true,
      };
    case types.DELETE_DOCUMENT_SUCCESS:
      return {
        ...state,
        deletingDocumet: false,
      };
    case types.DELETE_DOCUMENT_FAILED:
      return {
        ...state,
        deletingDocumet: false,
      };
    default:
      return state;
  }
}

export default CreditReducer;
=======
        documentsFetched: action.payload
      }
    case types.GET_DOCUMENT_FAILED:
      return {
        ...state,
        gettingDocuments: false
      }
    case types.UPDATE_CAM:
      return {
        ...state,
        updatingCam: true
      }
    case types.UPDATE_CAM_SUCCESS:
      return {
        ...state,
        updatingCam: false
      }
    case types.GET_DOCUMENT:
      return {
        ...state,
        updatingCam: false
      }
    case types.ADD_DOCUMENT:
      return {
        ...state,
        addingDocument: true
      }
    case types.ADD_DOCUMENT_SUCCESS:
      return {
        ...state,
        addingDocument: false
      }
    case types.ADD_DOCUMENT_FAILED:
      return {
        ...state,
        addingDocument: false
      }
    case types.DELETE_DOCUMENT:
      return {
        ...state,
        deletingDocumet: true
      }
    case types.DELETE_DOCUMENT_SUCCESS:
      return {
        ...state,
        deletingDocumet: false
      }
    case types.DELETE_DOCUMENT_FAILED:
      return {
        ...state,
        deletingDocumet: false
      }
    default:
      return state
  }
}

export default CreditReducer
>>>>>>> Stashed changes
