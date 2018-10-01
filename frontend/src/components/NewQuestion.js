import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createQuestion } from '../actions/thunk-actions'
import { setDest } from '../actions/setDest'
import {Redirect} from 'react-router-dom';



class NewQuestion extends Component {

    state = {
        optionOne: "",
        optionTwo: "",
        toHome: false,
    }

    componentDidMount () {
        const { match, dispatch } = this.props
        console.log(match)
        dispatch(setDest(match.url))
    }

    handleChange = (e) => {
        e.preventDefault()
        let val = e.target.value
        let name = e.target.name
        this.setState(() => ({
            [name]: val
        }))
    }

    handleSave = (e) => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        const {dispatch, authedUser} = this.props

        let quesObj = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }

        // save Question
        // console.log(optionOne,optionTwo)

        dispatch(createQuestion(quesObj))

        this.setState(() => ({
            optionOne: "",
            optionTwo: "",
            toHome: true
        }))

        // redirect to home if submitted
    }

    render() {

        const { optionOne, optionTwo, toHome } = this.state
        const { authedUser } = this.props

        if(toHome) {
            return <Redirect to="/"/>
        }

        if(!authedUser) {
            return <Redirect to="/login"/>
        }
 
    return (
        <div className="col-lg-5" style={{margin: "28px 0"}}>
            <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                    WOULD YOU RATHER...
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px", padding: "20px 40px", paddingBottom:40}}>
                <form onSubmit={this.handleSave}>
                    <div className="form-group">
                        <input type="text" name="optionOne" value={optionOne} className="form-control" onChange={this.handleChange} required/>
                    </div>
                    <h5 style={{ textAlign: "center"}}>OR</h5>
                    <div className="form-group">
                        <input type="text" name="optionTwo" value={optionTwo} className="form-control" onChange={this.handleChange} required/>
                    </div>
                    <div className="col-lg-12" style={{display:"flex",justifyContent:"center",padding:20}}>
                        <button type="submit" className="btn btn-primary btn-lg"
                        disabled={optionOne === '' || optionTwo === ''}>Save</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

function mapStateToProps({users, authedUser}){
    return { 
        users, 
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);