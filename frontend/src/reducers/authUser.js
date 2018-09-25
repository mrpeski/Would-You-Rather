import {SET_AUTHED_USER, LOGOUT} from '../actions'


export const authedUser = (state=null, action) => {
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id
        case LOGOUT:
            return null
        default:
            return state;
    }
}
