import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login';
import User from './Component/User';
import SearchMovies from './Component/SearchMovies';


class App extends Component {

  constructor(props)
   {
     super(props);
   }


  render(){
    return (
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/login">Se connecter</Link>
            </li>
          </ul>
        </nav>
        <SearchMovies></SearchMovies>
        <Switch>
            <Route path="/Login"  component={Login}></Route>
            <Route path="/User" component={User}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
