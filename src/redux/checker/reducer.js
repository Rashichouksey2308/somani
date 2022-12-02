import * as types from './actionType';

const initialState = {
    gettingCommodityDetails: false,
    commodityDetails: {},
    updatingCommodityRemarks: false,
    updateCommodityDetails: {},
    gettingUserDetails: false,
    userDetails: {},
    gettingInspectionDetails: false,
    inspectionDetails: {},

};

function CheckerReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COMMODITY_SUCCESSFULL:
            return {
                ...state,
                gettingCommodityDetails: false,
                commodityDetails: action.payload,
            };

        case types.GET_COMMODITY_FAILED:
            return {
                ...state,
                gettingCommodityDetails: false,
                commodityDetails: {},
            };

        case types.UPDATE_COMMODITY_SUCCESSFULL:
            return {
                ...state,
                updatingCommodityRemarks: false,
                updateCommodityDetails: action.payload,
            };

        case types.UPDATE_COMMODITY_FAILED:
            return {
                ...state,
                updatingCommodityRemarks: false,
                updateCommodityDetails: {},
            };

        case types.GET_USER_SUCCESSFULL:
            return {
                ...state,
                gettingUserDetails: false,
                userDetails: action.payload,
            };

        case types.GET_USER_FAILED:
            return {
                ...state,
                gettingUserDetails: false,
                commodityDetails: {},
            };

        case types.GET_INSPECTION_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingInspectionDetails: false,
                inspectionDetails: action.payload,
            };

        case types.GET_INSPECTION_DETAILS_FAILED:
            return {
                ...state,
                gettingInspectionDetails: false,
                inspectionDetails: {},
            };
        default:
            return state;
    }
}

export default CheckerReducer;