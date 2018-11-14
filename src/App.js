import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HairProducts from './components/HairProducts.js';
import BodyProducts from './components/BodyProducts';
import BathProducts from './components/BathProducts';
import ShowerProducts from './components/ShowerProducts';
import FaceProducts from './components/FaceProducts';
import RecklessProducts from './components/RecklessProducts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route exact path='/hair-products' component={HairProducts} />
            <Route exact path="/body-products" component={BodyProducts}/>
            <Route exact path="/bath-products" component={BathProducts} />
            <Route exact path="/shower-products" component={ShowerProducts}/>
            <Route exact path="/facial-products" component={FaceProducts}/>
            <Route exact path="/reckless" component={RecklessProducts}/>
            </React.Fragment>
            </Router>
      </div>
    );
  }
}

export default App;


