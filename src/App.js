import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path='/' component={Home} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;


