import * as types from './actionType';

const initialState = {
  getCountriesMasterData: [],
  getPortsMasterData: [],
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

    default:
      return state;
  }
}

export default MastersReducer;
