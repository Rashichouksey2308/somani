import * as types from './actionType';

const initialState = {
    Fetchingmcareport: false,
    mcaReport: null,
};

function McaReportReducer(state = initialState, action) {
    switch (action.type) {
        case types.PLACE_ORDER:
            return {
                ...state,
                Fetchingmcareport: true,
                mcaReport: null,
            };
        case types.PLACE_ORDER_SUCCESSFULL:
            return {
                ...state,
                Fetchingmcareport: false,
                mcaReport: action.payload,
            };
        case types.PLACE_ORDER_FAILED:
            return {
                ...state,
                Fetchingmcareport: false,
                mcaReport: null,
            };

        default:
            return state;
    }
}
export default McaReportReducer;
