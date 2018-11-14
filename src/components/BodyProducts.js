import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import body from '../images/body.jpg'

class BodyProducts extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <img src={body} alt="black fragrance" />
        <Footer />
      </div>
    )
  }
}

export default BodyProducts;