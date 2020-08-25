import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
          <Switch>
             <Route path="/Login" component={Login}  />
             <Route path="/Home" component={Home} />
             <Redirect to="/Login" from="/"  />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
