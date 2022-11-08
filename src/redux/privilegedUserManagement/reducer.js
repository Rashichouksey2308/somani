<<<<<<< Updated upstream
import * as types from './actionType';
import { LOGOUT_USER } from '../authentication/actionType';
=======
import * as types from './actionType'
import { LOGOUT_USER } from '../authentication/actionType'
>>>>>>> Stashed changes

const initialState = {
  fetchingUserTypeList: false,
  userTypeList: [],
  fetchingUserTypeListStatus: null,
  registeringNewPrivilegedUser: true,
  registeringNewPrivilegedUserStatus: null,
  fetchingPrivilegedUsers: false,
  fetchingPrivilegedUsersStatus: null,
  privilegedUsers: [],
  updatingPrivilegedUser: false,
<<<<<<< Updated upstream
  updatingPrivilegedUserStatus: null,
};

function privilegedUserReducer(state = initialState, action) {
=======
  updatingPrivilegedUserStatus: null
}

function privilegedUserReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.FETCH_ALL_USER_TYPES:
      return {
        ...state,
        fetchingUserTypeList: true,
<<<<<<< Updated upstream
        fetchingUserTypeListStatus: null,
      };
=======
        fetchingUserTypeListStatus: null
      }
>>>>>>> Stashed changes
    case types.FETCH_ALL_USER_TYPES_SUCCESS:
      return {
        ...state,
        fetchingUserTypeList: false,
        userTypeList: action.payload,
<<<<<<< Updated upstream
        fetchingUserTypeListStatus: null,
      };
=======
        fetchingUserTypeListStatus: null
      }
>>>>>>> Stashed changes
    case types.FETCH_ALL_USER_TYPES_FAILED:
      return {
        ...state,
        fetchingUserTypeList: false,
        userTypeList: [],
<<<<<<< Updated upstream
        fetchingUserTypeListStatus: action.payload,
      };
=======
        fetchingUserTypeListStatus: action.payload
      }
>>>>>>> Stashed changes

    case types.REGISTER_NEW_PRIVILEGED_USER:
      return {
        ...state,
        registeringNewPrivilegedUser: true,
<<<<<<< Updated upstream
        registeringNewPrivilegedUserStatus: null,
      };
=======
        registeringNewPrivilegedUserStatus: null
      }
>>>>>>> Stashed changes
    case types.REGISTER_NEW_PRIVILEGED_USER_SUCCESS:
      return {
        ...state,
        registeringNewPrivilegedUser: false,
<<<<<<< Updated upstream
        registeringNewPrivilegedUserStatus: action.payload,
      };
=======
        registeringNewPrivilegedUserStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.REGISTER_NEW_PRIVILEGED_USER_FAILED:
      return {
        ...state,
        registeringNewPrivilegedUser: true,
<<<<<<< Updated upstream
        registeringNewPrivilegedUserStatus: action.payload,
      };
=======
        registeringNewPrivilegedUserStatus: action.payload
      }
>>>>>>> Stashed changes

    case types.FETCH_ALL_PRIVILEGED_USER:
      return {
        ...state,
        fetchingPrivilegedUsers: true,
<<<<<<< Updated upstream
        fetchingPrivilegedUsersStatus: null,
      };
=======
        fetchingPrivilegedUsersStatus: null
      }
>>>>>>> Stashed changes
    case types.FETCH_ALL_PRIVILEGED_USER_SUCCESS:
      return {
        ...state,
        fetchingPrivilegedUsers: false,
        fetchingPrivilegedUsersStatus: null,
<<<<<<< Updated upstream
        privilegedUsers: action.payload,
      };
=======
        privilegedUsers: action.payload
      }
>>>>>>> Stashed changes
    case types.FETCH_ALL_PRIVILEGED_USER_FAILED:
      return {
        ...state,
        fetchingPrivilegedUsers: false,
        fetchingPrivilegedUsersStatus: action.payload,
<<<<<<< Updated upstream
        privilegedUsers: [],
      };
=======
        privilegedUsers: []
      }
>>>>>>> Stashed changes

    case types.UPDATE_PRIVILEGED_USER:
      return {
        ...state,
        updatingPrivilegedUser: true,
<<<<<<< Updated upstream
        updatingPrivilegedUserStatus: null,
      };
=======
        updatingPrivilegedUserStatus: null
      }
>>>>>>> Stashed changes
    case types.UPDATE_PRIVILEGED_USER_SUCCESS:
      return {
        ...state,
        updatingPrivilegedUser: false,
<<<<<<< Updated upstream
        updatingPrivilegedUserStatus: action.payload,
      };
=======
        updatingPrivilegedUserStatus: action.payload
      }
>>>>>>> Stashed changes
    case types.UPDATE_PRIVILEGED_USER_FAILED:
      return {
        ...state,
        updatingPrivilegedUser: false,
<<<<<<< Updated upstream
        updatingPrivilegedUserStatus: action.payload,
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

export default privilegedUserReducer;
=======
        updatingPrivilegedUserStatus: action.payload
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

export default privilegedUserReducer
>>>>>>> Stashed changes
