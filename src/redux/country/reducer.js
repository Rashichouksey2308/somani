import * as types from './actionType'

const initialState = {
  gettingAllCountry: false,
  allCountry: null,
  gettingCountry: false,
  countryResponse: null,
  updatingCountry: false,
  updateportsResponse: false,
  creatingCountry: false,
  createdCountry: null
}

function CountryReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_COUNTRY:
      return {
        ...state,
        gettingAllCountry: true
      }

    case types.GET_ALL_COUNTRY_SUCCESS:
      return {
        ...state,
        gettingAllCountry: false,
        allCountry: action.payload
      }

    case types.GET_ALL_COUNTRY_FAILED:
      return {
        ...state,
        gettingAllCountry: false,
        allCountry: null
      }

    case types.GET_COUNTRY:
      return {
        ...state,
        gettingCountry: true
      }

    case types.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        gettingCountry: false,
        portsResponse: action.payload
      }

    case types.GET_COUNTRY_FAILED:
      return {
        ...state,
        gettingCountry: false
      }

    case types.UPDATE_COUNTRY:
      return {
        ...state,
        updatingCountry: true,
        updateportsResponse: null
      }
    case types.UPDATE_COUNTRY_SUCCESS:
      return {
        ...state,
        updatingCountry: false,
        updateportsResponse: action.payload
      }
    case types.UPDATE_COUNTRY_FAILED:
      return {
        ...state,
        updatingCountry: false,
        updateportsResponse: null
      }

    case types.CREATE_COUNTRY:
      return {
        ...state,
        creatingCountry: true,
        createdCountry: null
      }
    case types.CREATE_COUNTRY_SUCCESS:
      return {
        ...state,
        creatingCountry: false,
        createdCountry: action.payload
      }
    case types.CREATE_COUNTRY_FAILED:
      return {
        ...state,
        creatingCountry: false,
        createdCountry: null
      }

    default:
      return state
  }
}

export default CountryReducer