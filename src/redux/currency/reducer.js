import * as types from './actionType';

const initialState = {
  gettingAllCurrency: false,
  allCurrency: null,
  gettingCurrency: false,
  currencyResponse: null,
  updatingCurrency: false,
  updateCurrencyResponse: false,
  creatingCurrency: false,
  createdCurrency: null,
  editCurrencyTableDataMaster: false,
};

function CurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CURRENCY:
      return {
        ...state,
        gettingAllCurrency: true,
      };

    case types.GET_ALL_CURRENCY_SUCCESS:
      return {
        ...state,
        gettingAllCurrency: false,
        allCurrency: action.payload,
      };

    case types.GET_ALL_CURRENCY_FAILED:
      return {
        ...state,
        gettingAllCurrency: false,
        allCurrency: null,
      };

    case types.GET_CURRENCY:
      return {
        ...state,
        gettingCurrency: true,
      };

    case types.GET_CURRENCY_SUCCESS:
      return {
        ...state,
        gettingCurrency: false,
        currencyResponse: action.payload,
      };

    case types.GET_CURRENCY_FAILED:
      return {
        ...state,
        gettingCurrency: false,
      };

    case types.UPDATE_CURRENCY:
      return {
        ...state,
        updatingCurrency: true,
        updateCurrencyResponse: null,
      };
    case types.UPDATE_CURRENCY_SUCCESS:
      return {
        ...state,
        updatingCurrency: false,
        updateCurrencyResponse: action.payload,
      };
    case types.UPDATE_CURRENCY_FAILED:
      return {
        ...state,
        updatingCurrency: false,
        updateCurrencyResponse: null,
      };

    case types.CREATE_CURRENCY:
      return {
        ...state,
        creatingCurrency: true,
        createdCurrency: null,
      };
    case types.CREATE_CURRENCY_SUCCESS:
      return {
        ...state,
        creatingCurrency: false,
        createdCurrency: action.payload,
      };
    case types.CREATE_CURRENCY_FAILED:
      return {
        ...state,
        creatingCurrency: false,
        createdCurrency: null,
      };
    case types.EDIT_CURRENCY_TABLE_DATA_MASTER_SUCCESS:
      return {
        ...state,
        editCurrencyTableDataMaster: false,
      };

    case types.EDIT_CURRENCY_TABLE_DATA_MASTER_FAILED:
      return {
        ...state,
        editCurrencyTableDataMaster: false,
      };

    default:
      return state;
  }
}

export default CurrencyReducer;
