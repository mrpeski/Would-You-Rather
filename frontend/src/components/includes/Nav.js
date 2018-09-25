
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../../actions/users'

class Nav extends Component {

    logout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(logout())
    }

    render(){
        const {users, authedUser} = this.props;
        const activeUser = users[authedUser] ? users[authedUser] : {name: '', avatarURL: ''};

        const UI = 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Would You Rather</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">New Question</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/leaderboard">Leaders</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <span className="navbar-text">
                        { activeUser.name  ? `Hello, ${activeUser.name}` : null }
                            <img src={activeUser.avatarURL} alt={activeUser.name}  style={{ maxWidth: 20, borderRadius: 30, marginLeft: 12}}/>
                        </span>
                        { activeUser.name  ?
                        <li className="nav-item" style={{ marginLeft: 15}}>
                            <button className="btn btn-success" onClick={this.logout}>Logout</button>
                        </li> : null
                        }
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
