import * as types from './actionType';

const initialState = {
  editIIAGLLedgerMaster: false,
};

function IIAGLLedgerReducer(state = initialState, action) {
  switch (action.type) {   
    case types.EDIT_IIAGLLEDGER_MASTER_SUCCESS:
      return {
        ...state,
        editIIAGLLedgerMaster: false,
      };

    case types.EDIT_IIAGLLEDGER_MASTER_FAILED:
      return {
        ...state,
        editIIAGLLedgerMaster: false,
      };

    default:
      return state;
  }
}

export default IIAGLLedgerReducer;
