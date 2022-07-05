import * as types from './actionType'

const initialState = {
  isDark: false,
  pageName: 'dashboard',
}
function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_THEME_SUCCESS:
      return {
        ...state,
        isDark: action.value,
      }
    case types.PAGE_NAME:
      console.log(action.value, ' action.value')
      return {
        ...state,
        pageName: action.value,
      }
    default:
      return state
  }
}

export default UserReducer
