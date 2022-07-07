import * as types from './actionType'

const initialState = {
  gettingBuyerList: true,
  buyerList: null,
  gettingAllBuyerList: true,
  allBuyerList: [],
  creatingBuyer: false,
  createdBuyerResponse: null,
  updatingBuyer: false,
  updatedBuyerResponse: null,
  deletingBuyer: false,
  deletedBuyerResponse: null,
  selectedBuyer: null,
  document: {},
  gstDocument: {},
  gettingGstList: true,
  gstList: null,
  gettingOrderList: true,
  orderList: null

}

function BuyerReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BUYER:
      return {
        ...state,
        gettingBuyerList: true,
        buyerList: [],
      }

    case types.GET_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingBuyerList: false,
        buyerList: action.payload,
      }

    case types.GET_BUYER_FAILED:
      return {
        ...state,
        gettingBuyerList: false,
        buyerList: [],
      }
    case types.GET_ALL_BUYER:
      return {
        ...state,
        gettingAllBuyerList: true,
        allBuyerList: [],
      }

    case types.GET_ALL_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingAllBuyerList: false,
        allBuyerList: action.payload,
      }

    case types.GET_ALL_BUYER_FAILED:
      return {
        ...state,
        gettingAllBuyerList: false,
        allBuyerList: [],
      }
    case types.GET_ALL_ORDER:
      return {
        ...state,
        gettingOrderList: true,
        orderList: null,
      }

    case types.GET_ALL_ORDER_SUCCESSFULL:
      return {
        ...state,
        gettingOrderList: false,
        orderList: action.payload,
      }

    case types.GET_ALL_ORDER_FAILED:
      return {
        ...state,
        gettingOrderList: false,
        orderList: null,
      }

    case types.REGISTER_BUYER:
      return {
        ...state,
        creatingBuyer: true,
        createdBuyerResponse: null,
      }

    case types.REGISTER_BUYER_SUCCESS:
      return {
        ...state,
        creatingBuyer: false,
        createdBuyerResponse: action.payload,
      }

    case types.REGISTER_BUYER_FAILED:
      return {
        ...state,
        creatingBuyer: false,
        createdBuyerResponse: null,
      }

    case types.UPDATE_BUYER:
      return {
        ...state,
        updatingBuyer: true,
        updatedBuyerResponse: null,
      }
    case types.UPDATE_BUYER_SUCCESSFULL:
      return {
        ...state,
        updatingBuyer: false,
        updatedBuyerResponse: action.payload,
      }
    case types.UPDATE_BUYER_FAILED:
      return {
        ...state,
        updatingBuyer: false,
        updatedBuyerResponse: null,
      }
    case types.DELETE_BUYER:
      return {
        ...state,
        deletingBuyer: true,
        deletedBuyerResponse: null,
      }
    case types.DELETE_BUYER_SUCCESSFULL:
      return {
        ...state,
        deletingBuyer: false,
        deletedBuyerResponse: action.payload,
      }
    case types.DELETE_BUYER_FAILED:
      return {
        ...state,
        deletingBuyer: false,
        deletedBuyerResponse: null,
      }

    case types.SET_BUYER:
      return {
        ...state,
        selectedBuyer: action.payload,
      }

    case types.SET_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      }

    case types.UPLOADDOCUMENT:
      return{
        ...state,
        gstDocument: {}
      }
    case types.UPLOADDOCUMENT_SUCCESS:
      return{
        ...state,
        gstDocument: action.payload
      }
    case types.UPLOADDOCUMENT_FAILED:
      return{
        ...state,
        gstDocument: {}
      }

    case types.GET_GST:
      return {
        ...state,
        gettingGstList: true,
        gstList: null,
      }

    case types.GET_GST_SUCCESS:
      return {
        ...state,
        gettingGstList: false,
        gstList: action.payload,
      }

    case types.GET_GST_FAILED:
      return {
        ...state,
        gettingGstList: false,
        gstList: null,
      }

    default:
      return state
  }
}

export default BuyerReducer
