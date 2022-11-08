<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

const initialState = {
  breadCrumbData: {
    orderId: '',
    companyId: '',
    companyName: '',
<<<<<<< Updated upstream
    upperTabs: '',
=======
    upperTabs: ''
>>>>>>> Stashed changes
  },
  currency: 'crores',
  unit: 'inr',
  sideBarMain: '',
<<<<<<< Updated upstream
  subsideBarMain: '',
};

function BreadcrumbReducer(state = initialState, action) {
=======
  subsideBarMain: ''
}

function BreadcrumbReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_BREADCRUMB_DATA:
      return {
        ...state,
<<<<<<< Updated upstream
        breadCrumbData: action.payload,
      };
=======
        breadCrumbData: action.payload
      }
>>>>>>> Stashed changes

    case types.SET_CURRENCY:
      return {
        ...state,
<<<<<<< Updated upstream
        currency: action.payload,
      };
    case types.SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      };
=======
        currency: action.payload
      }
    case types.SET_UNIT:
      return {
        ...state,
        unit: action.payload
      }
>>>>>>> Stashed changes
    case types.SIDEBAR:
      return {
        ...state,
        sideBarMain: action.payload.sideBarMain,
<<<<<<< Updated upstream
        subsideBarMain: action.payload.subsideBarMain,
      };
=======
        subsideBarMain: action.payload.subsideBarMain
      }
>>>>>>> Stashed changes

    case types.CLEAR_BREADCRUMB_DATA:
      return {
        ...state,
        breadCrumbData: {
          orderId: '',
          CompanyId: '',
          companyName: '',
<<<<<<< Updated upstream
          upperTabs: '',
        },
      };
    default:
      return state;
  }
}

export default BreadcrumbReducer;
=======
          upperTabs: ''
        }
      }
    default:
      return state
  }
}

export default BreadcrumbReducer
>>>>>>> Stashed changes
