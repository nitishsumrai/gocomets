import React from "react";
import "./MainLeft.css";
class MainLeft extends React.Component {
  constructor() {
    super();
    this.state = {
      img:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10507602/2019/9/30/4a4bce2d-4e65-4591-b5ef-88f14ac2d1dd1569846489779-FOREVER-21-Women-Jackets-1851569846487579-1.jpg",
    };
  }
  handleImageClick = (e) => {
    this.setState({
      img: e.target.src,
    });
  };
  render() {
    const { img } = this.state;
    return (
      <div id="main-left">
        <div class="iframe-container">
          <img id="main-img" src={img} alt="item image" />
        </div>
        <div id="thumbnail">
          <div className="thumbnail-child">
            <div className="iframe-container">
              <img
                onClick={this.handleImageClick}
                id="main-img"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10507602/2019/9/30/4c625fbc-582f-433b-b2bd-229a826514811569846489749-FOREVER-21-Women-Jackets-1851569846487579-2.jpg"
                alt="item image"
              />
            </div>
          </div>
          <div className="thumbnail-child">
            <div className="iframe-container">
              <img
                onClick={this.handleImageClick}
                id="main-img"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10507602/2019/9/30/5493adfe-f9a4-4ce5-ba17-ff70520cd55d1569846489672-FOREVER-21-Women-Jackets-1851569846487579-4.jpg"
                alt="item image"
              />
            </div>
          </div>
          <div className="thumbnail-child">
            <div className="iframe-container">
              <img
                onClick={this.handleImageClick}
                id="main-img"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10507602/2019/9/30/bf027610-975e-4ed8-93f7-d9671cc3e0ef1569846489644-FOREVER-21-Women-Jackets-1851569846487579-5.jpg"
                alt="item image"
              />
            </div>
          </div>
          <div className="thumbnail-child">
            <div className="iframe-container">
              <img
                onClick={this.handleImageClick}
                id="main-img"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10507602/2019/9/30/7568830c-1fae-4fbd-8b21-42cee62941431569846489709-FOREVER-21-Women-Jackets-1851569846487579-3.jpg"
                alt="item image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainLeft;
