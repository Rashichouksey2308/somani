import * as types from './actionType'

const initialState = {
  gettingMarginMoney: false,
  marginMoneyResponse: [],
  getMarginMoney: false,
  margin: [],
  updatingMarginMoney: false,
  updatingMarginMoneyResponse: [],
  revisedMarginMoney: false,
  revisedMarginMoneyResponse: null,
}

function MarginMoneyReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_MARGINMONEY:
      return {
        ...state,
        gettingMarginMoney: true,
        marginMoneyResponse: [],
      }

    case types.GET_ALL_MARGINMONEY_SUCCESSFULL:
      return {
        ...state,
        gettingMarginMoney: false,
        marginMoneyResponse: action.payload,
      }
    case types.GET_ALL_MARGINMONEY_FAILED:
      return {
        ...state,
        gettingMarginMoney: false,
        marginMoneyResponse: [],
      }

    case types.GET_MARGINMONEY:
      return {
        ...state,
        getMarginMoney: true,
        margin: [],
      }

    case types.GET_MARGINMONEY_SUCCESSFULL:
      return {
        ...state,
        getMarginMoney: false,
        margin: action.payload,
      }
    case types.GET_MARGINMONEY_FAILED:
      return {
        ...state,
        getMarginMoney: false,
        margin: [],
      }

    case types.UPDATE_MARGINMONEY:
      return {
        ...state,
        updateMarginMoney: true,
        updatingMarginMoneyResponse: [],
      }

    case types.UPDATE_MARGINMONEY_SUCCESSFULL:
      return {
        ...state,
        updatingMarginMoney: false,
        updatingMarginMoneyResponse: action.payload,
      }
    case types.UPDATE_MARGINMONEY_FAILED:
      return {
        ...state,
        updatingMarginMoney: false,
        updatingMarginMoneyResponse: [],
      }

    case types.UPDATE_MARGINMONEY_REVISED:
      return {
        ...state,
        revisedMarginMoney: true,
        revisedMarginMoneyResponse: null,
      }

    case types.UPDATE_MARGINMONEY_REVISED_SUCCESSFULL:
      return {
        ...state,
        revisedMarginMoney: false,
        revisedMarginMoneyResponse: action.payload,
      }
    case types.UPDATE_MARGINMONEY_REVISED_FAILED:
      return {
        ...state,
        revisedMarginMoney: false,
        revisedMarginMoneyResponse: null,
      }

    default:
      return state
  }
}

export default MarginMoneyReducer
