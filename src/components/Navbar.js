import React, { Component } from 'react';
import Media from "react-media"; //GREAT MEDIA QUERY LIBRARY
import checkoutCart from '../images/checkoutCart.png'
import '../styles/hamburger.css';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <div>
        <Media query="(max-width: 800px)">
        {matches => matches ? (
              <div className="hamburger-container">
                <h3 className="menu-title">Menu</h3>
                <nav role="navigation">
                  <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                  <ul id="menu" style={{ color: 'grey' }}>
                      <h3>Yohanes Demissie</h3>
                      <h6>Web Developer</h6>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/bath-products">Bath</a>
                    </li>
                    <li>
                      <a href="/shower-products">Shower</a>
                    </li>
                    <li>
                      <a href="/hair-products">Hair</a>
                    </li>
                    <li>
                      <a href="/body-products">Body</a>
                    </li>
                    <li>
                      <a href="/facial-products">Face</a>
                    </li>
                    <li>
                      <a href="/reckless">RECKLESS</a>
                    </li>
                    </ul>
                  </div>
                </nav>
              </div>
        ) : (

      <div className="navbar">
        <img className="shoppingCart" src={checkoutCart} alt="shopping cart" />
        <h1 className="title">
          Raw and Reckless
        </h1>
        <hr />

        <ul className="products">
          <a href="/">Home</a>
            <a href="/bath-products">Bath</a>
              <a href="/shower-products">Shower</a>
                <a href="/hair-products">Hair</a>
                  <a href="/body-products">Body</a>
                    <a href="/facial-products">Face</a>
                      <a href="/reckless">RECKLESS</a>
        </ul>
      </div>
        )
      }
        </Media>
      </div>
    )
  }
}

export default Navbar;