<<<<<<< Updated upstream
import * as types from './actionType';

const initialState = {
  isOpen: false,
};

function LoadReducer(state = initialState, action) {
=======
import * as types from './actionType'

const initialState = {
  isOpen: false
}

function LoadReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
<<<<<<< Updated upstream
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
=======
        isOpen: action.payload
      }
    case types.NOT_LOADING:
      return {
        ...state,
        isOpen: action.payload
      }

    default:
      return state
  }
}

export default LoadReducer
>>>>>>> Stashed changes
