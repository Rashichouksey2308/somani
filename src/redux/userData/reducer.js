import * as types from './actionType'

const initialState = {
  isDark: false,
}
function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_THEME_SUCCESS:
      console.log(action.value, 'actions')

      return {
        ...state,
        isDark: action.value,
      }
    default:
      return state
  }
}

export default UserReducer
