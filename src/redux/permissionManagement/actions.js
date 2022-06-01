import API from '../../utils/endpoints'
import * as types from './actionType'

function creatingUserType() {
  return {
    type: types.CREATE_USERTYPE,
  }
}

function creatingUserTypeSuccess(payload) {
  return {
    type: types.CREATE_USERTYPE_SUCCESS,
    payload,
  }
}

function creatingUserTypeFailed(payload) {
  return {
    type: types.CREATE_USERTYPE_FAILED,
    payload,
  }
}

function fetchingUserType() {
  return {
    type: types.FETCH_USERTYPE,
  }
}

function fetchingUserTypeSuccess(payload) {
  return {
    type: types.FETCH_USERTYPE_SUCCESS,
    payload,
  }
}

function fetchingUserTypeFailed(payload) {
  return {
    type: types.FETCH_USERTYPE_FAILED,
    payload,
  }
}

function removingUserType() {
  return {
    type: types.REMOVE_USERTYPE,
  }
}

function removingUserTypeSuccess(payload) {
  return {
    type: types.REMOVE_USERTYPE_SUCCESS,
    payload,
  }
}

function removingUserTypeFailed(payload) {
  return {
    type: types.REMOVE_USERTYPE_FAILED,
    payload,
  }
}

function updatingUserPermissions() {
  return {
    type: types.UPDATE_USER_PERMISSIONS,
  }
}

function updatingUserPermissionsSuccess(payload) {
  return {
    type: types.UPDATE_USER_PERMISSIONS_SUCCESS,
    payload,
  }
}

function updatingUserPermissionsFailed(payload) {
  return {
    type: types.UPDATE_USER_PERMISSIONS_FAILED,
    payload,
  }
}

export const createUserType = (payload) => async (dispatch, getState, api) => {
  dispatch(creatingUserType())
  try {
    let response = await api.post(API.userType, payload)
    if (response.data.code === 200) {
      dispatch(creatingUserTypeSuccess(response.data))
      dispatch(fetchUserType())
    } else {
      dispatch(creatingUserTypeFailed(response.data))
    }
  } catch (error) {
    dispatch(creatingUserTypeFailed('error'))
  }
}

export const fetchUserType = () => async (dispatch, getState, api) => {
  dispatch(fetchingUserType())
  try {
    let response = await api.get(API.userType)
    if (response.data.code === 200) {
      let UserList = []
      let newPageGroup = {}
      await response.data.data.map(async (userType) => {
        let newObj = {
          name: userType.name,
          _id: userType._id,
          pageGroups: [],
          level: userType.accessLevel,
        }
        if (userType.pageGroups.length === 0) {
          UserList = [...UserList, newObj]
        } else {
          await userType.pageGroups.map((group) => {
            return (
              (newPageGroup = {
                ...group.group,
                pages: group.pages,
              }),
              (newObj.pageGroups = [...newObj.pageGroups, newPageGroup])
            )
          })
          UserList = [...UserList, { ...newObj }]
        }
      })

      dispatch(fetchingUserTypeSuccess(UserList))
    } else {
      dispatch(fetchingUserTypeFailed(response.data))
    }
  } catch (error) {
    dispatch(fetchingUserTypeFailed('error'))
  }
}

export const updateUserPermissions =
  (payload) => async (dispatch, getState, api) => {
    dispatch(updatingUserPermissions())
    try {
      let response = await api.post(API.updateUserType, payload)
      if (response.data.code === 200) {
        dispatch(updatingUserPermissionsSuccess(response.data))
        dispatch(fetchUserType())
      } else {
        dispatch(updatingUserPermissionsFailed(response.data))
      }
    } catch (error) {
      dispatch(updatingUserPermissionsFailed('error'))
    }
  }

export const removeUserType = (payload) => async (dispatch, getState, api) => {
  dispatch(removingUserType())
  try {
    let response = await api.post(API.deleteUserType, payload)
    if (response.data.code === 200) {
      dispatch(removingUserTypeSuccess(response.data))
      dispatch(fetchUserType())
    } else {
      dispatch(removingUserTypeFailed(response.data))
    }
  } catch (error) {
    dispatch(removingUserTypeFailed('Error'))
  }
}
