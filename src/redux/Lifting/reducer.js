import * as types from './actionType'

const initialState = {
    gettingLiftingData: false,
    allLiftingData: null,
    getLiftingData: false,
    liftingData: null,
    updatingLiftingData: false,
    updatingLiftingDataResponse: null,
   }

function LiftingReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_LIFTING_DATA:
            return {
                ...state,
                getLiftingData: true,
                liftingData: null,
            }
        case types.GET_LIFTING_DATA_SUCCESS:
            return {
                ...state,
                getLiftingData: false,
                liftingData: action.payload,
            }
        case types.GET_LIFTING_DATA_FAILED:
            return {
                ...state,
                getLiftingData: false,
                liftingData: null,
            }
        case types.GET_ALL_LIFTING_DATA:
            return {
                ...state,
                gettingLiftingData: true,
            }
        case types.GET_ALL_LIFTING_DATA_SUCCESS:
            return {
                ...state,
                gettingLiftingData: false,
                allLiftingData: action.payload,
            }
        case types.GET_ALL_LIFTING_DATA_FAILED:
            return {
                ...state,
                gettingLiftingData: false,
            }
        case types.UPDATE_LIFTING_DATA:
            return {
                ...state,
                updatingLiftingData: true,
            }
        case types.UPDATE_LIFTING_DATA_SUCCESS:
            return {
                ...state,
                updatingLiftingData: false,
                updatingLiftingDataResponse: action.payload,
            }
        case types.UPDATE_LIFTING_DATA_FAILED:
            return {
                ...state,
                updatingLiftingData: false,
            }

        default:
            return state
    }
}

export default LiftingReducer