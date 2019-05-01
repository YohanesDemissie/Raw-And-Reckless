import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import placeHolder from '../images/placeholder.jpg'

class Home extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <img className="place-holders" src={placeHolder} alt="black beauty" />
        <Footer />
      </div>
    )
  }
}

export default Home;