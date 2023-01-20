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
    gettingGoNoGoLogicPickupRecords: false,
    goNoGoLogicPickupRecords: {},
    gettingUserPickupRecords: false,
    userPickupRecords: {},
    gettingInternalCompanyPickupRecords: false,
    internalCompanyPickupRecords: {},
    gettingUserMasterDetails: false,
    userMasterDetails: {},
    updatingUserMasterRemarks: false,
    updateUserMasterRemarkDetails: {},
    gettingGoNoGoLogicDetails: false,
    goNoGoLogicDetails: {},
    updatingGoNoGoLogicRemarks: false,
    goNoGoLogicRemarkDetails: {},
    gettingInternalCompanyDetails: false,
    internalCompanyDetails: {},
    updatingInternalCompanyRemarks: false,
    internalCompanyRemarkDetails: {},
    gettingVendorDetails: false,
    vendorDetails: {},
    updatingVendorRemarks: false,
    vendorRemarkDetails: {},
    gettingTransactionSummaryRemarks: false,
    transactionSummaryDetails: {},
    updatingTransactionSummaryRemarks: false,
    transactionSummaryRemarkDetails: {},
    gettingLcModuleDetails: false,
    lcModuleDetails: {},
    updatingLcModuleRemarks: false,
    lcModuleRemarkDetails: {},
    gettingGenericDetails: false,
    genericDetails: {},
    updatingGenericRemarks: false,
    genericRemark: {},
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
            
        case types.GET_USER_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingUserPickupRecords: false,
                userPickupRecords: action.payload,
            };
    
        case types.GET_USER_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingUserPickupRecords: false,
                userPickupRecords: {},
            };

        case types.GET_GO_NO_GO_LOGIC_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingGoNoGoLogicPickupRecords: false,
                goNoGoLogicPickupRecords: action.payload,
            };

        case types.GET_GO_NO_GO_LOGIC_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingGoNoGoLogicPickupRecords: false,
                goNoGoLogicPickupRecords: {},
            };

        case types.GET_INTERNAL_COMPANY_PICKUP_RECORDS_SUCCESSFULL:
            return {
                ...state,
                gettingInternalCompanyPickupRecords: false,
                internalCompanyPickupRecords: action.payload,
            };

        case types.GET_INTERNAL_COMPANY_PICKUP_RECORDS_FAILED:
            return {
                ...state,
                gettingInternalCompanyPickupRecords: false,
                internalCompanyPickupRecords: {},
            };
    
        case types.GET_USER_MASTER_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingUserMasterDetails: false,
                userMasterDetails: action.payload,
            };

        case types.GET_USER_MASTER_DETAILS_FAILED:
            return {
                ...state,
                gettingUserMasterDetails: false,
                userMasterDetails: {},
            };

        case types.UPDATE_USER_MASTER_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingUserMasterRemarks: false,
                updateUserMasterRemarkDetails: action.payload,
            };

        case types.UPDATE_USER_MASTER_REMARK_FAILED:
            return {
                ...state,
                updatingUserMasterRemarks: false,
                updateUserMasterRemarkDetails: {},
            }

        case types.GET_GO_NO_GO_LOGIC_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingGoNoGoLogicDetails: false,
                goNoGoLogicDetails: action.payload,
            };

        case types.GET_GO_NO_GO_LOGIC_DETAILS_FAILED:
            return {
                ...state,
                gettingGoNoGoLogicDetails: false,
                goNoGoLogicDetails: {},
            };

        
        case types.UPDATE_GO_NO_GO_LOGIC_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingGoNoGoLogicRemarks: false,
                goNoGoLogicRemarkDetails: action.payload,
            };

        case types.UPDATE_GO_NO_GO_LOGIC_REMARK_FAILED:
            return {
                ...state,
                updatingGoNoGoLogicRemarks: false,
                goNoGoLogicRemarkDetails: {},
            }

        case types.GET_INTERNAL_COMPANY_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingInternalCompanyDetails: false,
                internalCompanyDetails: action.payload,
            };

        case types.GET_INTERNAL_COMPANY_DETAILS_FAILED:
            return {
                ...state,
                gettingInternalCompanyDetails: false,
                internalCompanyDetails: {},
            };

        
        case types.UPDATE_INTERNAL_COMPANY_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingInternalCompanyRemarks: false,
                internalCompanyRemarkDetails: action.payload,
            };

        case types.UPDATE_INTERNAL_COMPANY_REMARK_FAILED:
            return {
                ...state,
                updatingInternalCompanyRemarks: false,
                internalCompanyRemarkDetails: {},
            }

        case types.GET_VENDOR_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingVendorDetails: false,
                vendorDetails: action.payload,
            };

        case types.GET_VENDOR_DETAILS_FAILED:
            return {
                ...state,
                gettingVendorDetails: false,
                vendorDetails: {},
            };
            
        case types.UPDATE_VENDOR_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingVendorRemarks: false,
                vendorRemarkDetails: action.payload,
            };

        case types.UPDATE_VENDOR_REMARK_FAILED:
            return {
                ...state,
                updatingVendorRemarks: false,
                vendorRemarkDetails: {},
            }

        case types.GET_TRANSACTION_SUMMARY_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingTransactionSummaryRemarks: false,
                transactionSummaryDetails: action.payload,
            }
        
        case types.GET_TRANSACTION_SUMMARY_DETAILS_FAILED:
            return {
                ...state,
                gettingTransactionSummaryRemarks: false,
                transactionSummaryDetails: {},
            }

        case types.UPDATE_TRANSACTION_SUMMARY_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingTransactionSummaryRemarks: false,
                transactionSummaryRemarkDetails: action.payload,
            };

        case types.UPDATE_TRANSACTION_SUMMARY_REMARK_FAILED:
            return {
                ...state,
                updatingTransactionSummaryRemarks: false,
                transactionSummaryRemarkDetails: {},
            }

        case types.GET_LC_MODULE_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingLcModuleDetails: false,
                lcModuleDetails: action.payload,
            };

        case types.GET_LC_MODULE_DETAILS_FAILED:
            return {
                ...state,
                gettingLcModuleDetails: false,
                lcModuleDetails: {},
            };

        case types.UPDATE_LC_MODULE_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingLcModuleRemarks: false,
                lcModuleRemarkDetails: action.payload,
            };

        case types.UPDATE_LC_MODULE_REMARK_FAILED:
            return {
                ...state,
                updatingLcModuleRemarks: false,
                lcModuleRemarkDetails: {},
            }
               
        case types.GET_GENERIC_DETAILS_SUCCESSFULL:
            return {
                ...state,
                gettingGenericDetails: false,
                genericDetails: action.payload,
            };

        case types.GET_GENERIC_DETAILS_FAILED:
            return {
                ...state,
                gettingGenericDetails: false,
                genericDetails: {},
            };

        case types.UPDATE_GENERIC_REMARK_SUCCESSFULL:
            return {
                ...state,
                updatingGenericRemarks: false,
                genericRemark: action.payload,
            };

        case types.UPDATE_GENERIC_REMARK_FAILED:
            return {
                ...state,
                updatingGenericRemarks: false,
                genericRemark: {},
            };

        default:
            return state;
    }
}

export default CheckerReducer;