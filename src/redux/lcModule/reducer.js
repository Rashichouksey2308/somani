<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingLc: false,
  lcModule: null,
  updatingLc: false,
  updatingLcResponse: null,
  updatingLcAmendment: false,
  updatingLcAmendmentResponse: null,
  updatingAmendment: false,
<<<<<<< Updated upstream
  updatingAmendmentResponse: null,
};

function LcModuleReducer(state = initialState, action) {
=======
  updatingAmendmentResponse: null
}

function LcModuleReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_LC_MODULE:
      return {
        ...state,
        gettingLc: true,
<<<<<<< Updated upstream
        lcModule: null,
      };
=======
        lcModule: null
      }
>>>>>>> Stashed changes
    case types.GET_LC_MODULE_SUCCESS:
      return {
        ...state,
        gettingLc: false,
<<<<<<< Updated upstream
        lcModule: action.payload,
      };
=======
        lcModule: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_LC_MODULE_FAILED:
      return {
        ...state,
        gettingLc: false,
<<<<<<< Updated upstream
        lcModule: null,
      };
=======
        lcModule: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_LC_MODULE:
      return {
        ...state,
        updatingLc: true,
<<<<<<< Updated upstream
        updatingLcResponse: null,
      };
=======
        updatingLcResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_LC_MODULE_SUCCESS:
      return {
        ...state,
        updatingLc: false,
<<<<<<< Updated upstream
        updatingLcResponse: action.payload,
      };
=======
        updatingLcResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_LC_MODULE_FAILED:
      return {
        ...state,
        updatingLc: false,
<<<<<<< Updated upstream
        updatingLcResponse: null,
      };
=======
        updatingLcResponse: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_LC_AMENDMENT:
      return {
        ...state,
        updatingLcAmendment: true,
<<<<<<< Updated upstream
        updatingLcAmendmentResponse: null,
      };
=======
        updatingLcAmendmentResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_LC_AMENDMENT_SUCCESS:
      return {
        ...state,
        updatingLcAmendment: false,
<<<<<<< Updated upstream
        updatingLcAmendmentResponse: action.payload,
      };
=======
        updatingLcAmendmentResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_LC_AMENDMENT_FAILED:
      return {
        ...state,
        updatingLcAmendment: false,
<<<<<<< Updated upstream
        updatingLcAmendmentResponse: null,
      };
=======
        updatingLcAmendmentResponse: null
      }
>>>>>>> Stashed changes

    case types.UPDATE_LC_AMENDMENT_POST:
      return {
        ...state,
        updatingAmendment: true,
<<<<<<< Updated upstream
        updatingAmendmentResponse: null,
      };
=======
        updatingAmendmentResponse: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_LC_AMENDMENT_POST_SUCCESS:
      return {
        ...state,
        updatingAmendment: false,
<<<<<<< Updated upstream
        updatingAmendmentResponse: action.payload,
      };
=======
        updatingAmendmentResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_LC_AMENDMENT_POST_FAILED:
      return {
        ...state,
        updatingAmendment: false,
<<<<<<< Updated upstream
        updatingAmendmentResponse: null,
      };

    default:
      return state;
  }
}

export default LcModuleReducer;
=======
        updatingAmendmentResponse: null
      }

    default:
      return state
  }
}

export default LcModuleReducer
>>>>>>> Stashed changes
