import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'; 
import Header from "./component/Header";
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Register from './component/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="Contact" component={Contact}/>
          <Route exact path="About" component={About}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/>
        </switch>
      </Router>
    </div>
  );
}

export default App;
