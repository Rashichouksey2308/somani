import * as types from './actionType'

{ /* export function handleToggle() {
    return (dispatch, getState) => {
        if (!getState().events.isHandleOpen) {
            dispatch(toggleMode(true));
        } else {
            dispatch(toggleMode(false));
        }
    }
}

*/ }

export const showSidebar = (payload) => {
    return({
        type: types.SHOW_SIDEBAR,
        payload
        
    })
}
export const hideSidebar = (payload) => {
    return({
        type: types.HIDE_SIDEBAR,
        payload
        
    })
} 