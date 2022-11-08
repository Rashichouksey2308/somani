<<<<<<< Updated upstream
import * as types from './actionType';

const initialState = {
  viewDocument: false,
  viewDocumentResponse: null,
};

function ViewDocumentReducer(state = initialState, action) {
=======
import * as types from './actionType'

const initialState = {
  viewDocument: false,
  viewDocumentResponse: null
}

function ViewDocumentReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.VEIW_DOCUMENT:
      return {
        ...state,
        viewDocument: true,
<<<<<<< Updated upstream
        viewDocumentResponse: null,
      };
=======
        viewDocumentResponse: null
      }
>>>>>>> Stashed changes
    case types.VEIW_DOCUMENT_SUCCESS:
      return {
        ...state,
        viewDocument: false,
<<<<<<< Updated upstream
        viewDocumentResponse: action.payload,
      };
=======
        viewDocumentResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.VEIW_DOCUMENT_FAILED:
      return {
        ...state,
        viewDocument: false,
<<<<<<< Updated upstream
        viewDocumentResponse: null,
      };

    default:
      return state;
  }
}

export default ViewDocumentReducer;
=======
        viewDocumentResponse: null
      }

    default:
      return state
  }
}

export default ViewDocumentReducer
>>>>>>> Stashed changes
