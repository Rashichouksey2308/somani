import * as types from './actionsType'

const initialState = {
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
    write: false,
  },
}

function GenericReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT_GENERIC:
      return {
        ...state,
      }
    case types.SUBMIT_GENERIC_SUCCESS: {
      return {
        ...state,
      }
    }

    case types.SUBMIT_GENERIC_FAILED: {
      return {
        ...state,
      }
    }

    default:
      return state
  }
}

export default GenericReducer
