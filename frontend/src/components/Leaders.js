import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'



function Leaders(props) {

    const { authedUser } = props

    if(!authedUser) {
      return <Redirect to="/login"/>
    }

    const {usersArr, users} = props;

    const UI = users ? 
        <div className="col-lg-5" style={{margin: "28px 0"}}>
            <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                    LEADERS
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px", padding: "20px 40px", paddingBottom:40}}>
                <ol>
                    {
                        usersArr.map((user,index) => {
                        const answersCount = Object.keys(users[user].answers).length;
                        const questionsCount = users[user].questions.length;
                        const score = answersCount + questionsCount;
                            return <li className="row" style={{paddingBottom: 40}} key={index}>
                                <div className="col-lg-2">
                                    <img src={users[user].avatarURL} alt={users[user].id} style={{ maxWidth: 60, borderRadius: 30}}/>
                                </div>
                                <div className="col-lg-8">
                                    <h4>{users[user].name}</h4>
                                    <p style={{color: "#ccc", marginBottom: 1}}>Answered Questions: {answersCount}</p>
                                    <p style={{color: "#ccc", marginBottom: 1}}>Questions Asked: {questionsCount}</p>
                                </div>
                                <div className="col-lg-2">
                                    <p style={{textAlign: "center"}}>Score</p>
                                    <h3 style={{textAlign: "center"}}>{score}</h3>
                                </div>
                            </li>;
                        }
                        )
                    }
                </ol>
            </div>
        </div> : null;
    return UI;
}

function mapStateToProps({users, authedUser}){

    return { 
        usersArr: Object.keys(users)
        .sort((a,b) => (users[b].questions.length + (Object.keys(users[b].answers)).length) - (users[a].questions.length + (Object.keys(users[a].answers)).length)), 
        users, authedUser }
}

export default connect(mapStateToProps)(Leaders);