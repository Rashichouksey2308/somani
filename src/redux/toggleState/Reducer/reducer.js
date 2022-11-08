const initialState = {
  show_sidebar: true,
<<<<<<< Updated upstream
  isMobile: false,
};
=======
  isMobile: false
}
>>>>>>> Stashed changes

export const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return {
        ...state,
<<<<<<< Updated upstream
        show_sidebar: true,
      };
=======
        show_sidebar: true
      }
>>>>>>> Stashed changes

    case 'HIDE_SIDEBAR':
      return {
        ...state,
<<<<<<< Updated upstream
        show_sidebar: false,
      };
    case 'IS_MOBILE':
      return {
        ...state,
        isMobile: action.value,
      };
    case 'SET_MOBILE':
      return {
        ...state,
        isMobile: action.value,
      };

    default:
      return state;
  }
};
=======
        show_sidebar: false
      }
    case 'IS_MOBILE':
      return {
        ...state,
        isMobile: action.value
      }
    case 'SET_MOBILE':
      return {
        ...state,
        isMobile: action.value
      }

    default:
      return state
  }
}
>>>>>>> Stashed changes
