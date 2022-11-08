<<<<<<< Updated upstream
import * as types from './actionType';

const initialState = {
  placingNewOrder: false,
  newOrder: null,
};

function NewOrderReducer(state = initialState, action) {
=======
import * as types from './actionType'

const initialState = {
  placingNewOrder: false,
  newOrder: null
}

function NewOrderReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.PLACE_ORDER:
      return {
        ...state,
        placingNewOrder: true,
<<<<<<< Updated upstream
        newOrder: null,
      };
=======
        newOrder: null
      }
>>>>>>> Stashed changes
    case types.PLACE_ORDER_SUCCESSFULL:
      return {
        ...state,
        placingNewOrder: false,
<<<<<<< Updated upstream
        newOrder: action.payload,
      };
=======
        newOrder: action.payload
      }
>>>>>>> Stashed changes
    case types.PLACE_ORDER_FAILED:
      return {
        ...state,
        placingNewOrder: false,
<<<<<<< Updated upstream
        newOrder: null,
      };
=======
        newOrder: null
      }
>>>>>>> Stashed changes
    case types.PLACED_ORDER_ROUTED:
      return {
        ...state,
        placingNewOrder: false,
<<<<<<< Updated upstream
        newOrder: null,
      };

    default:
      return state;
  }
}

export default NewOrderReducer;
=======
        newOrder: null
      }

    default:
      return state
  }
}

export default NewOrderReducer
>>>>>>> Stashed changes
