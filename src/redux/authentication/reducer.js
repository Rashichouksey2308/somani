import * as types from './actionType'

const defaultObj = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  loggingInUser: false,
  loggingUserMessage: null,
  fetchingUserPermissions: false,
  fetchingUserPermissionsStatus: null,
  userPermissions: [],
}

const initialState = {
  userData: { ...defaultObj.user },
  token: null,
  loggingInUser: false,
  loggingUserMessage: null,
  fetchingUserPermissions: false,
  fetchingUserPermissionsStatus: null,
  userPermissions: [],
  userAccessLevel: 0,
  userId: null,
  loading: true,
  permissions: {
    read: false,
    write: false,
  },
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        token: null,
        loggingInUser: true,
        loggingUserMessage: null,
      }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        loggingInUser: false,
        loggingUserMessage: null,
      }
    }

    case types.LOGIN_USER_FAILED: {
      return {
        ...state,
        token: null,
        loggingInUser: false,
        loggingUserMessage: action.payload.message,
      }
    }

    case types.FETCH_USER_PERMISSIONS:
      return {
        ...state,
        fetchingUserPermissions: true,
        fetchingUserPermissionsStatus: null,
        userPermissions: [],
      }

    case types.FETCH_USER_PERMISSIONS_SUCCESS:
      return {
        ...state,
        fetchingUserPermissions: false,
        fetchingUserPermissionsStatus: null,
        userPermissions: action.payload,
        userAccessLevel: action.user.accessLevel,
      }

    case types.FETCH_USER_PERMISSIONS_FAILED:
      return {
        ...state,
        fetchingUserPermissions: false,
        fetchingUserPermissionsStatus: action.payload,
        userPermissions: [],
      }

    case types.FETCH_CURRENT_USER_PROFILE:
      return {
        ...state,
        userData: { ...defaultObj.user },
      }

    case types.FETCH_CURRENT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      }

    case types.FETCH_CURRENT_USER_PROFILE_FAILED:
      return {
        ...state,
        userData: { ...defaultObj.user },
      }

    case types.AUTHENTICATE_USER:
      return {
        ...state,
        token: action.payload,
      }

    case types.LOGOUT_USER:
      return {
        ...state,
        ...initialState,
      }

    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        userId: action.payload,
      }
    case types.HANDLE_PAGE_LOADING:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default authReducer
