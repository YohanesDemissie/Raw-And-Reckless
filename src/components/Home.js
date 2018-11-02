import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from './Navbar'
import placeHolder from '../images/placeholder.jpg'

class Home extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <img className="homeImage" src={placeHolder} alt="black beauty" />
      </div>
    )
  }
}

export default Home;