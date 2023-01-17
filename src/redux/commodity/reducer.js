import * as types from './actionType'

const initialState = {
  gettingAllCommodity: false,
  allCommodity: null,
  gettingCommodity: false,
  Commodity: null,
  updatingCommodity: false,
  updateCommodityResponse: false,
  creatingCommodity: false,
  createdCommodity: null
}

function CommodityReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_COMMODITY:
      return {
        ...state,
        gettingAllCommodity: true
      }

    case types.GET_ALL_COMMODITY_SUCCESS:
      return {
        ...state,
        gettingAllCommodity: false,
        allCommodity: action.payload
      }

    case types.GET_ALL_COMMODITY_FAILED:
      return {
        ...state,
        gettingAllCommodity: false,
        allCommodity: null
      }

    case types.GET_COMMODITY:
      return {
        ...state,
        gettingCommodity: true
      }

    case types.GET_COMMODITY_SUCCESS:
      return {
        ...state,
        gettingCommodity: false,
        Commodity: action.payload
      }

    case types.GET_COMMODITY_FAILED:
      return {
        ...state,
        gettingCommodity: false
      }

    case types.UPDATE_COMMODITY:
      return {
        ...state,
        updatingCommodity: true,
        updateCommodityResponse: null
      }
    case types.UPDATE_COMMODITY_SUCCESS:
      return {
        ...state,
        updatingCommodity: false,
        updateCommodityResponse: action.payload
      }
    case types.UPDATE_COMMODITY_FAILED:
      return {
        ...state,
        updatingCommodity: false,
        updateCommodityResponse: null
      }

    case types.CREATE_COMMODITY:
      return {
        ...state,
        creatingCommodity: true,
        createdCommodity: null
      }
    case types.CREATE_COMMODITY_SUCCESS:
      return {
        ...state,
        creatingCommodity: false,
        createdCommodity: action.payload
      }
    case types.CREATE_COMMODITY_FAILED:
      return {
        ...state,
        creatingCommodity: false,
        createdCommodity: null
      }

    default:
      return state
  }
}

export default CommodityReducer
