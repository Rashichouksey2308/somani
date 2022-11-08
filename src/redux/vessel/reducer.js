<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  gettingVessel: false,
  allVessel: null,
  Vessel: null,
  updatingVessel: false,
  uploadingDoc: false,
<<<<<<< Updated upstream
  uploadedDoc: {},
};

function VesselReducer(state = initialState, action) {
=======
  uploadedDoc: {}
}

function VesselReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_VESSEL:
      return {
        ...state,
<<<<<<< Updated upstream
        gettingVessel: true,
      };
=======
        gettingVessel: true
      }
>>>>>>> Stashed changes
    case types.GET_VESSEL_SUCCESS:
      return {
        ...state,
        gettingVessel: false,
<<<<<<< Updated upstream
        Vessel: action.payload,
      };
    case types.GET_VESSEL_FAILED:
      return {
        ...state,
        gettingVessel: false,
      };
    case types.GET_ALL_VESSEL:
      return {
        ...state,
        gettingVessel: true,
      };
=======
        Vessel: action.payload
      }
    case types.GET_VESSEL_FAILED:
      return {
        ...state,
        gettingVessel: false
      }
    case types.GET_ALL_VESSEL:
      return {
        ...state,
        gettingVessel: true
      }
>>>>>>> Stashed changes
    case types.GET_ALL_VESSEL_SUCCESS:
      return {
        ...state,
        gettingVessel: false,
<<<<<<< Updated upstream
        allVessel: action.payload,
      };
    case types.GET_ALL_VESSEL_FAILED:
      return {
        ...state,
        gettingVessel: false,
      };
    case types.UPDATE_VESSEL:
      return {
        ...state,
        updatingVessel: true,
      };
    case types.UPDATE_VESSEL_SUCCESS:
      return {
        ...state,
        updatingVessel: false,
      };
    case types.UPDATE_VESSEL_FAILED:
      return {
        ...state,
        updatingVessel: false,
      };
=======
        allVessel: action.payload
      }
    case types.GET_ALL_VESSEL_FAILED:
      return {
        ...state,
        gettingVessel: false
      }
    case types.UPDATE_VESSEL:
      return {
        ...state,
        updatingVessel: true
      }
    case types.UPDATE_VESSEL_SUCCESS:
      return {
        ...state,
        updatingVessel: false
      }
    case types.UPDATE_VESSEL_FAILED:
      return {
        ...state,
        updatingVessel: false
      }
>>>>>>> Stashed changes

    case types.UPLOAD_DOC_VESSEL:
      return {
        ...state,
<<<<<<< Updated upstream
        uploadingDoc: true,
      };
=======
        uploadingDoc: true
      }
>>>>>>> Stashed changes
    case types.UPLOAD_DOC_VESSEL_SUCCESS:
      return {
        ...state,
        uploadingDoc: false,
<<<<<<< Updated upstream
        uploadedDoc: action.payload,
      };
    case types.UPLOAD_DOC_VESSEL_FAILED:
      return {
        ...state,
        uploadingDoc: false,
      };
    default:
      return state;
  }
}

export default VesselReducer;
=======
        uploadedDoc: action.payload
      }
    case types.UPLOAD_DOC_VESSEL_FAILED:
      return {
        ...state,
        uploadingDoc: false
      }
    default:
      return state
  }
}

export default VesselReducer
>>>>>>> Stashed changes
