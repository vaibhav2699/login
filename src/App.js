import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'; 
import Header from "./component/Header";
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Header/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/>
        </switch>
      </Router>
    </div>
  );
}

export default App;
