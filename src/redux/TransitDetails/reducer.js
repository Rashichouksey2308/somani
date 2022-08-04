import * as types from './actionType'

const initialState = {
    gettingTransitDetails: false,
    allTransitDetails: null,
    TransitDetails: null,
    updatingTransitDetails: false,
    gettingAdditionalData: false,
    additionalData: null,

}

function TransitDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TRANSITDETAILS:
            return {
                ...state,
                gettingTransitDetails: true,
            }
        case types.GET_TRANSITDETAILS_SUCCESS:
            return {
                ...state,
                gettingTransitDetails: false,
                TransitDetails: action.payload,
            }
        case types.GET_TRANSITDETAILS_FAILED:
            return {
                ...state,
                gettingTransitDetails: false,
            }
        case types.GET_ALL_TRANSITDETAILS:
            return {
                ...state,
                gettingTransitDetails: true,
            }
        case types.GET_ALL_TRANSITDETAILS_SUCCESS:
            return {
                ...state,
                gettingTransitDetails: false,
                allTransitDetails: action.payload,
            }
        case types.GET_ALL_TRANSITDETAILS_FAILED:
            return {
                ...state,
                gettingTransitDetails: false,
            }
        case types.UPDATE_TRANSITDETAILS:
            return {
                ...state,
                updatingTransitDetails: true,
            }
        case types.UPDATE_TRANSITDETAILS_SUCCESS:
            return {
                ...state,
                updatingTransitDetails: false,
            }
        case types.UPDATE_TRANSITDETAILS_FAILED:
            return {
                ...state,
                updatingTransitDetails: false,
            }
            case types.GET_ADDITTIONAL_DATA:
                return {
                    ...state,
                    gettingAdditionalData: true,
                }
            case types.GET_ADDITTIONAL_DATA_SUCCESS:
                return {
                    ...state,
                    gettingAdditionalData: false,
                    additionalData: action.payload,
                }
            case types.GET_ADDITTIONAL_DATA_FAILED:
                return {
                    ...state,
                    gettingAdditionalData: false,
                }
        default:
            return state
    }
}

export default TransitDetailsReducer