import * as types from './actionType'

const initialState = {
    viewDocument: false,
    viewDocumentResponse: null,
}

function ViewDocumentReducer(state = initialState, action) {
    switch (action.type) {
        case types.VEIW_DOCUMENT:
            return {
                ...state,
                viewDocument: true,
                viewDocumentResponse: null,
            }
        case types.VEIW_DOCUMENT_SUCCESS:
            return {
                ...state,
                viewDocument: false,
                viewDocumentResponse: action.payload,
            }
        case types.VEIW_DOCUMENT_FAILED:
            return {
                ...state,
                viewDocument: false,
                viewDocumentResponse: null,
            }

        default:
            return state
    }
}

export default ViewDocumentReducer