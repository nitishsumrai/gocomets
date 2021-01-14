import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  handleAddCart = (productDetail) => {
    console.log(productDetail);
    this.setState(
      {
        cart: [...this.state.cart, productDetail],
      },
      () => {
        console.log("pop", this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <Header cart={this.state.cart} />
        <Main handleAddCart={this.handleAddCart} />
      </div>
    );
  }
}

export default App;
