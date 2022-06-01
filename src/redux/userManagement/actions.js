import API from '../../utils/endpoints'
import * as types from './actionType'

function fetchingAllUsers() {
  return {
    type: types.FETCH_ALL_USERS,
  }
}

function fetchingAllUsersSuccess(payload) {
  return {
    type: types.FETCH_ALL_USERS_SUCCESS,
    payload,
  }
}

function fetchingAllUsersFailed(payload) {
  return {
    type: types.FETCH_ALL_USERS_FAILED,
    payload,
  }
}

export const fetchAllUsers = (page) => async (dispatch, getState, api) => {
  dispatch(fetchingAllUsers())
  try {
    let response = await api.get(`${API.fetchUsersRoute}?page=${page}`)
    if (response.data.code === 200) {
      const existingUsers = getState().UserManagement.usersList
      const newList = [...existingUsers, ...response.data.data]
      dispatch(fetchingAllUsersSuccess(newList))
    } else {
      dispatch(fetchingAllUsersFailed('error'))
    }
  } catch (error) {
    dispatch(fetchingAllUsersFailed('error'))
  }
}
