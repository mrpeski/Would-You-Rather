import {SET_AUTHED_USER} from './'


export function authedUser(id){
    return {
        type: SET_AUTHED_USER,
        id
    }
}