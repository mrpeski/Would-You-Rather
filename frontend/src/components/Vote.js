import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveAnswer } from '../actions/thunk-actions'
import {Redirect} from 'react-router-dom';


class Vote extends Component {

    state = {
        quest: '',
        toHome: false
    }

    handleSelect = (e) => {
        // e.preventDefault()

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

    componentDidMount() {
        // const {match} = this.props
        // const id = match.params.question_id
        // console.log(this.props)

    }


    render() {
        const {match, questions, users} = this.props
        const id = match.params.question_id

        const quest = questions[id] ? questions[id] : null
        const optionOneText = quest ? quest.optionOne.text : null
        const optionTwoText = quest ? quest.optionTwo.text : null

        const { toHome } = this.state

        if(toHome) {
            return <Redirect to="/"/>
        }

        const UI = quest ? 
        <div className="col-lg-5" style={{margin: "28px 0"}}>
        <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                <img src={users[quest.author].avatarURL} alt={users[quest.author].id}  style={{ maxWidth: 60, borderRadius: 30}}/>
                {`${users[quest.author].name} asks:` }
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px",textAlign: "center", padding: "20px 40px", paddingBottom:40}}>                
                <form method="post" onSubmit={this.handleSave}>
                <h4>
                    Would you rather...
                </h4>
                    <div className="form-check form-check-inline">
                        <input type="radio" id="optionOne" name="quest" value='optionOne'  
                        className="form-check-input" onChange={this.handleSelect}/>
                        <label className="form-check-label" htmlFor='optionOne'>{optionOneText}</label>
                    </div>
                    <h5 style={{ textAlign: "center"}}>OR</h5>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="quest" id="optionTwo" value='optionTwo' className="form-check-input" onChange={this.handleSelect}/>
                        <label className="form-check-label" htmlFor='optionTwo'>{optionTwoText}</label>
                    </div>
                    <div className="col-lg-12" style={{display:"flex",justifyContent:"center",padding:20}}>
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div> : null

        return UI;
    }
}

function mapStateToProps({questions, app, authedUser, users}){
    // const authUser = app['authUser']
    return { 
        authUser: users[authedUser],
        questions,
        users
    }
}



export default connect(mapStateToProps)(Vote);