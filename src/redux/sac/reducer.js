import * as types from './actionType';

const initialState = {
  editSACMaster: false,
};

function SACReducer(state = initialState, action) {
  switch (action.type) {   
    case types.EDIT_SAC_MASTER_SUCCESS:
      return {
        ...state,
        editSACMaster: false,
      };

    case types.EDIT_SAC_MASTER_FAILED:
      return {
        ...state,
        editSACMaster: false,
      };

    default:
      return state;
  }
}

export default SACReducer;
