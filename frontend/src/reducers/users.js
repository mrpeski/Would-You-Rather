import {RECEIVE_USERS,
    SELECT_OPTION_ONE, 
    SELECT_OPTION_TWO} from '../actions'


export const users = (state={}, action) => {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...action.users
            }
        case SELECT_OPTION_ONE:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    answers: {
                        ...state[action.user].answers,
                        [action.question_id] : 'optionOne'
                    }
                }
            }
        case SELECT_OPTION_TWO:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    answers: {
                        ...state[action.user].answers,
                        [action.question_id] : 'optionTwo'
                    }
                }
            }
        default:
        return state;
    }
}
