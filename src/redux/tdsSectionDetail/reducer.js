import * as types from './actionType';

const initialState = {
  editTDSSectionMaster: false,
};

function TdsSectionReducer(state = initialState, action) {
  switch (action.type) {   
    case types.EDIT_TDS_SECTION_MASTER_SUCCESS:
      return {
        ...state,
        editTDSSectionMaster: false,
      };

    case types.EDIT_TDS_SECTION_MASTER_FAILED:
      return {
        ...state,
        editTDSSectionMaster: false,
      };

    default:
      return state;
  }
}

export default TdsSectionReducer;
