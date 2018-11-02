import React, { Component } from 'react';
import checkoutCart from '../images/checkoutCart.png'
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <img className="shoppingCart" src={checkoutCart} alt="shopping cart" />
        <h1 className="title">
          Raw and Reckless
        </h1>
        <hr />

        <ul className="products">
          <li>Bath</li>
            <li>Shower</li>
              <li>Hair</li>
                <li>Body</li>
                  <li>Face</li>
                    <li>Fragrance</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;