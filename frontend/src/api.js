import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

export function reqData () {
    return Promise.all([
        _getUsers(),
        _getQuestions()])
    .then(([users, questions]) => ({
        users,
        questions    
    }))
}

export function handleSaveQuestion (ques) {

    const {optionOneText, optionTwoText, author } = ques

    let quesObj = {
        optionOneText,
        optionTwoText,
        author
    }
    // make the request; returns the formatted question
    return _saveQuestion(quesObj)
    .then((question) => ({
        question    
    }))
}

export function handleSaveQuestionAnswer(ansObj){
    const {authedUser, qid, answer} = ansObj

    let obj = {
        authedUser: authedUser.id,
        qid: qid,
        answer
    }
    return _saveQuestionAnswer(obj)
    .then((obj) => ({
        obj
    }))
}