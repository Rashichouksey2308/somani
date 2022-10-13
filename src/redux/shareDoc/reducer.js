import * as types from './actionType'

const initialState = {
    shareDocument: false,
    shareDocumentResponse: null,
}

function ShareDocumentReducer(state = initialState, action) {
    switch (action.type) {
        case types.SHARE_DOCUMENT:
            return {
                ...state,
                shareDocument: true,
                shareDocumentResponse: null,
            }
        case types.SHARE_DOCUMENT_SUCCESS:
            return {
                ...state,
                shareDocument: false,
                shareDocumentResponse: action.payload,
            }
        case types.SHARE_DOCUMENT_FAILED:
            return {
                ...state,
                shareDocument: false,
                shareDocumentResponse: null,
            }

        default:
            return state
    }
}

export default ShareDocumentReducer