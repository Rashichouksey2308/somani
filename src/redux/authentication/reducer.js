<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const defaultObj = {
  user: {
    name: '',
<<<<<<< Updated upstream
    email: '',
=======
    email: ''
>>>>>>> Stashed changes
  },
  token: null,
  loggingInUser: false,
  loggingUserMessage: null,
  fetchingUserPermissions: false,
  fetchingUserPermissionsStatus: null,
<<<<<<< Updated upstream
  userPermissions: [],
};
=======
  userPermissions: []
}
>>>>>>> Stashed changes

const initialState = {
  userData: { ...defaultObj.user },
  user: {},
  token: null,
  isuserLoggedin: false,
  loggingInUser: false,
  loggingUserOut: false,
  loggingUserMessage: null,
  fetchingUserPermissions: false,
  fetchingUserPermissionsStatus: null,
  userPermissions: [],
  userAccessLevel: 0,
  userId: null,
  loading: true,
  permissions: {
    read: false,
<<<<<<< Updated upstream
    write: false,
  },
};

function AuthReducer(state = initialState, action) {
=======
    write: false
  }
}

function AuthReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        token: null,
        loggingInUser: true,
<<<<<<< Updated upstream
        loggingUserMessage: null,
      };
=======
        loggingUserMessage: null
      }
>>>>>>> Stashed changes
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        loggingInUser: false,
        loggingUserMessage: null,
<<<<<<< Updated upstream
        isuserLoggedin: true,
      };
=======
        isuserLoggedin: true
      }
>>>>>>> Stashed changes
    }

    case types.LOGIN_USER_FAILED: {
      return {
        ...state,
        user: action.payload,
        token: null,
        loggingInUser: false,
<<<<<<< Updated upstream
        loggingUserMessage: action.payload.message,
      };
=======
        loggingUserMessage: action.payload.message
      }
>>>>>>> Stashed changes
    }

    case types.FETCH_USER_PERMISSIONS:
      return {
        ...state,
        fetchingUserPermissions: true,
        fetchingUserPermissionsStatus: null,
<<<<<<< Updated upstream
        userPermissions: [],
      };
=======
        userPermissions: []
      }
>>>>>>> Stashed changes

    case types.FETCH_USER_PERMISSIONS_SUCCESS:
      return {
        ...state,
        fetchingUserPermissions: false,
        fetchingUserPermissionsStatus: null,
        userPermissions: action.payload,
<<<<<<< Updated upstream
        userAccessLevel: action.user.accessLevel,
      };
=======
        userAccessLevel: action.user.accessLevel
      }
>>>>>>> Stashed changes

    case types.FETCH_USER_PERMISSIONS_FAILED:
      return {
        ...state,
        fetchingUserPermissions: false,
        fetchingUserPermissionsStatus: action.payload,
<<<<<<< Updated upstream
        userPermissions: [],
      };
=======
        userPermissions: []
      }
>>>>>>> Stashed changes

    case types.FETCH_CURRENT_USER_PROFILE:
      return {
        ...state,
<<<<<<< Updated upstream
        userData: { ...defaultObj.user },
      };
=======
        userData: { ...defaultObj.user }
      }
>>>>>>> Stashed changes

    case types.FETCH_CURRENT_USER_PROFILE_SUCCESS:
      return {
        ...state,
<<<<<<< Updated upstream
        userData: action.payload,
      };
=======
        userData: action.payload
      }
>>>>>>> Stashed changes

    case types.FETCH_CURRENT_USER_PROFILE_FAILED:
      return {
        ...state,
<<<<<<< Updated upstream
        userData: { ...defaultObj.user },
      };
=======
        userData: { ...defaultObj.user }
      }
>>>>>>> Stashed changes

    case types.AUTHENTICATE_USER:
      return {
        ...state,
<<<<<<< Updated upstream
        token: action.payload,
      };
=======
        token: action.payload
      }
>>>>>>> Stashed changes

    case types.LOGOUT_USER:
      return {
        ...state,
        loggingoutUser: true,
<<<<<<< Updated upstream
        ...initialState,
      };
=======
        ...initialState
      }
>>>>>>> Stashed changes

    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
<<<<<<< Updated upstream
        userId: action.payload,
      };
    case types.HANDLE_PAGE_LOADING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default AuthReducer;
=======
        userId: action.payload
      }
    case types.HANDLE_PAGE_LOADING:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default AuthReducer
>>>>>>> Stashed changes
