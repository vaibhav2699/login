import React from "react";
import{Link} from 'react-router-dom'; 

class Header extends React.Component{
    render(){
        return(
            <div className="header1">
                <Link to="Home"><button style={{margin:"21px"}}> Home </button></Link>
                <Link to="Contact"><button style={{margin:"21px"}}> contact us </button></Link>
                <Link to="About"><button style={{margin:"21px"}}> about us </button></Link>
                <Link to="Login"><button style={{margin:"21px"}}> Login </button></Link>
                <Link to="Register"><button style={{margin:"21px"}}> Register </button></Link>
            </div>
        )
    }
}

export default Header;