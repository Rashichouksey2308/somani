<<<<<<< Updated upstream
import * as types from './actionType';

const initialState = {
  gettingCompanyPan: false,
  gettingCompanyPanResponse: null,
};

function GetCompanyPanReducer(state = initialState, action) {
=======
import * as types from './actionType'

const initialState = {
  gettingCompanyPan: false,
  gettingCompanyPanResponse: null
}

function GetCompanyPanReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.GET_COMPANY_PAN:
      return {
        ...state,
        gettingCompanyPan: true,
<<<<<<< Updated upstream
        gettingCompanyPanResponse: null,
      };
=======
        gettingCompanyPanResponse: null
      }
>>>>>>> Stashed changes
    case types.GET_COMPANY_PAN_SUCCESSFULL:
      return {
        ...state,
        gettingCompanyPan: false,
<<<<<<< Updated upstream
        gettingCompanyPanResponse: action.payload,
      };
=======
        gettingCompanyPanResponse: action.payload
      }
>>>>>>> Stashed changes
    case types.GET_COMPANY_PAN_FAILED:
      return {
        ...state,
        gettingCompanyPan: false,
<<<<<<< Updated upstream
        gettingCompanyPanResponse: null,
      };

    default:
      return state;
  }
}

export default GetCompanyPanReducer;
=======
        gettingCompanyPanResponse: null
      }

    default:
      return state
  }
}

export default GetCompanyPanReducer
>>>>>>> Stashed changes
