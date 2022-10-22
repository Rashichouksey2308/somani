import * as types from './actionType';

const initialState = {
  getCountriesMasterData: [],
  getPortsMasterData: [],
  getCommoditiesMasterData: [],
  getDocumentsMasterData: [],
  getCurrencyMasterData: [],
};

function MastersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COUNTRIES_MASTERS:
      return {
        ...state,
        getCountriesMasterData: [],
      };

    case types.GET_COUNTRIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCountriesMasterData: action.payload,
      };
    case types.GET_COUNTRIES_MASTERS_FAILURE:
      return {
        ...state,
        getCountriesMasterData: [],
      };
    case types.GET_PORTS_MASTERS:
      return {
        ...state,
        getPortsMasterData: [],
      };

    case types.GET_PORTS_MASTERS_SUCCESS:
      return {
        ...state,
        getPortsMasterData: action.payload,
      };
    case types.GET_PORTS_MASTERS_FAILURE:
      return {
        ...state,
        getPortsMasterData: [],
      };
    case types.GET_COMMODITIES_MASTERS:
      return {
        ...state,
        getCommoditiesMasterData: [],
      };

    case types.GET_COMMODITIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCommoditiesMasterData: action.payload,
      };
    case types.GET_COMMODITIES_MASTERS_FAILURE:
      return {
        ...state,
        getCommoditiesMasterData: [],
      };

    case types.GET_DOCUMENTS_MASTERS:
      return {
        ...state,
        getDocumentsMasterData: [],
      };

    case types.GET_DOCUMENTS_MASTERS_SUCCESS:
      return {
        ...state,
        getDocumentsMasterData: action.payload,
      };
    case types.GET_DOCUMENTS_MASTERS_FAILURE:
      return {
        ...state,
        getDocumentsMasterData: [],
      };
    case types.GET_CURRENCY_MASTERS:
      return {
        ...state,
        getCurrencyMasterData: [],
      };

    case types.GET_CURRENCY_MASTERS_SUCCESS:
      return {
        ...state,
        getCurrencyMasterData: action.payload,
      };
    case types.GET_CURRENCY_MASTERS_FAILURE:
      return {
        ...state,
        getCurrencyMasterData: [],
      };

    default:
      return state;
  }
}

export default MastersReducer;
