import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCoffee,
  faCaretDown,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar_js";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div class="dropdown">
          <FontAwesomeIcon icon={faBars} />
          <div class="dropdown-content">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <div id="all-categories">
          <span>Home</span>
          <span>
            <div class="dropdown">
              <button class="dropbtn">
                MEN &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div class="dropdown-content move-left-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </span>
          <span>
            <div class="dropdown">
              <button class="dropbtn">
                WOMEN &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div class="dropdown-content move-left-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            12
          </span>
          <span>LOOKBOOK</span>
          <span>ABOUT</span>
          <span>BLOG</span>
        </div>
        <div className="like-search">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    );
  }
}

export default Navbar;
