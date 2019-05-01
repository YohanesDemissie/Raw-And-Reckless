import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import reckless from '../images/reckless.jpg'

class RecklessProducts extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img className="place-holders" src={reckless} alt="smoking weed" />
        <Footer />
      </div>
    )
  }
}

export default RecklessProducts