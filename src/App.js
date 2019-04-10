import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Register from './components/register.component';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                 
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Dashboard</Link>
                </li>
               </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to Student Information</h2> <br/>
          <Switch>
              <Route exact path = '/' component={ Home } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
               <Route path = '/register' component={ Register } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;