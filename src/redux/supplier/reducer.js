<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  creatingSupplier: false,
  createdSupplierResponse: null,
  updatingSupplier: false,
  updatedSupplierResponse: null,
  gettingsupplier: false,
  supplierResponse: null,
  gettingAllSupplier: false,
  allSupplierResponse: null,
  searchingSupplier: false,
<<<<<<< Updated upstream
  searchedSupplier: null,
};

function SupplierReducer(state = initialState, action) {
=======
  searchedSupplier: null
}

function SupplierReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.CREATE_SUPPLIER:
      return {
        ...state,
        creatingSupplier: true,
<<<<<<< Updated upstream
        createdSupplierResponse: null,
      };
=======
        createdSupplierResponse: null
      }
>>>>>>> Stashed changes
    case types.CREATE_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        creatingSupplier: false,
<<<<<<< Updated upstream
        createdSupplierResponse: action.payload,
      };
=======
        createdSupplierResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.CREATE_SUPPLIER_FAILED:
      return {
        ...state,
        creatingSupplier: false,
<<<<<<< Updated upstream
        createdSupplierResponse: null,
      };
=======
        createdSupplierResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_SUPPLIER:
      return {
        ...state,
        updatingSupplier: true,
<<<<<<< Updated upstream
        updatedSupplierResponse: null,
      };
=======
        updatedSupplierResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        updatingSupplier: false,
<<<<<<< Updated upstream
        updatedSupplierResponse: action.payload,
      };
=======
        updatedSupplierResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_SUPPLIER_FAILED:
      return {
        ...state,
        updatingSupplier: false,
<<<<<<< Updated upstream
        updatedSupplierResponse: null,
      };
=======
        updatedSupplierResponse: null
      }
>>>>>>> Stashed changes

    case types.GET_SUPPLIER:
      return {
        ...state,
        gettingsupplier: true,
<<<<<<< Updated upstream
        supplierResponse: null,
      };
=======
        supplierResponse: null
      }
>>>>>>> Stashed changes
    case types.GET_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        gettingsupplier: false,
<<<<<<< Updated upstream
        supplierResponse: action.payload,
      };
=======
        supplierResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_SUPPLIER_FAILED:
      return {
        ...state,
        gettingsupplier: false,
<<<<<<< Updated upstream
        supplierResponse: null,
      };
=======
        supplierResponse: null
      }
>>>>>>> Stashed changes

    case types.GET_ALL_SUPPLIER:
      return {
        ...state,
        gettingAllSupplier: true,
<<<<<<< Updated upstream
        allSupplierResponse: null,
      };
=======
        allSupplierResponse: null
      }
>>>>>>> Stashed changes
    case types.GET_ALL_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        gettingAllSupplier: false,
<<<<<<< Updated upstream
        allSupplierResponse: action.payload,
      };
=======
        allSupplierResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_ALL_SUPPLIER_FAILED:
      return {
        ...state,
        gettingAllSupplier: false,
<<<<<<< Updated upstream
        allSupplierResponse: null,
      };
    case types.CLEAR_SUPPLIER:
      return {
        ...state,
        supplierResponse: null,
      };
=======
        allSupplierResponse: null
      }
    case types.CLEAR_SUPPLIER:
      return {
        ...state,
        supplierResponse: null
      }
>>>>>>> Stashed changes

    case types.SEARCH_SUPPLIER:
      return {
        ...state,
<<<<<<< Updated upstream
        searchingSupplier: true,
      };
=======
        searchingSupplier: true
      }
>>>>>>> Stashed changes
    case types.SEARCH_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        searchingSupplier: false,
<<<<<<< Updated upstream
        searchedSupplier: action.payload,
      };
=======
        searchedSupplier: action.payload
      }
>>>>>>> Stashed changes
    case types.SEARCH_SUPPLIER_FAILED:
      return {
        ...state,
        searchingSupplier: false,
<<<<<<< Updated upstream
        searchedSupplier: null,
      };

    default:
      return state;
  }
}

export default SupplierReducer;
=======
        searchedSupplier: null
      }

    default:
      return state
  }
}

export default SupplierReducer
>>>>>>> Stashed changes
