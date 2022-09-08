import * as types from './actionType'

const initialState = {
  breadCrumbData: {
    orderId: '',
    companyId: '',
    companyName: '',
    upperTabs: '',
  },
}

function BreadcrumbReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BREADCRUMB_DATA:
      return {
        ...state,
        breadCrumbData: action.payload,
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
