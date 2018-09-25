import React from 'react'
import {Link} from 'react-router-dom'

export default function  NotFound(props) {

        const UI = (<div className="col-lg-5" style={{margin: "28px 0"}}>
                <div style={{background:"#ffffff",borderRadius: "12px 12px", padding: "20px 40px", paddingBottom:40}}>
                    <h2> Page Not Found</h2>
                    <Link to="/">Go Home</Link>
                </div>
            </div>);

        return UI;
}

