import * as types from './actionType';

const initialState = {
  updatingSupplier: false,
  updatedSupplierResponse: null,
  gettingsupplier: false,
  supplierResponse: null,
  gettingAllSupplier: false,
  allSupplierResponse: null,

};

function SupplierReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SUPPLIER:
      return {
        ...state,
        updatingSupplier: true,
        updatedSupplierResponse: null,
      };
    case types.UPDATE_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        updatingSupplier: false,
        updatedSupplierResponse: action.payload,
      };
    case types.UPDATE_SUPPLIER_FAILED:
      return {
        ...state,
        updatingSupplier: false,
        updatedSupplierResponse: null,
      };

    case types.GET_SUPPLIER:
      return {
        ...state,
        gettingsupplier: true,
        supplierResponse: null,
      };
    case types.GET_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        gettingsupplier: false,
        supplierResponse: action.payload,
      };
    case types.GET_SUPPLIER_FAILED:
      return {
        ...state,
        gettingsupplier: false,
        supplierResponse: null,
      };

    case types.GET_ALL_SUPPLIER:
      return {
        ...state,
        gettingAllSupplier: true,
        allSupplierResponse: null,
      };
    case types.GET_ALL_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        gettingAllSupplier: false,
        allSupplierResponse: action.payload,
      };
    case types.GET_ALL_SUPPLIER_FAILED:
      return {
        ...state,
        gettingAllSupplier: false,
        allSupplierResponse: null,
      };
    case types.CLEAR_SUPPLIER:
      return {
        ...state,
        supplierResponse: null
      };

    default:
      return state;
  }
}

export default SupplierReducer;
