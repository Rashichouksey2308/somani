<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingLiftingData: false,
  allLiftingData: null,
  getLiftingData: false,
  liftingData: null,
  updatingLiftingData: false,
<<<<<<< Updated upstream
  updatingLiftingDataResponse: null,
};

function LiftingReducer(state = initialState, action) {
=======
  updatingLiftingDataResponse: null
}

function LiftingReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_LIFTING_DATA:
      return {
        ...state,
        getLiftingData: true,
<<<<<<< Updated upstream
        liftingData: null,
      };
=======
        liftingData: null
      }
>>>>>>> Stashed changes
    case types.GET_LIFTING_DATA_SUCCESS:
      return {
        ...state,
        getLiftingData: false,
<<<<<<< Updated upstream
        liftingData: action.payload,
      };
=======
        liftingData: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_LIFTING_DATA_FAILED:
      return {
        ...state,
        getLiftingData: false,
<<<<<<< Updated upstream
        liftingData: null,
      };
    case types.GET_ALL_LIFTING_DATA:
      return {
        ...state,
        gettingLiftingData: true,
      };
=======
        liftingData: null
      }
    case types.GET_ALL_LIFTING_DATA:
      return {
        ...state,
        gettingLiftingData: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_LIFTING_DATA_SUCCESS:
      return {
        ...state,
        gettingLiftingData: false,
<<<<<<< Updated upstream
        allLiftingData: action.payload,
      };
    case types.GET_ALL_LIFTING_DATA_FAILED:
      return {
        ...state,
        gettingLiftingData: false,
      };
    case types.UPDATE_LIFTING_DATA:
      return {
        ...state,
        updatingLiftingData: true,
      };
=======
        allLiftingData: action.payload
      }
    case types.GET_ALL_LIFTING_DATA_FAILED:
      return {
        ...state,
        gettingLiftingData: false
      }
    case types.UPDATE_LIFTING_DATA:
      return {
        ...state,
        updatingLiftingData: true
      }
>>>>>>> Stashed changes
    case types.UPDATE_LIFTING_DATA_SUCCESS:
      return {
        ...state,
        updatingLiftingData: false,
<<<<<<< Updated upstream
        updatingLiftingDataResponse: action.payload,
      };
    case types.UPDATE_LIFTING_DATA_FAILED:
      return {
        ...state,
        updatingLiftingData: false,
      };

    default:
      return state;
  }
}

export default LiftingReducer;
=======
        updatingLiftingDataResponse: action.payload
      }
    case types.UPDATE_LIFTING_DATA_FAILED:
      return {
        ...state,
        updatingLiftingData: false
      }

    default:
      return state
  }
}

export default LiftingReducer
>>>>>>> Stashed changes
