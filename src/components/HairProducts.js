import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import hair from '../images/hair.jpg'

class HairProducts extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <img className="place-holders" src={hair} alt="hair" />
        <Footer />
      </div>
    )
  }
}

export default HairProducts;