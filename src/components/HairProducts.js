import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class HairProducts extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <h1>
          Raw and Reckless Hair Supplies
        </h1>
        <Footer />
      </div>
    )
  }
}

export default HairProducts;