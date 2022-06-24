
const initialState = {
   
    show_sidebar: true,
  
  }

export const sidebar = (state=initialState, action) => {
    switch(action.type) {
        case "SHOW_SIDEBAR": 
            return {
                ...state,
                show_sidebar: true,
                
            }
        
            case "HIDE_SIDEBAR": 
            return {
                ...state,
                show_sidebar: false,
                
            }
        
        default:
            return state;
    }
}