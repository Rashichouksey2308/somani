import * as types from './actionType'


export const showSidebar = (payload) => {
    return({
        type: types.SHOW_SIDEBAR,
        payload
        
    })
}
 export const hideSidebar = () => {
     return({
         type: types.HIDE_SIDEBAR,
        
     })
    }
