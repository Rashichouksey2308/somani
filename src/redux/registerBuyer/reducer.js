import * as types from "./actionType";

const initialState = {

    gettingBuyerList: true,
    buyerList: [],
    creatingBuyer: false,
    createdBuyerResponse: null,
    updatingBuyer: false,
    updatedBuyerResponse: null,
    deletingBuyer: false,
    deletedBuyerResponse: null,
    selectedBuyer: null,
    document: []

}

function BuyerReducer(state = initialState, action){

    switch(action.type){

        case types.GET_Buyer:
            return{
                ...state,
                gettingBuyerList: true,
                buyerList: []
            };

        case types.GET_BUYER_SUCCESSFULL:
            return{
                ...state,
                gettingBuyerList: false,
                buyerList: action.payload
            };

        case types.GET_BUYER_FAILED:
            return{
                ...state,
                gettingBuyerList: false,
                buyerList: []
            };

        case types.REGISTER_BUYER:
            return{
                ...state,
                creatingBuyer: true,
                createdBuyerResponse: null
            };
    
        case types.REGISTER_BUYER_SUCCESSFULL:
            return{
                ...state,
                creatingBuyer: false,
                createdBuyerResponse: action.payload
            };

        case types.REGISTER_BUYER_FAILED:
            return{
                ...state,
                creatingBuyer: false,
                createdBuyerResponse: null
            };

        case types.UPDATE_BUYER:
            return {
                ...state,
                updatingBuyer: true,
                updatedBuyerResponse: null,
                };
        case types.UPDATE_Buyer_SUCCESSFULL:
            return {
                ...state,
                updatingBuyer: false,
                updatedBuyerResponse: action.payload,
                };
        case types.UPDATE_BUYER_FAILED:
            return {
                ...state,
                updatingBuyer: false,
                updatedBuyerResponse: null,
                };
        case types.DELETE_BUYER:
            return {
                ...state,
                deletingBuyer: true,
                deletedBuyerResponse: null,
                };
        case types.DELETE_BUYER_SUCCESSFULL:
            return {
                ...state,
                deletingBuyer: false,
                deletedBuyerResponse: action.payload,
                };
        case types.DELETE_BUYER_FAILED:
            return {
                ...state,
                deletingBuyer: false,
                deletedBuyerResponse: null,
                };

        case types.SET_BUYER:
            return {
                ...state,
                selectedBuyer: action.payload
            };

        case types.SET_DOCUMENT:
            return {
                ...state,
                document: action.payload
            }
        
        default:
            return state;
    }
}

export default BuyerReducer;