import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotFound from './NotFound'




class Poll extends Component {

    componentDidMount() {
        // const {match} = this.props
        // const id = match.params.question_id
        // console.log(this.props)

    }

    formatText(text) {
        return `Would you rather ${text}`
    }
    formatVotes(lim1,lim2) {
        return `${lim1} out of ${lim2} votes`
    }
    calcPercentage(value, upperlim){
        let per = (value/upperlim) * 100
        return `(${per}%)`
    }

    yourVote(question_id,authUser){
        const {answers} = authUser
        const vote = answers[question_id] ? answers[question_id] : null
        return vote;
    }

    makeVote(){
        return <div className='btn-outline-primary'>Your vote</div>
    }

    render() {
        const {match, questions, users, authUser, loadingBar} = this.props
        const id = match.params.question_id

        const quest = questions[id] ? questions[id] : null
        const optionOneCount = quest ? quest.optionOne.votes.length : null
        const optionTwoCount = quest ? quest.optionTwo.votes.length : null
        const totalCount = optionOneCount + optionTwoCount

        if(loadingBar.default){
            return null
        }

        const UI = quest ? 
        <div className="col-lg-5" style={{margin: "28px 0"}}>
        <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                {`Asked by ${users[quest.author].name}` }
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px",textAlign: "left", padding: "20px 40px", paddingBottom:40}}>                
                <h3>Results</h3>

                {/* <div className={(this.yourVote(id,authUser) === 'optionTwo') ? 'your-choice' : ''}>
                    <p style={{ fontSize: '1.6rem', margin: 0}}>2. {this.formatText(quest.optionTwo.text)}</p>
                    <p>{this.formatVotes(optionTwoCount,totalCount)} {this.calcPercentage(optionTwoCount,totalCount)}</p>
                </div> */}

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
                                <p>{this.formatVotes(optionOneCount,totalCount)} {this.calcPercentage(optionTwoCount,totalCount)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                { !this.yourVote(id,authUser) ? <a href={`/vote/${id}`}>Cast Vote</a> : null}
            </div>
        </div> : <NotFound />

        return UI;
    }
}

function mapStateToProps({questions, authedUser, users, loadingBar}){
    const authUser = authedUser
    return { 
        loadingBar,
        questionsArr: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp), 
        authUser: users[authUser],
        questions,
        users
    }
}



export default connect(mapStateToProps)(Poll);