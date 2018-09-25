import { reqData, handleSaveQuestionAnswer, handleSaveQuestion } from '../api'
import { receiveUsers } from './users'
import { receiveQuestions, saveQuestion } from './questions'
import { selectOptionOne, selectOptionTwo } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'



export function getInitialData() {
    return (dispatch) => {
        //make the request
        dispatch(showLoading())
        return reqData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}

export function saveAnswer(ansObj) {
    return (dispatch) => {
        //make the request
        dispatch(showLoading())
        return handleSaveQuestionAnswer(ansObj).then(() => {
            const {authedUser,qid,answer} = ansObj
            // return;
            if(answer === 'optionOne'){
                dispatch(selectOptionOne(qid,authedUser.id))
            } else if (answer === 'optionTwo') {
                dispatch(selectOptionTwo(qid,authedUser.id))
            }
            dispatch(hideLoading())
        })
    }
}

export function createQuestion(quesObj) {
    return (dispatch) => {
        dispatch(showLoading())
        return handleSaveQuestion(quesObj).then(quesObj => {

            // recieves the formatted question with the generated id
            dispatch(saveQuestion(quesObj))

            dispatch(hideLoading())
        })
    }
}