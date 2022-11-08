<<<<<<< Updated upstream
import * as types from './actions';

const initialState = {
  allGeneric: [],
  selectedGeneric: [],
};

function GenericReducer(state = initialState, action) {
=======
import * as types from './actions'

const initialState = {
  allGeneric: [],
  selectedGeneric: []
}

function GenericReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_GENERIC_SUCCESS: {
      return {
        ...state,
<<<<<<< Updated upstream
        allGeneric: action.payload,
      };
    }
    case types.SUBMIT_GENERIC:
      return {
        ...state,
      };
    case types.SUBMIT_GENERIC_SUCCESS: {
      return {
        ...state,
      };
=======
        allGeneric: action.payload
      }
    }
    case types.SUBMIT_GENERIC:
      return {
        ...state
      }
    case types.SUBMIT_GENERIC_SUCCESS: {
      return {
        ...state
      }
>>>>>>> Stashed changes
    }

    case types.SUBMIT_GENERIC_FAILED: {
      return {
<<<<<<< Updated upstream
        ...state,
      };
    }
  

    default:
      return state;
  }
}

export default GenericReducer;
=======
        ...state
      }
    }

    default:
      return state
  }
}

export default GenericReducer
>>>>>>> Stashed changes
