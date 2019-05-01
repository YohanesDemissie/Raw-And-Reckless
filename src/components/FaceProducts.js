import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import faceImage from '../images/faceProducts.jpg';

class FaceProducts extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img className="place-holders" src={faceImage} alt="face and products" />
        <Footer />
      </div>
    )
  }
}

export default FaceProducts