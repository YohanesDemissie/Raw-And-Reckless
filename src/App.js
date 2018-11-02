import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import HairProducts from './components/HairProducts.js'
import BodyProducts from './components/BodyProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route exact path='/hair-products' component={HairProducts} />
            <Route exact path="/body-products" component={BodyProducts}/>
            <Route exact path="/bath-products" />
            <Route exact path="/shower-products" />
            <Route exact path="/facial-products" />
            <Route exact path="/fragrances" />
            </React.Fragment>
            </Router>
      </div>
    );
  }
}

export default App;


