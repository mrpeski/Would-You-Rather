import {
    RECEIVE_QUESTIONS, 
    SAVE_QUESTION, 
    SELECT_OPTION_ONE, 
    SELECT_OPTION_TWO} from './'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion(question){
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function selectOptionOne(question_id,user){
    return {
        type: SELECT_OPTION_ONE,
        question_id,
        user
    }
}

export function selectOptionTwo(question_id,user){
    return {
        type: SELECT_OPTION_TWO,
        question_id,
        user
    }
}