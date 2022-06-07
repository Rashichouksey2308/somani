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

export const showSidebar = () => {
    return({
        type: types.SHOW_SIDEBAR,
        
    })
}
export const hideSidebar = () => {
    return({
        type: types.HIDE_SIDEBAR,
        
    })
} 