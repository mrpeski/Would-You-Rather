import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getInitialData } from './actions/thunk-actions'
import { Route, Switch, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import NewQuestion from './components/NewQuestion'
import Leaders from './components/Leaders'
import Home from './components/Home'
import Nav from './components/includes/Nav'
import LoadingBar from 'react-redux-loading'
import Poll from './components/Poll'
import Vote from './components/Vote'
import NotFound from './components/NotFound'


class App extends Component {

  componentDidMount(){
      const {users} = this.props

      if(users) {
        this.props.dispatch(getInitialData())
      }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" style={{padding:"0 10px", paddingBottom:40, marginBottom:40, background: "#007bff"}}>
            <LoadingBar />
            <Nav />
            
            <div className="row justify-content-center">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={NewQuestion} />
                <Route path="/login" exact render={() => (<Login />)} />
                <Route path="/questions/:question_id" exact component={Poll} />
                <Route path="/vote/:question_id" exact component={Vote} />
                <Route path="/leaderboard" exact render={() => (<Leaders />)} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </div>
      </React.Fragment>
    );
  }
}


function mapStateToProps({questions, app, authedUser, users}){
  const authUser = authedUser
  return { 
      authUser: users[authUser],
      questions,
      users
  }
}

export default withRouter(connect(mapStateToProps)(App));
