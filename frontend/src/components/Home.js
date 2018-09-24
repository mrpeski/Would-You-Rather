import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './includes/Question'
import { withRouter } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';



class Home extends Component {


    render() {
        
    let {questionsArr, authUser, questions, users} = this.props;

    let answeredQuestions = authUser ? Object.keys(authUser.answers) : [];
    let unansweredQuestions = authUser ? questionsArr.filter(quest => !answeredQuestions.includes(quest)) : [];
    
    let UI = users && questions ? 
    <div className="col-lg-5" style={{margin: "28px 0"}}>
        <Tabs>
            <TabList>
            <Tab>Unanswered Questions</Tab>
            <Tab>Answered Questions</Tab>
            </TabList>

            <TabPanel>
                {
                    unansweredQuestions.map((item) => questions? <Question key={item} obj={questions[item]} /> : null)
                }
            </TabPanel>
            <TabPanel>
                {
                answeredQuestions.map((item) => questions? <Question key={item} obj={questions[item]} /> : null)
                }
            </TabPanel>
        </Tabs>
    </div> : null

    return UI;
    }
}

function mapStateToProps({questions, authedUser, users}){
    return { 
        authedUser,
        questionsArr: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp), 
        authUser: users[authedUser],
        questions,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Home));