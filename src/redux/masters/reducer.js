import * as types from './actionType'

const initialState = {
  getCountriesMasterData: [],
  getPortsMasterData: [],
  getCommoditiesMasterData: [],
  getDocumentsMasterData: [],
  getCurrencyMasterData: [],
  getInternalCompaniesMasterData: [],
  getVendorsMasterData: [],
  getBanksMasterData: [],
  getBranchesMasterData: [],
  getPincodesMasterData: [],
}

function MastersReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_COUNTRIES_MASTERS:
      return {
        ...state,
        getCountriesMasterData: [],
      }
    case types.GET_COUNTRIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCountriesMasterData: action.payload,
      }
    case types.GET_COUNTRIES_MASTERS_FAILURE:
      return {
        ...state,
        getCountriesMasterData: [],
      }

    case types.GET_PORTS_MASTERS:
      return {
        ...state,
        getPortsMasterData: [],
      }
    case types.GET_PORTS_MASTERS_SUCCESS:
      return {
        ...state,
        getPortsMasterData: action.payload,
      }
    case types.GET_PORTS_MASTERS_FAILURE:
      return {
        ...state,
        getPortsMasterData: [],
      }

    case types.GET_COMMODITIES_MASTERS:
      return {
        ...state,
        getCommoditiesMasterData: [],
      }
    case types.GET_COMMODITIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCommoditiesMasterData: action.payload,
      }
    case types.GET_COMMODITIES_MASTERS_FAILURE:
      return {
        ...state,
        getCommoditiesMasterData: [],
      }

    case types.GET_DOCUMENTS_MASTERS:
      return {
        ...state,
        getDocumentsMasterData: [],
      }
    case types.GET_DOCUMENTS_MASTERS_SUCCESS:
      return {
        ...state,
        getDocumentsMasterData: action.payload,
      }
    case types.GET_DOCUMENTS_MASTERS_FAILURE:
      return {
        ...state,
        getDocumentsMasterData: [],
      }

    case types.GET_CURRENCY_MASTERS:
      return {
        ...state,
        getCurrencyMasterData: [],
      }
    case types.GET_CURRENCY_MASTERS_SUCCESS:
      return {
        ...state,
        getCurrencyMasterData: action.payload,
      }
    case types.GET_CURRENCY_MASTERS_FAILURE:
      return {
        ...state,
        getCurrencyMasterData: [],
      }

    case types.GET_INTERNAL_COMPANIES_MASTERS:
      return {
        ...state,
        getInternalCompaniesMasterData: [],
      }
    case types.GET_INTERNAL_COMPANIES_MASTERS_SUCCESS:
      return {
        ...state,
        getInternalCompaniesMasterData: action.payload,
      }
    case types.GET_INTERNAL_COMPANIES_MASTERS_FAILURE:
      return {
        ...state,
        getInternalCompaniesMasterData: [],
      }

    case types.GET_VENDORS_MASTERS:
      return {
        ...state,
        getVendorsMasterData: [],
      }
    case types.GET_VENDORS_MASTERS_SUCCESS:
      return {
        ...state,
        getVendorsMasterData: action.payload,
      }
    case types.GET_VENDORS_MASTERS_FAILURE:
      return {
        ...state,
        getVendorsMasterData: [],
      }

    case types.GET_BANKS_MASTERS:
      return {
        ...state,
        getBanksMasterData: [],
      }
    case types.GET_BANKS_MASTERS_SUCCESS:
      return {
        ...state,
        getBanksMasterData: action.payload,
      }
    case types.GET_BANKS_MASTERS_FAILURE:
      return {
        ...state,
        getBanksMasterData: [],
      }

    case types.GET_BANK_BRANCHES_MASTERS:
      return {
        ...state,
        getBranchesMasterData: [],
      }
    case types.GET_BANK_BRANCHES_MASTERS_SUCCESS:
      return {
        ...state,
        getBranchesMasterData: action.payload,
      }
    case types.GET_BANK_BRANCHES_MASTERS_FAILURE:
      return {
        ...state,
        getBranchesMasterData: [],
      }

    case types.GET_PINCODES_MASTERS:
      return {
        ...state,
        getPincodesMasterData: [],
      }
    case types.GET_PINCODES_MASTERS_SUCCESS:
      return {
        ...state,
        getPincodesMasterData: action.payload,
      }
    case types.GET_PINCODES_MASTERS_FAILURE:
      return {
        ...state,
        getPincodesMasterData: [],
      }

    default:
      return state
  }
}

export default MastersReducer
