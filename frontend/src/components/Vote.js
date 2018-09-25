import React from 'react'

export default function Vot(props) {
    const {handleSave, handleSelect, optionOneText, optionTwoText, author } = props
    return (
        <div className="col-lg-5" style={{margin: "28px 0"}}>
            <h3 style={{padding:"28px 0", textAlign:"center",background:"#ffffff",borderRadius: "12px 12px 0 0", fontSize: 16, fontWeight: 600,
            margin: 0, borderBottom: "2px solid #d7d4d4"}}>
                <img src={author.avatarURL} alt={author.id}  style={{ maxWidth: 60, borderRadius: 30}}/>
                {`${author.name} asks:` }
            </h3>
            <div style={{background:"#ffffff",borderRadius: "0 0 12px 12px",textAlign: "center", padding: "20px 40px", paddingBottom:40}}>                
                <form onSubmit={handleSave}>
                <h4>
                    Would you rather...
                </h4>
                    <div className="form-check form-check-inline">
                        <input type="radio" id="optionOne" name="quest" value='optionOne'  
                        className="form-check-input" onChange={handleSelect}/>
                        <label className="form-check-label" htmlFor='optionOne'>{optionOneText}</label>
                    </div>
                    <h5 style={{ textAlign: "center"}}>OR</h5>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="quest" id="optionTwo" value='optionTwo' className="form-check-input" onChange={handleSelect}/>
                        <label className="form-check-label" htmlFor='optionTwo'>{optionTwoText}</label>
                    </div>
                    <div className="col-lg-12" style={{display:"flex",justifyContent:"center",padding:20}}>
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}