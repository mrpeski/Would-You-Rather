import {RECEIVE_QUESTIONS, 
        SAVE_QUESTION, 
        SELECT_OPTION_ONE, 
        SELECT_OPTION_TWO} from '../actions'


export const questions = (state={}, action) => {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...action.questions
            }
        case SAVE_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.question.id]: {...action.question.question}
            }
        case SELECT_OPTION_ONE:
            return {
                ...state,
                    [action.question_id]: {
                        ...state[action.question_id],
                        optionOne: {
                            ...state[action.question_id].optionOne,
                            votes: (state[action.question_id].optionOne.votes).concat(action.user)
                        }
                    }
            }
        case SELECT_OPTION_TWO:
            return {
                ...state,
                    [action.question_id]: {
                        ...state[action.question_id],
                        optionTwo: {
                            ...state[action.question_id].optionTwo,
                            votes: (state[action.question_id].optionTwo.votes).concat(action.user)
                        }
                    }
            }
        default:
            return state;
    }
}