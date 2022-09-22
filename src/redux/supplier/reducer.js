import * as types from './actionType'

const initialState = {
  updatingSupplier: false,
  updatedSupplierResponse: null,
}

function BuyerReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SUPPLIER:
      return {
        ...state,
        updatingSupplier: true,
        updatedSupplierResponse: null,
      }
    case types.UPDATE_SUPPLIER_SUCCESSFULL:
      return {
        ...state,
        updatingSupplier: false,
        updatedSupplierResponse: action.payload,
      }
    case types.UPDATE_SUPPLIER_FAILED:
      return {
        ...state,
        updatingSupplier: false,
        updatedSupplierResponse: null,
      }

    default:
      return state
  }
}

export default BuyerReducer
