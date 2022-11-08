import * as types from './actionType'

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
  searchedSupplier: null
}

function SupplierReducer (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_SUPPLIER:
      return {
        ...state,
        creatingSupplier: true,
        createdSupplierResponse: null
      }
    case types.CREATE_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        creatingSupplier: false,
        createdSupplierResponse: action.payload
      }
    case types.CREATE_SUPPLIER_FAILED:
      return {
        ...state,
        creatingSupplier: false,
        createdSupplierResponse: null
      }
    case types.UPDATE_SUPPLIER:
      return {
        ...state,
        updatingSupplier: true,
        updatedSupplierResponse: null
      }
    case types.UPDATE_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        updatingSupplier: false,
        updatedSupplierResponse: action.payload
      }
    case types.UPDATE_SUPPLIER_FAILED:
      return {
        ...state,
        updatingSupplier: false,
        updatedSupplierResponse: null
      }

    case types.GET_SUPPLIER:
      return {
        ...state,
        gettingsupplier: true,
        supplierResponse: null
      }
    case types.GET_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        gettingsupplier: false,
        supplierResponse: action.payload
      }
    case types.GET_SUPPLIER_FAILED:
      return {
        ...state,
        gettingsupplier: false,
        supplierResponse: null
      }

    case types.GET_ALL_SUPPLIER:
      return {
        ...state,
        gettingAllSupplier: true,
        allSupplierResponse: null
      }
    case types.GET_ALL_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        gettingAllSupplier: false,
        allSupplierResponse: action.payload
      }
    case types.GET_ALL_SUPPLIER_FAILED:
      return {
        ...state,
        gettingAllSupplier: false,
        allSupplierResponse: null
      }
    case types.CLEAR_SUPPLIER:
      return {
        ...state,
        supplierResponse: null
      }

    case types.SEARCH_SUPPLIER:
      return {
        ...state,
        searchingSupplier: true
      }
    case types.SEARCH_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        searchingSupplier: false,
        searchedSupplier: action.payload
      }
    case types.SEARCH_SUPPLIER_FAILED:
      return {
        ...state,
        searchingSupplier: false,
        searchedSupplier: null
      }

    default:
      return state
  }
}

export default SupplierReducer
