import * as types from './actionType'

const initialState = {
  breadCrumbData: {
    orderId: '',
    companyId: '',
    companyName: '',
    upperTabs: '',
  },
  currency: 'crores',
  unit: 'inr',
  sideBarMain: '',
  subsideBarMain: '',
}

function BreadcrumbReducer(state = initialState, action) {
  console.log(action.payload, 'SET_UNIT')
  switch (action.type) {
    case types.GET_BREADCRUMB_DATA:
      return {
        ...state,
        breadCrumbData: action.payload,
      }

    case types.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }
    case types.SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      }
    case types.SIDEBAR:
      return {
        ...state,
        sideBarMain: action.payload.sideBarMain,
        subsideBarMain: action.payload.subsideBarMain,
      }

    case types.CLEAR_BREADCRUMB_DATA:
      return {
        ...state,
        breadCrumbData: {
          orderId: '',
          CompanyId: '',
          companyName: '',
          upperTabs: '',
        },
      }
    default:
      return state
  }
}

export default BreadcrumbReducer
