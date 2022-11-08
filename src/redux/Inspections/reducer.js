<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingInspection: false,
  allInspection: null,
  Inspection: null,
  updatingInspection: false,
<<<<<<< Updated upstream
  modifiedDate: null,
};

function InspectionReducer(state = initialState, action) {
=======
  modifiedDate: null
}

function InspectionReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_INSPECTION:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingInspection: true,
      };
=======
        gettingInspection: true
      }
>>>>>>> Stashed changes
    case types.GET_INSPECTION_SUCCESS:
      return {
        ...state,
        gettingInspection: false,
<<<<<<< Updated upstream
        Inspection: action.payload,
      };
=======
        Inspection: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_UPDATED_DATE:
      return {
        ...state,

<<<<<<< Updated upstream
        modifiedDate: action.payload,
      };
    case types.GET_INSPECTION_FAILED:
      return {
        ...state,
        gettingInspection: false,
      };
    case types.GET_ALL_INSPECTION:
      return {
        ...state,
        gettingInspection: true,
      };
=======
        modifiedDate: action.payload
      }
    case types.GET_INSPECTION_FAILED:
      return {
        ...state,
        gettingInspection: false
      }
    case types.GET_ALL_INSPECTION:
      return {
        ...state,
        gettingInspection: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_INSPECTION_SUCCESS:
      return {
        ...state,
        gettingInspection: false,
<<<<<<< Updated upstream
        allInspection: action.payload,
      };
    case types.GET_ALL_INSPECTION_FAILED:
      return {
        ...state,
        gettingInspection: false,
      };
    case types.UPDATE_INSPECTION:
      return {
        ...state,
        updatingInspection: true,
      };
    case types.UPDATE_INSPECTION_SUCCESS:
      return {
        ...state,
        updatingInspection: false,
      };
    case types.UPDATE_INSPECTION_FAILED:
      return {
        ...state,
        updatingInspection: false,
      };

    default:
      return state;
  }
}

export default InspectionReducer;
=======
        allInspection: action.payload
      }
    case types.GET_ALL_INSPECTION_FAILED:
      return {
        ...state,
        gettingInspection: false
      }
    case types.UPDATE_INSPECTION:
      return {
        ...state,
        updatingInspection: true
      }
    case types.UPDATE_INSPECTION_SUCCESS:
      return {
        ...state,
        updatingInspection: false
      }
    case types.UPDATE_INSPECTION_FAILED:
      return {
        ...state,
        updatingInspection: false
      }

    default:
      return state
  }
}

export default InspectionReducer
>>>>>>> Stashed changes
