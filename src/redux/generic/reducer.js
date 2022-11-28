import * as types from './actions'

const initialState = {
  allGeneric: [],
  selectedGeneric: []
}

function GenericReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_GENERIC_SUCCESS: {
      return {
        ...state,
        allGeneric: action.payload
      }
    }
    case types.SUBMIT_GENERIC:
      return {
        ...state
      }
    case types.SUBMIT_GENERIC_SUCCESS: {
      return {
        ...state
      }
    }

    case types.SUBMIT_GENERIC_FAILED: {
      return {
        ...state
      }
    }

    default:
      return state
  }
}

export default GenericReducer
