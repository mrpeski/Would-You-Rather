import {LOGIN, LOGOUT} from '../actions'

export const app = (state={authUser: "johndoe"}, action) => {
    switch(action.type){
        case LOGOUT:
            return {
                ...state,
                authUser: null
            }
        default:
            return state;
    }
}