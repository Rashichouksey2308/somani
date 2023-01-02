import * as types from './actionType';

const initialState = {
    gettingCommodityDetails: false,
    commodityDetails: {},
    updatingCommodityRemarks: false,
    updateCommodityDetails: {},
    gettingCommodityPickupRecords: false,
    commodityPickupRecords: {},
    gettingUserDetails: false,
    gettingVendorPickupRecords: false,
    vendorPickupRecords: {},
    userDetails: {},
    gettingInspectionDetails: false,
    inspectionDetails: {},
    updatingInspectionRemarks: false,
    updateInspectionDetails: {},
    gettingInspectionPickupRecords: false,
    inspectionPickupRecords: {},
    gettingCreditCAMPickupRecords: false,
    creditCAMPickupRecords: {},
    gettingTransactionSummaryPickupRecords: false,
    transactionSummaryPickupRecords: {},
    gettingGenericsPickupRecords: false,
    genericsPickupRecords: {},
    gettingLetterOfCreditPickupRecords: false,
    letterOfCreditPickupRecords: {},
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

        case types.GET_COMMODITY_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingCommodityPickupRecords: false,
                commodityPickupRecords: action.payload,
            };

        case types.GET_COMMODITY_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingCommodityPickupRecords: false,
                commodityPickupRecords: {},
            };

        case types.GET_USER_SUCCESSFULL:
            return {
                ...state,
                gettingUserDetails: false,
                userDetails: action.payload,
            };

        case types.GET_VENDOR_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingVendorPickupRecords: false,
                vendorPickupRecords: action.payload,
            };

        case types.GET_VENDOR_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingVendorPickupRecords: false,
                vendorPickupRecords: {},
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

        case types.UPDATE_INSPECTION_SUCCESSFULL:
            return {
                ...state,
                updatingInspectionRemarks: false,
                updateInspectionDetails: action.payload,
            };

        case types.UPDATE_INSPECTION_FAILED:
            return {
                ...state,
                updatingInspectionRemarks: false,
                updateInspectionDetails: {},
            };

        case types.GET_INSPECTION_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingInspectionPickupRecords: false,
                inspectionPickupRecords: action.payload,
            };

        case types.GET_INSPECTION_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingInspectionPickupRecords: false,
                inspectionPickupRecords: {},
            };

        case types.GET_CREDIT_CAM_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingCreditCAMPickupRecords: false,
                creditCAMPickupRecords: action.payload,
            };

        case types.GET_CREDIT_CAM_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingCreditCAMPickupRecords: false,
                creditCAMPickupRecords: {},
            };

        case types.GET_TRANSACTION_SUMMARY_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingTransactionSummaryPickupRecords: false,
                transactionSummaryPickupRecords: action.payload,
            };

        case types.GET_TRANSACTION_SUMMARY_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingTransactionSummaryPickupRecords: false,
                transactionSummaryPickupRecords: {},
            };

        case types.GET_GENERICS_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingGenericsPickupRecords: false,
                genericsPickupRecords: action.payload,
            };

        case types.GET_GENERICS_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingGenericsPickupRecords: false,
                genericsPickupRecords: {},
            };

        case types.GET_LETTER_OF_CREDIT_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingLetterOfCreditPickupRecords: false,
                letterOfCreditPickupRecords: action.payload,
            };

        case types.GET_LETTER_OF_CREDIT_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingLetterOfCreditPickupRecords: false,
                letterOfCreditPickupRecords: {},
            };

        default:
            return state;
    }
}

export default CheckerReducer;