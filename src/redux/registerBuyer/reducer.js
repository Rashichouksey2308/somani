<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingBuyerList: false,
  buyerList: null,
  gettingAllBuyerList: false,
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
  gettingGstList: false,
  gstList: null,
  gettingOrderList: false,
  orderList: null,
  gettingSingleOrder: false,
<<<<<<< Updated upstream
  singleOrder: [],
};

function BuyerReducer(state = initialState, action) {
=======
  singleOrder: []
}

function BuyerReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_BUYER:
      return {
        ...state,
        gettingBuyerList: true,
<<<<<<< Updated upstream
        buyerList: [],
      };
=======
        buyerList: []
      }
>>>>>>> Stashed changes

    case types.GET_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingBuyerList: false,
<<<<<<< Updated upstream
        buyerList: action.payload,
      };
=======
        buyerList: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_BUYER_FAILED:
      return {
        ...state,
        gettingBuyerList: false,
<<<<<<< Updated upstream
        buyerList: [],
      };
=======
        buyerList: []
      }
>>>>>>> Stashed changes
    case types.GET_ALL_BUYER:
      return {
        ...state,
        gettingAllBuyerList: true,
<<<<<<< Updated upstream
        allBuyerList: [],
      };
=======
        allBuyerList: []
      }
>>>>>>> Stashed changes

    case types.GET_ALL_BUYER_SUCCESSFULL:
      return {
        ...state,
        gettingAllBuyerList: false,
<<<<<<< Updated upstream
        allBuyerList: action.payload,
      };
=======
        allBuyerList: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_ALL_BUYER_FAILED:
      return {
        ...state,
        gettingAllBuyerList: false,
<<<<<<< Updated upstream
        allBuyerList: [],
      };
=======
        allBuyerList: []
      }
>>>>>>> Stashed changes

    case types.GET_ALL_ORDER:
      return {
        ...state,
        gettingOrderList: true,
<<<<<<< Updated upstream
        orderList: null,
      };
=======
        orderList: null
      }
>>>>>>> Stashed changes

    case types.GET_ALL_ORDER_SUCCESSFULL:
      return {
        ...state,
        gettingOrderList: false,
<<<<<<< Updated upstream
        orderList: action.payload,
      };
=======
        orderList: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_ALL_ORDER_FAILED:
      return {
        ...state,
        gettingOrderList: false,
<<<<<<< Updated upstream
        orderList: null,
      };
=======
        orderList: null
      }
>>>>>>> Stashed changes

    case types.GET_ORDER:
      return {
        ...state,
        gettingSingleOrder: true,
<<<<<<< Updated upstream
        singleOrder: [],
      };
=======
        singleOrder: []
      }
>>>>>>> Stashed changes

    case types.GET_ORDER_SUCCESSFULL:
      return {
        ...state,
        gettingSingleOrder: false,
<<<<<<< Updated upstream
        singleOrder: action.payload,
      };
=======
        singleOrder: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_ORDER_FAILED:
      return {
        ...state,
        gettingSingleOrder: false,
<<<<<<< Updated upstream
        singleOrder: [],
      };
=======
        singleOrder: []
      }
>>>>>>> Stashed changes

    case types.REGISTER_BUYER:
      return {
        ...state,
        creatingBuyer: true,
<<<<<<< Updated upstream
        createdBuyerResponse: null,
      };
=======
        createdBuyerResponse: null
      }
>>>>>>> Stashed changes

    case types.REGISTER_BUYER_SUCCESS:
      return {
        ...state,
        creatingBuyer: false,
<<<<<<< Updated upstream
        createdBuyerResponse: action.payload,
      };
=======
        createdBuyerResponse: action.payload
      }
>>>>>>> Stashed changes

    case types.REGISTER_BUYER_FAILED:
      return {
        ...state,
        creatingBuyer: false,
<<<<<<< Updated upstream
        createdBuyerResponse: null,
      };
=======
        createdBuyerResponse: null
      }
>>>>>>> Stashed changes

    case types.REGISTER_BUYER_ROUTED:
      return {
        ...state,
        creatingBuyer: false,
<<<<<<< Updated upstream
        createdBuyerResponse: null,
      };
=======
        createdBuyerResponse: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_BUYER:
      return {
        ...state,
        updatingBuyer: true,
<<<<<<< Updated upstream
        updatedBuyerResponse: null,
      };
=======
        updatedBuyerResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_BUYER_SUCCESSFULL:
      return {
        ...state,
        updatingBuyer: false,
<<<<<<< Updated upstream
        updatedBuyerResponse: action.payload,
      };
=======
        updatedBuyerResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_BUYER_FAILED:
      return {
        ...state,
        updatingBuyer: false,
<<<<<<< Updated upstream
        updatedBuyerResponse: null,
      };
=======
        updatedBuyerResponse: null
      }
>>>>>>> Stashed changes
    case types.DELETE_BUYER:
      return {
        ...state,
        deletingBuyer: true,
<<<<<<< Updated upstream
        deletedBuyerResponse: null,
      };
=======
        deletedBuyerResponse: null
      }
>>>>>>> Stashed changes
    case types.DELETE_BUYER_SUCCESSFULL:
      return {
        ...state,
        deletingBuyer: false,
<<<<<<< Updated upstream
        deletedBuyerResponse: action.payload,
      };
=======
        deletedBuyerResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.DELETE_BUYER_FAILED:
      return {
        ...state,
        deletingBuyer: false,
<<<<<<< Updated upstream
        deletedBuyerResponse: null,
      };
=======
        deletedBuyerResponse: null
      }
>>>>>>> Stashed changes

    case types.SET_BUYER:
      return {
        ...state,
<<<<<<< Updated upstream
        selectedBuyer: action.payload,
      };
=======
        selectedBuyer: action.payload
      }
>>>>>>> Stashed changes

    case types.SET_DOCUMENT:
      return {
        ...state,
<<<<<<< Updated upstream
        document: action.payload,
      };
=======
        document: action.payload
      }
>>>>>>> Stashed changes

    case types.UPLOADDOCUMENT:
      return {
        ...state,
<<<<<<< Updated upstream
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
=======
        gstDocument: {}
      }
    case types.UPLOADDOCUMENT_SUCCESS:
      return {
        ...state,
        gstDocument: action.payload
      }
    case types.UPLOADDOCUMENT_FAILED:
      return {
        ...state,
        gstDocument: {}
      }
>>>>>>> Stashed changes

    case types.GET_GST:
      return {
        ...state,
        gettingGstList: true,
<<<<<<< Updated upstream
        gstList: null,
      };
=======
        gstList: null
      }
>>>>>>> Stashed changes

    case types.GET_GST_SUCCESS:
      return {
        ...state,
        gettingGstList: false,
<<<<<<< Updated upstream
        gstList: action.payload,
      };
=======
        gstList: action.payload
      }
>>>>>>> Stashed changes

    case types.GET_GST_FAILED:
      return {
        ...state,
        gettingGstList: false,
<<<<<<< Updated upstream
        gstList: null,
      };

    default:
      return state;
  }
}

export default BuyerReducer;
=======
        gstList: null
      }

    default:
      return state
  }
}

export default BuyerReducer
>>>>>>> Stashed changes
