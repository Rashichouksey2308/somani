<<<<<<< Updated upstream
import * as types from './actionType';
import { LOGOUT_USER } from '../authentication/actionType';
=======
import * as types from './actionType'
import { LOGOUT_USER } from '../authentication/actionType'
>>>>>>> Stashed changes

const initialState = {
  fetchingUsersList: false,
  usersList: [],
<<<<<<< Updated upstream
  fetchingUsersListStatus: null,
};

function userManagementReducer(state = initialState, action) {
=======
  fetchingUsersListStatus: null
}

function userManagementReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.FETCH_ALL_USERS:
      return {
        ...state,
        fetchingUsersList: true,
<<<<<<< Updated upstream
        fetchingUsersListStatus: null,
      };
=======
        fetchingUsersListStatus: null
      }
>>>>>>> Stashed changes
    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsersList: false,
        usersList: action.payload,
<<<<<<< Updated upstream
        fetchingUsersListStatus: null,
      };
=======
        fetchingUsersListStatus: null
      }
>>>>>>> Stashed changes
    case types.FETCH_ALL_USERS_FAILED:
      return {
        ...state,
        fetchingUsersList: false,
        usersList: [],
<<<<<<< Updated upstream
        fetchingUsersListStatus: action.payload,
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

export default userManagementReducer;
=======
        fetchingUsersListStatus: action.payload
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

export default userManagementReducer
>>>>>>> Stashed changes
