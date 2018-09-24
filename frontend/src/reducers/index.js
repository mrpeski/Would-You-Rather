import {users} from './users'
import {authedUser} from './authUser'
import {questions} from './questions'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    users, questions, authedUser,
    loadingBar: loadingBarReducer,
})

