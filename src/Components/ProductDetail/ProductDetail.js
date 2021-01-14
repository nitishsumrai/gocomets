import React from "react";
import "./ProductDetail.css";

class ProductDetail extends React.Component {
  handleColorChange = (e) => {
    this.props.handleColorChange(e.target.value);
  };
  handleQuanChange = (e) => {
    this.props.handleQuanChange(e.target.value);
  };
  handleSizeChange = (e) => {
    this.props.handleSizeChange(e.target.value);
  };
  render() {
    let colorList = [undefined, "Red", "Green", "Pink"];
    let sizeList = [undefined, "S", "L", "XL"];
    // console.log("hi");
    // console.log(this.state);
    let optionList = [];
    for (var i = 2; i < 10; i++) {
      optionList.push(<option value={i}>{i}</option>);
    }
    // console.log(optionList);
    return (
      <div className="Prod-detail-container">
        <div className="input-container twice-width ">
          <label for="color-input">
            <strong> Color</strong>
          </label>
          <select
            name="color"
            id="color-input"
            onChange={this.handleColorChange}
          >
            {colorList.map((color) =>
              color ? (
                <option value={color}>{color}</option>
              ) : (
                <option value={""}>Select Color</option>
              )
            )}
          </select>
        </div>
        <div className="input-container twice-width">
          <label for="size-input">
            <strong>Size</strong>
          </label>
          <select name="size" id="size-input" onChange={this.handleSizeChange}>
            {sizeList.map((size) =>
              size ? (
                <option value={size}>{size}</option>
              ) : (
                <option value={""}>Select size</option>
              )
            )}
          </select>
        </div>
        <div className="input-container single-width">
          <label for="quan-input">
            <strong>Quantity</strong>
          </label>
          {/* <br></br> */}
          <input
            onChange={this.handleQuanChange}
            type="number"
            id="quan-input"
            name="quan"
            min="1"
            max="5"
            defaultValue="1"
          />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
