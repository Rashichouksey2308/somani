import * as types from './actionType'

const initialState = {
  isDark: false,
  pageName: 'dashboard',
  id: null,
  order: null,
  currency: 'CRORES',
  pageTabName: 'release',
  releaseDetails: [],
}
function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_THEME_SUCCESS:
      return {
        ...state,
        isDark: action.value,
      }
    case types.PAGE_NAME:
      // console.log(action.value, ' action.value')
      return {
        ...state,
        pageName: action.value,
      }
    case types.PAGE_TAB_NAME:
      console.log(action.value, ' action.value')
      return {
        ...state,
        pageTabName: action.value,
      }
    case types.DYNAMIC_PAGE:
      // console.log(action.value, 'kkk')
      return {
        ...state,

        id: action.value,
      }
    case types.DYNAMIC_ORDER:
      return {
        ...state,
        order: action.value,
      }
    case types.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.value,
      }
    case types.RELEASE_DETAIL:
      return {
        ...state,
        releaseDetails: action.payload,
      }
    default:
      return state
  }
}

export default UserReducer
