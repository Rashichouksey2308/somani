import * as types from './actionType';

const initialState = {
  Fetchingmcareport: false,
  mcaReport: null,
};

function McaReportReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MCA_REPORT:
      return {
        ...state,
        Fetchingmcareport: true,
        mcaReport: null,
      };
    case types.GET_MCA_REPORT_SUCCESS:
      return {
        ...state,
        Fetchingmcareport: false,
        mcaReport: action.payload,
      };
    case types.GET_MCA_REPORT_FAILURE:
      return {
        ...state,
        Fetchingmcareport: false,
        mcaReport: null,
      };

    default:
      return state;
  }
}

export default McaReportReducer;
