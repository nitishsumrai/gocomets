import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./header_js";
class Header extends Component {
  render() {
    const { cart } = this.props;

    console.log(cart);
    return (
      <div className="header-container">
        <div className="header">
          <select name="lang" id="lang">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <h1>BONFIRE</h1>
          <span className="cart-count">
            <div class="dropdown">
              <button id="cart-icon" style={{ padding: "1em" }}>
                <FontAwesomeIcon id="cart-icon" icon={faShoppingCart} />
                <bold id="cart-icon">{cart.length}</bold>
              </button>

              <div class="dropdown-content  move-left-content">
                {cart.map((item) => (
                  <a href="#">{item.productName}</a>
                ))}
              </div>
            </div>
          </span>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
