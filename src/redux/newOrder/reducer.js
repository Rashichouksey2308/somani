import * as types from './actionType';

const initialState = {
    placingNewOrder : false,
    newOrder : null
}

function NewOrderReducer(state = initialState, action) {
    switch(action.type){
        case types.PLACE_ORDER: 
            return {
                ...state,
                placingNewOrder: true, 
                newOrder: null
            }
        case types.PLACE_ORDER_SUCCESSFULL: 
            return {
                ...state,
                placingNewOrder: false, 
                newOrder: action.payload
            }
        case types.PLACE_ORDER_FAILED: 
            return {
                ...state,
                placingNewOrder: false, 
                newOrder: null
            }

        default: 
            return state;
        
    }
}

export default NewOrderReducer;