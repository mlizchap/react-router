import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Navbar from './components/navbar';

const projects = ["project 1", "project 2", "project 3"];

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route path='/' component={Navbar} />
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/portfolio' render={props => (
              <Portfolio {...props} projects={projects} />
            )} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/:name?/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
