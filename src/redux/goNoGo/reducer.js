import * as types from './actionType'

const initialState = {
  gettingAllGoNoGo: false,
  allGoNoGo: null,
  gettingGoNoGo: false,
  goNoGoResponse: null,
  updatingGoNoGo: false,
  updatedGoNoGoResponse: false,
  creatingGoNoGo: false,
  createdGoNoGo: null
}

function GoNoGoReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_GONOGO:
      return {
        ...state,
        gettingAllGoNoGo: true
      }

    case types.GET_ALL_GONOGO_SUCCESS:
      return {
        ...state,
        gettingAllGoNoGo: false,
        allGoNoGo: action.payload
      }

    case types.GET_ALL_GONOGO_FAILED:
      return {
        ...state,
        gettingAllGoNoGo: false,
        allGoNoGo: null
      }

    case types.GET_GONOGO:
      return {
        ...state,
        gettingGoNoGo: true
      }

    case types.GET_GONOGO_SUCCESS:
      return {
        ...state,
        gettingGoNoGo: false,
        goNoGoResponse: action.payload
      }

    case types.GET_GONOGO_FAILED:
      return {
        ...state,
        gettingGoNoGo: false
      }

    case types.UPDATE_GONOGO:
      return {
        ...state,
        updatingGoNoGo: true,
        updatedGoNoGoResponse: null
      }
    case types.UPDATE_GONOGO_SUCCESS:
      return {
        ...state,
        updatingGoNoGo: false,
        updatedGoNoGoResponse: action.payload
      }
    case types.UPDATE_GONOGO_FAILED:
      return {
        ...state,
        updatingGoNoGo: false,
        updatedGoNoGoResponse: null
      }

    case types.CREATE_GONOGO:
      return {
        ...state,
        creatingGoNoGo: true,
        createdGoNoGo: null
      }
    case types.CREATE_GONOGO_SUCCESS:
      return {
        ...state,
        creatingGoNoGo: false,
        createdGoNoGo: action.payload
      }
    case types.CREATE_GONOGO_FAILED:
      return {
        ...state,
        creatingGoNoGo: false,
        createdGoNoGo: null
      }

    default:
      return state
  }
}

export default GoNoGoReducer