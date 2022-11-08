<<<<<<< Updated upstream
import * as types from './actionType';

const initialState = {
  shareDocument: false,
  shareDocumentResponse: null,
};

function ShareDocumentReducer(state = initialState, action) {
=======
import * as types from './actionType'

const initialState = {
  shareDocument: false,
  shareDocumentResponse: null
}

function ShareDocumentReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.SHARE_DOCUMENT:
      return {
        ...state,
        shareDocument: true,
<<<<<<< Updated upstream
        shareDocumentResponse: null,
      };
=======
        shareDocumentResponse: null
      }
>>>>>>> Stashed changes
    case types.SHARE_DOCUMENT_SUCCESS:
      return {
        ...state,
        shareDocument: false,
<<<<<<< Updated upstream
        shareDocumentResponse: action.payload,
      };
=======
        shareDocumentResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.SHARE_DOCUMENT_FAILED:
      return {
        ...state,
        shareDocument: false,
<<<<<<< Updated upstream
        shareDocumentResponse: null,
      };

    default:
      return state;
  }
}

export default ShareDocumentReducer;
=======
        shareDocumentResponse: null
      }

    default:
      return state
  }
}

export default ShareDocumentReducer
>>>>>>> Stashed changes
