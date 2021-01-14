import React, { Component } from "react";
import MainLeft from "../MainLeft/MainLeft";
import MainRight from "../MainRight/MainRight";
import "./Main.css";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      productName: "FOREVER 21",
    };
  }
  render() {
    const { handleAddCart } = this.props;
    return (
      <div id="main">
        <MainLeft />
        <MainRight
          handleAddCart={handleAddCart}
          productName={this.state.productName}
        />
      </div>
    );
  }
}

export default Main;
