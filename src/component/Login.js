import React from "react";
import{Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'; 
import Register from "./Register";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "email":'',
            "password":'',
        };
    }
    checklogin=()=>{
        if(this.state.email=="admin" && this.state.password=="admin"){
            this.props.history.push('/')
        }
        else{
            alert("enter correct email or password")
        }
    }
    render(){
        return(
            <div>
                <input type="email" placeholder="enter your email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/><br/>
                <input type="text" placeholder="enter your password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/> <br/>
                
                <button onClick={this.checklogin}> Register </button>
                
            </div>
        )
    }
}
export default Login