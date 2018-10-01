import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, authedUser, ...rest}) => (
    <Route {...rest} render={props => {
        if(!(authedUser === null)) {
            return React.createElement(component, props)
        } 
        return <Redirect to={{ pathname:'/login', state: { from: props.location }}}/>} }
     />)

function mapStateToProps({ authedUser }){
    return {  
        authedUser
     }
}

export default (connect(mapStateToProps)(PrivateRoute))