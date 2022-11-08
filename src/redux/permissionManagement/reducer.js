<<<<<<< Updated upstream
import * as types from './actionType';
import { LOGOUT_USER } from '../authentication/actionType';
=======
import * as types from './actionType'
import { LOGOUT_USER } from '../authentication/actionType'
>>>>>>> Stashed changes

const initialState = {
  creatingUserType: false,
  creatingUserTypeStatus: null,
  fetchingUserType: false,
  fetchingUserTypeStatus: null,
  userTypeList: [],
  removingUserType: false,
  removingUserTypeStatus: null,
  updatingUserPermissions: false,
<<<<<<< Updated upstream
  updatingUserPermissionsStatus: null,
};

function permissionManagementReducer(state = initialState, action) {
=======
  updatingUserPermissionsStatus: null
}

function permissionManagementReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.CREATE_USERTYPE:
      return {
        ...state,
        creatingUserType: true,
<<<<<<< Updated upstream
        creatingUserTypeStatus: null,
      };
=======
        creatingUserTypeStatus: null
      }
>>>>>>> Stashed changes
    case types.CREATE_USERTYPE_SUCCESS:
      return {
        ...state,
        creatingUserType: false,
<<<<<<< Updated upstream
        creatingUserTypeStatus: action.payload,
      };
=======
        creatingUserTypeStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.CREATE_USERTYPE_FAILED:
      return {
        ...state,
        creatingUserType: false,
<<<<<<< Updated upstream
        creatingUserTypeStatus: action.payload,
      };
=======
        creatingUserTypeStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.FETCH_USERTYPE:
      return {
        ...state,
        fetchingUserType: true,
<<<<<<< Updated upstream
        fetchingUserTypeStatus: null,
      };
=======
        fetchingUserTypeStatus: null
      }
>>>>>>> Stashed changes
    case types.FETCH_USERTYPE_SUCCESS:
      return {
        ...state,
        fetchingUserType: false,
<<<<<<< Updated upstream
        userTypeList: action.payload,
      };
=======
        userTypeList: action.payload
      }
>>>>>>> Stashed changes
    case types.FETCH_USERTYPE_FAILED:
      return {
        ...state,
        fetchingUserType: false,
<<<<<<< Updated upstream
        fetchingUserTypeStatus: action.payload,
      };
=======
        fetchingUserTypeStatus: action.payload
      }
>>>>>>> Stashed changes

    case types.REMOVE_USERTYPE:
      return {
        ...state,
        removingUserType: true,
<<<<<<< Updated upstream
        removingUserTypeStatus: null,
      };
=======
        removingUserTypeStatus: null
      }
>>>>>>> Stashed changes
    case types.REMOVE_USERTYPE_SUCCESS:
      return {
        ...state,
        removingUserType: false,
<<<<<<< Updated upstream
        removingUserTypeStatus: action.payload,
      };
=======
        removingUserTypeStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.REMOVE_USERTYPE_FAILED:
      return {
        ...state,
        removingUserType: false,
<<<<<<< Updated upstream
        removingUserTypeStatus: action.payload,
      };
=======
        removingUserTypeStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_USER_PERMISSIONS:
      return {
        ...state,
        updatingUserPermissions: true,
<<<<<<< Updated upstream
        updatingUserPermissionsStatus: null,
      };
=======
        updatingUserPermissionsStatus: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_USER_PERMISSIONS_SUCCESS:
      return {
        ...state,
        updatingUserPermissions: false,
<<<<<<< Updated upstream
        updatingUserPermissionsStatus: action.payload,
      };
=======
        updatingUserPermissionsStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_USER_PERMISSIONS_FAILED:
      return {
        ...state,
        updatingUserPermissions: false,
<<<<<<< Updated upstream
        updatingUserPermissionsStatus: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export default permissionManagementReducer;
=======
        updatingUserPermissionsStatus: action.payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}

export default permissionManagementReducer
>>>>>>> Stashed changes
