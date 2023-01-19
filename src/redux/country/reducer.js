import * as types from './actionType'

const initialState = {
  gettingAllCountry: false,
  allCountry: null,
  gettingCountry: false,
  countryResponse: null,
  updatingCountry: false,
  updateCountryResponse: false,
  creatingCountry: false,
  createdCountry: null,
  editCountryTableDataMaster: false,
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
        countryResponse: action.payload
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
        updateCountryResponse: null
      }
    case types.UPDATE_COUNTRY_SUCCESS:
      return {
        ...state,
        updatingCountry: false,
        updateCountryResponse: action.payload
      }
    case types.UPDATE_COUNTRY_FAILED:
      return {
        ...state,
        updatingCountry: false,
        updateCountryResponse: null
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
    case types.EDIT_COUNTRY_TABLE_DATA_MASTER_SUCCESS:
      return {
        ...state,
        editCountryTableDataMaster: false,
      };

    case types.EDIT_COUNTRY_TABLE_DATA_MASTER_FAILED:
      return {
        ...state,
        editCountryTableDataMaster: false,
      };

    default:
      return state
  }
}

export default CountryReducer