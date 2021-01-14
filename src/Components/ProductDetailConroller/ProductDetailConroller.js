import React from "react";
import "./ProductDetailConroller.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
class ProductDetailConroller extends React.Component {
  handleClearSection = (e) => {
    e.preventDefault();
    this.props.handleClearSection();
  };
  handleAddToCart = () => {
    this.props.handleAddToCart();
  };
  render() {
    return (
      <div className="Product-detail-conroller-container">
        <a
          className="clear-input"
          href="#"
          className="black-anchor parent-width"
          onClick={this.handleClearSection}
        >
          CLEAR SELECTIONS
        </a>
        <div className="button-container">
          <button className="black-button" onClick={this.handleAddToCart}>
            ADD TO CART
          </button>
          <button className="white-button">
            <FontAwesomeIcon icon={faHeart} /> {"  ADD TO WISHLIST"}
          </button>
        </div>
      </div>
    );
  }
}
export default ProductDetailConroller;
