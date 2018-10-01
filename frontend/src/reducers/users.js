import {RECEIVE_USERS,
    SELECT_OPTION_ONE, 
    SELECT_OPTION_TWO,
    SAVE_QUESTION,} from '../actions'


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
        case SAVE_QUESTION:
        const { question } = action.question
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: (state[question.author]).questions.concat(question.id)
                }
            }
        default:
        return state;
    }
}
