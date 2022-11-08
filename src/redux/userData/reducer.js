<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  isDark: false,
  pageName: 'dashboard',
  id: null,
  order: null,
  currency: 'CRORES',
  pageTabName: 'release',
<<<<<<< Updated upstream
  releaseDetails: [],
};

function UserReducer(state = initialState, action) {
=======
  releaseDetails: []
}

function UserReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.CHANGE_THEME_SUCCESS:
      return {
        ...state,
<<<<<<< Updated upstream
        isDark: action.value,
      };
    case types.PAGE_NAME:
      return {
        ...state,
        pageName: action.value,
      };
    case types.PAGE_TAB_NAME:
      return {
        ...state,
        pageTabName: action.value,
      };
=======
        isDark: action.value
      }
    case types.PAGE_NAME:
      return {
        ...state,
        pageName: action.value
      }
    case types.PAGE_TAB_NAME:
      return {
        ...state,
        pageTabName: action.value
      }
>>>>>>> Stashed changes
    case types.DYNAMIC_PAGE:
      return {
        ...state,

<<<<<<< Updated upstream
        id: action.value,
      };
    case types.DYNAMIC_ORDER:
      return {
        ...state,
        order: action.value,
      };
    case types.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.value,
      };
    case types.RELEASE_DETAIL:
      return {
        ...state,
        releaseDetails: action.payload,
      };
    default:
      return state;
  }
}

export default UserReducer;
=======
        id: action.value
      }
    case types.DYNAMIC_ORDER:
      return {
        ...state,
        order: action.value
      }
    case types.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.value
      }
    case types.RELEASE_DETAIL:
      return {
        ...state,
        releaseDetails: action.payload
      }
    default:
      return state
  }
}

export default UserReducer
>>>>>>> Stashed changes
