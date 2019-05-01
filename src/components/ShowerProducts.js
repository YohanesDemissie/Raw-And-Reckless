import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import shower from '../images/shower.jpg'

class ShowerProducts extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <img className="place-holders" src={shower} alt="showering" />
        <Footer />
      </div>
    )
  }
}

export default ShowerProducts