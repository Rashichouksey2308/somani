import * as types from './actionType'

const initialState = {
  gettingAllVendor: false,
  allVendor: null,
  gettingVendor: false,
  vendorResponse: null,
  updatingVendor: false,
  updateVendorResponse: false,
  creatingVendor: false,
  createdVendor: null
}

function VendorReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_VENDOR:
      return {
        ...state,
        gettingAllVendor: true
      }

    case types.GET_ALL_VENDOR_SUCCESS:
      return {
        ...state,
        gettingAllVendor: false,
        allVendor: action.payload
      }

    case types.GET_ALL_VENDOR_FAILED:
      return {
        ...state,
        gettingAllVendor: false,
        allVendor: null
      }

    case types.GET_VENDOR:
      return {
        ...state,
        gettingVendor: true
      }

    case types.GET_VENDOR_SUCCESS:
      return {
        ...state,
        gettingVendor: false,
        vendorResponse: action.payload
      }

    case types.GET_VENDOR_FAILED:
      return {
        ...state,
        gettingVendor: false
      }

    case types.UPDATE_VENDOR:
      return {
        ...state,
        updatingVendor: true,
        updateVendorResponse: null
      }
    case types.UPDATE_VENDOR_SUCCESS:
      return {
        ...state,
        updatingVendor: false,
        updateVendorResponse: action.payload
      }
    case types.UPDATE_VENDOR_FAILED:
      return {
        ...state,
        updatingVendor: false,
        updateVendorResponse: null
      }

    case types.CREATE_VENDOR:
      return {
        ...state,
        creatingVendor: true,
        createdVendor: null
      }
    case types.CREATE_VENDOR_SUCCESS:
      return {
        ...state,
        creatingVendor: false,
        createdVendor: action.payload
      }
    case types.CREATE_VENDOR_FAILED:
      return {
        ...state,
        creatingVendor: false,
        createdVendor: null
      }

    default:
      return state
  }
}

export default VendorReducer
