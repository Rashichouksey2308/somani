import * as types from './actionType'
import { LOGOUT_USER } from '../authentication/actionType'

const initialState = {
  creatingUserType: false,
  creatingUserTypeStatus: null,
  fetchingUserType: false,
  fetchingUserTypeStatus: null,
  userTypeList: [],
  removingUserType: false,
  removingUserTypeStatus: null,
  updatingUserPermissions: false,
  updatingUserPermissionsStatus: null,
}

function permissionManagementReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USERTYPE:
      return {
        ...state,
        creatingUserType: true,
        creatingUserTypeStatus: null,
      }
    case types.CREATE_USERTYPE_SUCCESS:
      return {
        ...state,
        creatingUserType: false,
        creatingUserTypeStatus: action.payload,
      }
    case types.CREATE_USERTYPE_FAILED:
      return {
        ...state,
        creatingUserType: false,
        creatingUserTypeStatus: action.payload,
      }
    case types.FETCH_USERTYPE:
      return {
        ...state,
        fetchingUserType: true,
        fetchingUserTypeStatus: null,
      }
    case types.FETCH_USERTYPE_SUCCESS:
      return {
        ...state,
        fetchingUserType: false,
        userTypeList: action.payload,
      }
    case types.FETCH_USERTYPE_FAILED:
      return {
        ...state,
        fetchingUserType: false,
        fetchingUserTypeStatus: action.payload,
      }

    case types.REMOVE_USERTYPE:
      return {
        ...state,
        removingUserType: true,
        removingUserTypeStatus: null,
      }
    case types.REMOVE_USERTYPE_SUCCESS:
      return {
        ...state,
        removingUserType: false,
        removingUserTypeStatus: action.payload,
      }
    case types.REMOVE_USERTYPE_FAILED:
      return {
        ...state,
        removingUserType: false,
        removingUserTypeStatus: action.payload,
      }
    case types.UPDATE_USER_PERMISSIONS:
      return {
        ...state,
        updatingUserPermissions: true,
        updatingUserPermissionsStatus: null,
      }
    case types.UPDATE_USER_PERMISSIONS_SUCCESS:
      return {
        ...state,
        updatingUserPermissions: false,
        updatingUserPermissionsStatus: action.payload,
      }
    case types.UPDATE_USER_PERMISSIONS_FAILED:
      return {
        ...state,
        updatingUserPermissions: false,
        updatingUserPermissionsStatus: action.payload,
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

export default permissionManagementReducer
