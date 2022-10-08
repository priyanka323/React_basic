import React from "react";

import "./ClassForm.css"

class ClassForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {Name:'',Email:'',password:''}
    }

    render(){

        const HandleName=(event)=>{
            let value = event.target.value
            this.setState({Name:value})
            console.log(this.state.Name)
        }

        const HandlePassword=(event)=>{
            let pass = event.target.value
            this.setState({password:pass})
            console.log(this.state.password)
        }

        return(
            <div className="FormContainer">
                <div className="name">
                <span>enter ur name</span>
                <input className="box" type='text' name="Name" onChange={HandleName}></input>
            </div>
            <div className="name">
                <span>email</span>
                <input className="box" type='text' name="Email"></input>
            </div>
            <div className="name">
                <span>
                    Password
                </span>
                <input className="box" type='password' name="password"></input>
            </div>
            <div className="name">
                <span>
                    Confirm Password
                </span>
                <input className="box" type='password' onChange={HandlePassword}></input>
            </div>
            <div className="name">
                <button>submit</button>
            </div>
        
            </div>
        )
    }
}

export default ClassForm;



//create form name,email,password,confirm password, dob, submit button.