import React from "react";
import{Link} from 'react-router-dom';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "email":'',
            "name":'',
            "password":'',
            "confirmpassword":''
        }
    }
    render(){
        return(
            <div>
                <input type="email" placeholder="enter your email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/> <br/>
                <input type="text" placeholder="enter your name" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/> <br/>
                <input type="password" placeholder="enter your password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/> <br/>
                <input type="password" placeholder="enter your confirmpassword" value={this.state.confirmpassword} onChange={e=>this.setState({confirmpassword:e.target.value})}/> <br/>
                <Link to="login">
                <button> register </button>
                </Link>
            </div>
        )
    }
}

export default Register 