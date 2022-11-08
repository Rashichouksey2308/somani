<<<<<<< Updated upstream
import * as types from './actionType';

const initialState = {
  Fetchingmcareport: false,
  mcaReport: null,
};

function McaReportReducer(state = initialState, action) {
=======
import * as types from './actionType'

const initialState = {
  Fetchingmcareport: false,
  mcaReport: null
}

function McaReportReducer (state = initialState, action) {
>>>>>>> Stashed changes
  switch (action.type) {
    case types.PLACE_ORDER:
      return {
        ...state,
        Fetchingmcareport: true,
<<<<<<< Updated upstream
        mcaReport: null,
      };
=======
        mcaReport: null
      }
>>>>>>> Stashed changes
    case types.PLACE_ORDER_SUCCESSFULL:
      return {
        ...state,
        Fetchingmcareport: false,
<<<<<<< Updated upstream
        mcaReport: action.payload,
      };
=======
        mcaReport: action.payload
      }
>>>>>>> Stashed changes
    case types.PLACE_ORDER_FAILED:
      return {
        ...state,
        Fetchingmcareport: false,
<<<<<<< Updated upstream
        mcaReport: null,
      };

    default:
      return state;
  }
}

export default McaReportReducer;
=======
        mcaReport: null
      }

    default:
      return state
  }
}

export default McaReportReducer
>>>>>>> Stashed changes
