import { connect } from 'react-redux'
import React, { Component } from 'react'



class Question extends Component {


    render(){
        const {obj, users} = this.props;
        console.log(obj, users)
        const UI = obj && users ? 
        <div style={{ textAlign: "center", marginBottom: 12}}>
            <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                <img src={users[obj.author].avatarURL} alt={users[obj.author].name} style={{ maxWidth: 60, borderRadius: 30}}/>
                {`${users[obj.author].name}  asks:` }
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px",textAlign: "center", padding: "20px 40px", paddingBottom:40}}>
            <h4>
            Would you rather...
            </h4>
            <p>
                {obj.optionOne.text}
            </p>
            <h5 style={{ textAlign: "center"}}>OR</h5>

            <p>
                {obj.optionTwo.text}
            </p>

            <a href={`/questions/${obj.id}`} className="btn btn-outline-primary">View Poll</a>
            </div>
        </div> : null

        return UI;
    }
}

function mapStateToProps({users}, ownProps){
    return { 
        users
    }
}

export default connect(mapStateToProps)(Question);