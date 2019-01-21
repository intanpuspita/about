import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Dashboard />
      </BrowserRouter>
    );
  }
}

// This is what you really care about
class Dashboard extends React.Component {
  render() {
      return (
          <div id="dashboard">
              <div className="menu">
                  <NavLink exact to="/">
                      Home
                  </NavLink>
                  <NavLink exact to="/marketing" >
                      Marketing
                  </NavLink>
                  <NavLink exact to="/automation">
                      Automation
                  </NavLink>
              </div>
              <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/marketing" component={Marketing} />
        <Route exact path="/automation" component={Automation} />
              </div>
          </div>
      );
  }
}

// This is what you really care about
class Home extends React.Component {
  render() {
      return <h1>Hello there ! You're on the home page</h1>;
  }
}

// This is what you could care about
class Automation extends React.Component {
  render() {
      return <h1>This is the Automation Panel</h1>;
  }
}

// This is what you really care about
class Marketing extends React.Component {
  render() {
      return <h1>This is the Marketing Panel</h1>;
  }
}

export default App;
