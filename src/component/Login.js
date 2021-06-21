import React from "react";
import{Link} from 'react-router-dom'; 
import Register from "./Register";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "email":'',
            "password":'',
        };
    }
    render(){
        return(
            <div>
                <input type="email" placeholder="enter your email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/><br/>
                <input type="number" placeholder="enter your password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/> <br/>
                <button Link to="Register"> Login </button>
            </div>
        )
    }
}
export default Login