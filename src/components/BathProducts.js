import React, { Component } from 'react';
import bathSubHeader from '../images/bath.jpg'
import Navbar from './Navbar';
import Footer from './Footer'
class BathProducts extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <img src={bathSubHeader} alt="woman taking bath" />
        <Footer />
      </div>
    )
  }
}

export default BathProducts