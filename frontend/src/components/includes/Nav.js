
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {Route, Link, NavLink} from 'react-router-dom'

class Nav extends Component {

    render(){
        const {users, authedUser} = this.props;
        const activeUser = users[authedUser] ? users[authedUser] : {name: '', avatarURL: ''};

        const UI = 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Would You Rather</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add">New Question</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/leaderboard">Leaders</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <span className="navbar-text">
                            Hello, {activeUser.name }
                            <img src={activeUser.avatarURL} alt={activeUser.name}  style={{ maxWidth: 20, borderRadius: 30, marginLeft: 12}}/>
                        </span>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">{ users[authedUser] ? 'Logout' : 'Login'}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        return UI;
    }
}

function mapStateToProps({users, authedUser}, ownProps){
    return { 
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)
