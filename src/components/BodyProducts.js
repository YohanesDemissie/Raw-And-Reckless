import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class BodyProducts extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <h1> Raw and Reckless BodyProducts</h1>
        <Footer />
      </div>
    )
  }
}

export default BodyProducts;