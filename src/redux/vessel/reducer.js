import * as types from './actionType'

const initialState = {
    gettingVessel: false,
    Vessel: null,
    updatingVessel: false,

}

function VesselReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_VESSEL:
            return {
                ...state,
                gettingVessel: true,
            }
        case types.GET_VESSEL_SUCCESS:
            return {
                ...state,
                gettingVessel: false,
                Vessel: action.payload,
            }
        case types.GET_VESSEL_FAILED:
            return {
                ...state,
                gettingVessel: false,
            }

        case types.UPDATE_LC_MODULE:
            return {
                ...state,
                updatingVessel: true,
            }
        case types.UPDATE_LC_MODULE_SUCCESS:
            return {
                ...state,
                updatingVessel: false,
            }
        case types.UPDATE_LC_MODULE_FAILED:
            return {
                ...state,
                updatingVessel: false,
            }

        default:
            return state
    }
}

export default VesselReducer