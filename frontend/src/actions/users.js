import {RECEIVE_USERS, LOGOUT} from './'


export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function logout(){
    return {
        type: LOGOUT,
    }
}