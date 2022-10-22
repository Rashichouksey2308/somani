import * as types from './actionType';

const initialState = {
  getCountriesMasterData: [],
};

function MastersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COUNTRIES_MASTERS:
      return {
        ...state,
        getCountriesMasterData: [],
      };

    case types.GET_COUNTRIES_MASTERS_SUCCESS:
      console.log(action.payload, 'PAYLOADDATA');
      return {
        ...state,
        getCountriesMasterData: action.payload,
      };
    case types.GET_COUNTRIES_MASTERS_FAILURE:
      return {
        ...state,
        getCountriesMasterData: [],
      };

    default:
      return state;
  }
}

export default MastersReducer;
