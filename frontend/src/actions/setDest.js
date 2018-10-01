import {SET_DEST} from './index'

export function setDest(dest){
    return {
        type: SET_DEST,
        dest
    }
}