import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductDetail from "../ProductDetail/ProductDetail";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./MainRight.css";
import ProductDetailConroller from "../ProductDetailConroller/ProductDetailConroller";
class MainRight extends Component {
  constructor() {
    super();
    this.state = {
      productDetail: {
        productName: "FOREVER 21",
        size: "",
        color: "",
        quantity: "1",
      },
    };
  }

  handleColorChange = (color) => {
    this.setState({
      productDetail: {
        ...this.state.productDetail,
        color,
      },
    });
  };
  handleSizeChange = (size) => {
    this.setState({
      productDetail: {
        ...this.state.productDetail,
        size,
      },
    });
  };
  handleQuanChange = (quantity) => {
    this.setState({
      productDetail: {
        ...this.state.productDetail,
        quantity,
      },
    });
  };
  handleClearSection = () => {
    this.setState({
      productDetail: {
        productName: "FOREVER 21",
        size: "",
        color: "",
        quantity: "1",
      },
    });
    document.getElementById("color-input").selectedIndex = 0;
    document.getElementById("size-input").selectedIndex = 0;
    document.getElementById("quan-input").value = 1;
  };
  handleAddToCart = () => {
    const { size, color } = this.state.productDetail;

    if (size === "" || color === "") {
      console.log("add size and color");
      return NotificationManager.error("please choose size and color");
    } else {
      const { productDetail } = this.state;
      this.props.handleAddCart(productDetail);
      this.handleClearSection();
      console.log("Added To Cart");
      return NotificationManager.success("Product added to cart");
    }
  };
  render() {
    const { productName } = this.props;

    return (
      <div id="main-right">
        <NotificationContainer />
        <p>
          back to <a href="sd"> Women</a>;
        </p>
        <div id="item-title">
          <h2>{productName}</h2>
        </div>
        <div id="review-info">
          <span id="rating">
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <a href="review">3 Review(s)s</a>
          <div className="border"></div>
          <a href="review" className="black-anchor">
            ADD A REVIEW
          </a>
        </div>
        <h2 className="price">$499.54</h2>
        <div className="product-info">
          <p>
            <p className="attr">Availability :</p>
            <p className="value"> {" " + "In stock"}</p>
          </p>
          <p>
            <p className="attr">Product Code :</p>
            <p className="value"> {" " + "#4565"}</p>
          </p>
          <p>
            <p className="attr">Tags :</p>
            <p className="value"> {" " + "Fashion,Hood,Classic"}</p>
          </p>
        </div>
        <div className="product-details">
          <p>
            Cream-Coloured solid jacket, has a spread collar, 2 pockets, button
            closure, long sleeves, straight hem, and unlined
          </p>
          <ul>
            <li>100% Cotton</li>
            <li>Machine-wash</li>
            <li>Quality is okay</li>
          </ul>
        </div>
        <ProductDetail
          handleColorChange={this.handleColorChange}
          handleSizeChange={this.handleSizeChange}
          handleQuanChange={this.handleQuanChange}
          // clearProductDetail={this.clearProductDetail}
        />
        <ProductDetailConroller
          handleClearSection={this.handleClearSection}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}

export default MainRight;
