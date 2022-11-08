<<<<<<< Updated upstream
import * as types from './actionType';
=======
import * as types from './actionType'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  getPincodesMasterData: [],
};

function MastersReducer(state = initialState, action) {
=======
  getPincodesMasterData: []
}

function MastersReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_COUNTRIES_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getCountriesMasterData: [],
      };
    case types.GET_COUNTRIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCountriesMasterData: action.payload,
      };
    case types.GET_COUNTRIES_MASTERS_FAILURE:
      return {
        ...state,
        getCountriesMasterData: [],
      };
=======
        getCountriesMasterData: []
      }
    case types.GET_COUNTRIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCountriesMasterData: action.payload
      }
    case types.GET_COUNTRIES_MASTERS_FAILURE:
      return {
        ...state,
        getCountriesMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_PORTS_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getPortsMasterData: [],
      };
    case types.GET_PORTS_MASTERS_SUCCESS:
      return {
        ...state,
        getPortsMasterData: action.payload,
      };
    case types.GET_PORTS_MASTERS_FAILURE:
      return {
        ...state,
        getPortsMasterData: [],
      };
=======
        getPortsMasterData: []
      }
    case types.GET_PORTS_MASTERS_SUCCESS:
      return {
        ...state,
        getPortsMasterData: action.payload
      }
    case types.GET_PORTS_MASTERS_FAILURE:
      return {
        ...state,
        getPortsMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_COMMODITIES_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getCommoditiesMasterData: [],
      };
    case types.GET_COMMODITIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCommoditiesMasterData: action.payload,
      };
    case types.GET_COMMODITIES_MASTERS_FAILURE:
      return {
        ...state,
        getCommoditiesMasterData: [],
      };
=======
        getCommoditiesMasterData: []
      }
    case types.GET_COMMODITIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCommoditiesMasterData: action.payload
      }
    case types.GET_COMMODITIES_MASTERS_FAILURE:
      return {
        ...state,
        getCommoditiesMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_DOCUMENTS_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getDocumentsMasterData: [],
      };
    case types.GET_DOCUMENTS_MASTERS_SUCCESS:
      return {
        ...state,
        getDocumentsMasterData: action.payload,
      };
    case types.GET_DOCUMENTS_MASTERS_FAILURE:
      return {
        ...state,
        getDocumentsMasterData: [],
      };
=======
        getDocumentsMasterData: []
      }
    case types.GET_DOCUMENTS_MASTERS_SUCCESS:
      return {
        ...state,
        getDocumentsMasterData: action.payload
      }
    case types.GET_DOCUMENTS_MASTERS_FAILURE:
      return {
        ...state,
        getDocumentsMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_CURRENCY_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getCurrencyMasterData: [],
      };
    case types.GET_CURRENCY_MASTERS_SUCCESS:
      return {
        ...state,
        getCurrencyMasterData: action.payload,
      };
    case types.GET_CURRENCY_MASTERS_FAILURE:
      return {
        ...state,
        getCurrencyMasterData: [],
      };
=======
        getCurrencyMasterData: []
      }
    case types.GET_CURRENCY_MASTERS_SUCCESS:
      return {
        ...state,
        getCurrencyMasterData: action.payload
      }
    case types.GET_CURRENCY_MASTERS_FAILURE:
      return {
        ...state,
        getCurrencyMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_INTERNAL_COMPANIES_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getInternalCompaniesMasterData: [],
      };
    case types.GET_INTERNAL_COMPANIES_MASTERS_SUCCESS:
      return {
        ...state,
        getInternalCompaniesMasterData: action.payload,
      };
    case types.GET_INTERNAL_COMPANIES_MASTERS_FAILURE:
      return {
        ...state,
        getInternalCompaniesMasterData: [],
      };
=======
        getInternalCompaniesMasterData: []
      }
    case types.GET_INTERNAL_COMPANIES_MASTERS_SUCCESS:
      return {
        ...state,
        getInternalCompaniesMasterData: action.payload
      }
    case types.GET_INTERNAL_COMPANIES_MASTERS_FAILURE:
      return {
        ...state,
        getInternalCompaniesMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_VENDORS_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getVendorsMasterData: [],
      };
    case types.GET_VENDORS_MASTERS_SUCCESS:
      return {
        ...state,
        getVendorsMasterData: action.payload,
      };
    case types.GET_VENDORS_MASTERS_FAILURE:
      return {
        ...state,
        getVendorsMasterData: [],
      };
=======
        getVendorsMasterData: []
      }
    case types.GET_VENDORS_MASTERS_SUCCESS:
      return {
        ...state,
        getVendorsMasterData: action.payload
      }
    case types.GET_VENDORS_MASTERS_FAILURE:
      return {
        ...state,
        getVendorsMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_BANKS_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getBanksMasterData: [],
      };
    case types.GET_BANKS_MASTERS_SUCCESS:
      return {
        ...state,
        getBanksMasterData: action.payload,
      };
    case types.GET_BANKS_MASTERS_FAILURE:
      return {
        ...state,
        getBanksMasterData: [],
      };
=======
        getBanksMasterData: []
      }
    case types.GET_BANKS_MASTERS_SUCCESS:
      return {
        ...state,
        getBanksMasterData: action.payload
      }
    case types.GET_BANKS_MASTERS_FAILURE:
      return {
        ...state,
        getBanksMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_BANK_BRANCHES_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getBranchesMasterData: [],
      };
    case types.GET_BANK_BRANCHES_MASTERS_SUCCESS:
      return {
        ...state,
        getBranchesMasterData: action.payload,
      };
    case types.GET_BANK_BRANCHES_MASTERS_FAILURE:
      return {
        ...state,
        getBranchesMasterData: [],
      };
=======
        getBranchesMasterData: []
      }
    case types.GET_BANK_BRANCHES_MASTERS_SUCCESS:
      return {
        ...state,
        getBranchesMasterData: action.payload
      }
    case types.GET_BANK_BRANCHES_MASTERS_FAILURE:
      return {
        ...state,
        getBranchesMasterData: []
      }
>>>>>>> Stashed changes

    case types.GET_PINCODES_MASTERS:
      return {
        ...state,
<<<<<<< Updated upstream
        getPincodesMasterData: [],
      };
    case types.GET_PINCODES_MASTERS_SUCCESS:
      return {
        ...state,
        getPincodesMasterData: action.payload,
      };
    case types.GET_PINCODES_MASTERS_FAILURE:
      return {
        ...state,
        getPincodesMasterData: [],
      };

    default:
      return state;
  }
}

export default MastersReducer;
=======
        getPincodesMasterData: []
      }
    case types.GET_PINCODES_MASTERS_SUCCESS:
      return {
        ...state,
        getPincodesMasterData: action.payload
      }
    case types.GET_PINCODES_MASTERS_FAILURE:
      return {
        ...state,
        getPincodesMasterData: []
      }

    default:
      return state
  }
}

export default MastersReducer
>>>>>>> Stashed changes
