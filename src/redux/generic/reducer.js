import * as types from './actionsType'

const initialState = {
  allGeneric: [],
  selectedGeneric: [],
}

function GenericReducer(state = initialState, action) {
  console.log(action.type, '988')
  switch (action.type) {
    case types.GET_GENERIC_SUCCESS: {
      console.log('hereh18')
      return {
        ...state,
        allGeneric: action.payload,
      }
    }
    case types.SUBMIT_GENERIC:
      return {
        ...state,
      }
    case types.SUBMIT_GENERIC_SUCCESS: {
      return {
        ...state,
      }
    }

    case types.SUBMIT_GENERIC_FAILED: {
      return {
        ...state,
      }
    }
    // case types.GET_GENERIC:
    //   return {
    //     ...state,
    //   }

    // case types.GET_GENERIC_FAILED: {
    //   return {
    //     ...state,
    //     allGeneric: [],
    //   }
    // }

    default:
      return state
  }
}

export default GenericReducer
