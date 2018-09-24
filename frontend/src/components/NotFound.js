import React, { Component } from 'react'

export default class  NotFound extends Component {

    render() {
        const UI = (<div className="col-lg-5" style={{margin: "28px 0"}}>
                <div style={{background:"#ffffff",borderRadius: "12px 12px", padding: "20px 40px", paddingBottom:40}}>
                    <h2> Page Not Found</h2>
                    <a href="/">Go Home</a>
                </div>
            </div>);

        return UI;
    }
}

