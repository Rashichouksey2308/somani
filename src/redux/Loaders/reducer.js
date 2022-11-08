import * as types from './actionType';

const initialState = {
  isOpen: false,
};

function LoadReducer(state = initialState, action) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isOpen: action.payload,
      };
    case types.NOT_LOADING:
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
}

export default LoadReducer;
