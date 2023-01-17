import * as types from './actionType';

const initialState = {
  gettingBuyerList: false,
  buyerList: null,
  gettingAllBuyerList: false,
  allBuyerList: [],
  gettingUpdatedBuyerList: false,
  updatedBuyerList: [],
  creatingBuyer: false,
  createdBuyerResponse: null,
  updatingBuyer: false,
  updatedBuyerResponse: null,
  deletingBuyer: false,
  deletedBuyerResponse: null,
  selectedBuyer: null,
  document: {},
  gstDocument: {},
  gettingGstList: false,
  gstList: null,
  gettingOrderList: false,
  orderList: null,
  gettingSingleOrder: false,
  singleOrder: [],
  gettingOrderLeads: false,
  getOrderLeads: [],
  // leads search Filters

  // gettingCommodityFilters: false,
  gettingCommodityFilters: false,
  getCommodityFilters: [],

  gettingCompanyFilters: false,
  getCompanyFilters: [],

  gettingStatusFilters: false,
  getStatusFilters: [],
};

function BuyerReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BUYER:
      return {
        ...state,
        gettingBuyerList: true,
        buyerList: [],
      };

    case types.GET_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingBuyerList: false,
        buyerList: action.payload,
      };

    case types.GET_BUYER_FAILED:
      return {
        ...state,
        gettingBuyerList: false,
        buyerList: [],
      };
    case types.GET_ALL_BUYER:
      return {
        ...state,
        gettingAllBuyerList: true,
        allBuyerList: [],
      };

    case types.GET_ALL_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingAllBuyerList: false,
        allBuyerList: action.payload,
      };

    case types.GET_ALL_BUYER_FAILED:
      return {
        ...state,
        gettingAllBuyerList: false,
        allBuyerList: [],
      };

    case types.GET_ALL_UPDATED_BUYER:
      return {
        ...state,
        gettingUpdatedBuyerList: true,
        updatedBuyerList: [],
      };

    case types.GET_ALL_UPDATED_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingUpdatedBuyerList: false,
        updatedBuyerList: action.payload,
      };

    case types.GET_ALL_UPDATED_BUYER_FAILED:
      return {
        ...state,
        gettingUpdatedBuyerList: false,
        updatedBuyerList: [],
      };

    case types.GET_ORDER_LEADS:
      return {
        ...state,
        gettingOrderLeads: true,
        getOrderLeads: [],
      };
    case types.GET_ORDER_LEADS_SUCCESSFULL:
      return {
        ...state,
        gettingOrderLeads: true,
        getOrderLeads: action.payload,
      };
    case types.GET_ORDER_LEADS_FAILED:
      return {
        ...state,
        gettingOrderLeads: true,
        getOrderLeads: [],
      };
    case types.GET_ALL_ORDER:
      return {
        ...state,
        gettingOrderList: true,
        orderList: null,
      };

    case types.GET_ALL_ORDER_SUCCESSFULL:
      return {
        ...state,
        gettingOrderList: false,
        orderList: action.payload,
      };

    case types.GET_ALL_ORDER_FAILED:
      return {
        ...state,
        gettingOrderList: false,
        orderList: null,
      };

    case types.GET_ORDER:
      return {
        ...state,
        gettingSingleOrder: true,
        singleOrder: [],
      };

    case types.GET_ORDER_SUCCESSFULL:
      return {
        ...state,
        gettingSingleOrder: false,
        singleOrder: action.payload,
      };

    case types.GET_ORDER_FAILED:
      return {
        ...state,
        gettingSingleOrder: false,
        singleOrder: [],
      };

    case types.REGISTER_BUYER:
      return {
        ...state,
        creatingBuyer: true,
        createdBuyerResponse: null,
      };

    case types.REGISTER_BUYER_SUCCESS:
      return {
        ...state,
        creatingBuyer: false,
        createdBuyerResponse: action.payload,
      };

    case types.REGISTER_BUYER_FAILED:
      return {
        ...state,
        creatingBuyer: false,
        createdBuyerResponse: null,
      };

    case types.REGISTER_BUYER_ROUTED:
      return {
        ...state,
        creatingBuyer: false,
        createdBuyerResponse: null,
      };

    case types.UPDATE_BUYER:
      return {
        ...state,
        updatingBuyer: true,
        updatedBuyerResponse: null,
      };
    case types.UPDATE_BUYER_SUCCESSFULL:
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
        selectedBuyer: action.payload,
      };

    case types.SET_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };

    case types.UPLOADDOCUMENT:
      return {
        ...state,
        gstDocument: {},
      };
    case types.UPLOADDOCUMENT_SUCCESS:
      return {
        ...state,
        gstDocument: action.payload,
      };
    case types.UPLOADDOCUMENT_FAILED:
      return {
        ...state,
        gstDocument: {},
      };

    case types.GET_GST:
      return {
        ...state,
        gettingGstList: true,
        gstList: null,
      };

    case types.GET_GST_SUCCESS:
      return {
        ...state,
        gettingGstList: false,
        gstList: action.payload,
      };

    case types.GET_GST_FAILED:
      return {
        ...state,
        gettingGstList: false,
        gstList: null,
      };

    // leads search Filters

    case types.GET_COMMODITY_FILTERS:
      return {
        ...state,
        gettingCommodityFilters: true,
        getCommodityFilters: [],
      };

    case types.GET_COMMODITY_FILTERS_SUCCESS:
      return {
        ...state,
        gettingCommodityFilters: true,
        getCommodityFilters: action.payload,
      };
    case types.GET_COMMODITY_FILTERS_FAILED:
      return {
        ...state,
        gettingCommodityFilters: true,
        getCommodityFilters: [],
      };

    case types.GET_COMPANY_FILTERS:
      return {
        ...state,
        gettingCompanyFilters: true,
        getCompanyFilters: [],
      };
    case types.GET_COMPANY_FILTERS_SUCCESS:
      return {
        ...state,
        gettingCompanyFilters: true,
        getCompanyFilters: action.payload,
      };
    case types.GET_COMPANT_FILTERS_FAILED:
      return {
        ...state,
        gettingCompanyFilters: true,
        getCompanyFilters: [],
      };

    case types.GET_STATUS_FILTERS:
      return {
        ...state,
        gettingStatusFilters: true,
        getStatusFilters: [],
      };
    case types.GET_STATUS_FILTERS_SUCCESS:
      return {
        ...state,
        gettingStatusFilters: true,
        getStatusFilters: action.payload,
      };
    case types.GET_STATUS_FILTERS_FAILED:
      return {
        ...state,
        gettingStatusFilters: true,
        getStatusFilters: [],
      };

    default:
      return state;
  }
}

export default BuyerReducer;
