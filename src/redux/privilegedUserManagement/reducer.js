import * as types from './actionType'
import { LOGOUT_USER } from '../authentication/actionType'

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
  updatingPrivilegedUserStatus: null,
}

function privilegedUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_USER_TYPES:
      return {
        ...state,
        fetchingUserTypeList: true,
        fetchingUserTypeListStatus: null,
      }
    case types.FETCH_ALL_USER_TYPES_SUCCESS:
      return {
        ...state,
        fetchingUserTypeList: false,
        userTypeList: action.payload,
        fetchingUserTypeListStatus: null,
      }
    case types.FETCH_ALL_USER_TYPES_FAILED:
      return {
        ...state,
        fetchingUserTypeList: false,
        userTypeList: [],
        fetchingUserTypeListStatus: action.payload,
      }

    case types.REGISTER_NEW_PRIVILEGED_USER:
      return {
        ...state,
        registeringNewPrivilegedUser: true,
        registeringNewPrivilegedUserStatus: null,
      }
    case types.REGISTER_NEW_PRIVILEGED_USER_SUCCESS:
      return {
        ...state,
        registeringNewPrivilegedUser: false,
        registeringNewPrivilegedUserStatus: action.payload,
      }
    case types.REGISTER_NEW_PRIVILEGED_USER_FAILED:
      return {
        ...state,
        registeringNewPrivilegedUser: true,
        registeringNewPrivilegedUserStatus: action.payload,
      }

    case types.FETCH_ALL_PRIVILEGED_USER:
      return {
        ...state,
        fetchingPrivilegedUsers: true,
        fetchingPrivilegedUsersStatus: null,
      }
    case types.FETCH_ALL_PRIVILEGED_USER_SUCCESS:
      return {
        ...state,
        fetchingPrivilegedUsers: false,
        fetchingPrivilegedUsersStatus: null,
        privilegedUsers: action.payload,
      }
    case types.FETCH_ALL_PRIVILEGED_USER_FAILED:
      return {
        ...state,
        fetchingPrivilegedUsers: false,
        fetchingPrivilegedUsersStatus: action.payload,
        privilegedUsers: [],
      }

    case types.UPDATE_PRIVILEGED_USER:
      return {
        ...state,
        updatingPrivilegedUser: true,
        updatingPrivilegedUserStatus: null,
      }
    case types.UPDATE_PRIVILEGED_USER_SUCCESS:
      return {
        ...state,
        updatingPrivilegedUser: false,
        updatingPrivilegedUserStatus: action.payload,
      }
    case types.UPDATE_PRIVILEGED_USER_FAILED:
      return {
        ...state,
        updatingPrivilegedUser: false,
        updatingPrivilegedUserStatus: action.payload,
      }
    case LOGOUT_USER:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}

export default privilegedUserReducer
