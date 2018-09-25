import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'
import { saveAnswer } from '../actions/thunk-actions'
import {Redirect} from 'react-router-dom'





class Poll extends Component {

    state = {
        quest: '',
        toHome: false
    }

    handleSelect = (e) => {
        this.setState({
            quest: e.target.value
        })
    }

    handleSave = (e) => {
        const {dispatch, authUser, match} = this.props
        const {quest} = this.state
        const id = match.params.question_id

        let ansObj = {
            authedUser: {...authUser},
            qid: id,
            answer: quest
        }
        e.preventDefault()
        dispatch(saveAnswer(ansObj))

        this.setState({
            toHome: true
        })
    }

    formatText(text) {
        return `Would you rather ${text}`
    }
    formatVotes(lim1,lim2) {
        return `${lim1} out of ${lim2} votes`
    }
    calcPercentage(value, upperlim){
        let per = (value/upperlim) * 100
        return `(${Math.round(per)}%)`
    }

    yourVote(question_id,authUser){
        const {answers} = authUser
        const vote = answers[question_id] ? answers[question_id] : null
        return vote;
    }

    render() {
        const {match, questions, users, authUser, loadingBar, authedUser} = this.props
        const id = match.params.question_id

        const quest = questions[id] ? questions[id] : null
        const optionOneCount = quest ? quest.optionOne.votes.length : null
        const optionTwoCount = quest ? quest.optionTwo.votes.length : null
        const optionOneText = quest ? quest.optionOne.text : null
        const optionTwoText = quest ? quest.optionTwo.text : null
        const totalCount = optionOneCount + optionTwoCount

        if(!authedUser) {
            return <Redirect to="/login"/>
        }

        const author = users[quest.author] ? users[quest.author] : {}

        if(loadingBar.default){
            return null
        }

        

        const UI = ( quest && this.yourVote(id,authUser)) ?
        <div className="col-lg-5" style={{margin: "28px 0"}}>
        <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                {`Asked by ${users[quest.author].name}` }
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px",textAlign: "left", padding: "20px 40px", paddingBottom:40}}>                
                <h3>Results</h3>

                <div className='row' style={{paddingBottom: 40}}>
                    <div className="col-lg-2">
                        <img src={users[quest.author].avatarURL}  alt={users[quest.author].name} style={{ maxWidth: 60, borderRadius: 30}}/>
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-8">
                                <p style={{ fontSize: '1.6rem', margin: 0}} className={(this.yourVote(id,authUser) === 'optionOne') ? 'your-choice' : ''}>1. {this.formatText(quest.optionOne.text)}</p>
                            </div>
                            <div className="col-lg-4">
                                <p>{this.formatVotes(optionOneCount,totalCount)} {this.calcPercentage(optionOneCount,totalCount)}</p>
                            </div>
                            <div className="col-lg-8">
                                <p style={{ fontSize: '1.6rem', margin: 0}} className={(this.yourVote(id,authUser) === 'optionTwo') ? 'your-choice' : ''}>2. {this.formatText(quest.optionTwo.text)}</p>
                            </div>
                            <div className="col-lg-4">
                                <p>{this.formatVotes(optionTwoCount,totalCount)} {this.calcPercentage(optionTwoCount,totalCount)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> : <Vote  handleSave={this.handleSave} 
                        handleSelect={this.handleSelect} 
                        optionOneText={optionOneText} 
                        optionTwoText={optionTwoText}
                        author={author}/>
        return UI;
    }
}

function mapStateToProps({questions, authedUser, users, loadingBar}){
    const authUser = authedUser
    return { 
        authedUser,
        loadingBar,
        questionsArr: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp), 
        authUser: users[authUser],
        questions,
        users
    }
}



export default connect(mapStateToProps)(Poll);