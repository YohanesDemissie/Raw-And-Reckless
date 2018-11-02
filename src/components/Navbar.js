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
          <a href="/bath-products">Bath</a>
            <a href="/shower-products">Shower</a>
              <a href="/hair-products">Hair</a>
                <a href="/body-products">Body</a>
                  <a href="/facial-products">Face</a>
                    <a href="/fragrances">Fragrance</a>
        </ul>
      </div>
    )
  }
}

export default Navbar;