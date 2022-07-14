const initialState = {
  show_sidebar: true,
  isMobile: false,
}

export const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return {
        ...state,
        show_sidebar: true,
      }

    case 'HIDE_SIDEBAR':
      return {
        ...state,
        show_sidebar: false,
      }
    case 'IS_MOBILE':
      return {
        ...state,
        isMobile: action.value,
      }
    case 'SET_MOBILE':
      // console.log(action, 'setmobie')
      return {
        ...state,
        isMobile: action.value,
      }

    default:
      return state
  }
}
