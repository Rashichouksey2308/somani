import * as types from './actionType'
import { LOGOUT_USER } from '../authentication/actionType'

const initialState = {
  fetchingUsersList: false,
  usersList: [],
  fetchingUsersListStatus: null,
}

function userManagementReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_USERS:
      return {
        ...state,
        fetchingUsersList: true,
        fetchingUsersListStatus: null,
      }
    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsersList: false,
        usersList: action.payload,
        fetchingUsersListStatus: null,
      }
    case types.FETCH_ALL_USERS_FAILED:
      return {
        ...state,
        fetchingUsersList: false,
        usersList: [],
        fetchingUsersListStatus: action.payload,
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

export default userManagementReducer
