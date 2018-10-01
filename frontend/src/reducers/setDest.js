import { SET_DEST } from '../actions'

export const setDest = (state=null, action) => {
    switch(action.type){
        case SET_DEST:
            return action.dest
        default:
            return state;
    }
}