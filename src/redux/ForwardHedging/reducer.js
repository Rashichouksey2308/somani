import * as types from './actionType'

const initialState = {
    gettingForwardHedging: false,
    allForwardHedging: null,
    ForwardHedging: null,
    updatingForwardHedging: false,
   


}

function ForwardHedgingReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_FORWARDHEDGING:
            return {
                ...state,
                gettingForwardHedging: true,
            }
        case types.GET_ALL_FORWARDHEDGING_SUCCESS:
            return {
                ...state,
                gettingForwardHedging: false,
                allForwardHedging: action.payload,
            }
        case types.GET_ALL_FORWARDHEDGING_FAILED:
            return {
                ...state,
                gettingForwardHedging: false,
            }
        case types.GET_FORWARDHEDGING:
            return {
                ...state,
                gettingForwardHedging: true,
            }
        case types.GET_FORWARDHEDGING_SUCCESS:
            return {
                ...state,
                gettingForwardHedging: false,
                ForwardHedging: action.payload,
            }
        case types.GET_FORWARDHEDGING_FAILED:
            return {
                ...state,
                gettingForwardHedging: false,
            }
        case types.UPDATE_FORWARDHEDGING:
            return {
                ...state,
                gettingForwardHedging: true,
            }
        case types.UPDATE_FORWARDHEDGING_SUCCESS:
            return {
                ...state,
                gettingForwardHedging: false,
            }
        case types.UPDATE_FORWARDHEDGING_FAILED:
            return {
                ...state,
                gettingForwardHedging: false,
            }

        default:
            return state
    }
}

export default ForwardHedgingReducer