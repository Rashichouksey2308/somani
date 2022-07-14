import * as types from './actionType'

const initialState = {
    gettingDocuments: false,
    DocumentsFetched: null,
    updatingCam: false
}



function CreditReducer(state = initialState, action) {

    switch (action.type) {
        case types.GET_DOCUMENT:
            return {
                ...state,
                gettingDocuments: true
            }

        case types.GET_DOCUMENT_SUCCESS:
            return {
                ...state,
                gettingDocuments: false,
                DocumentsFetched: action.payload
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
        default:
            return state
    }
}

export default CreditReducer