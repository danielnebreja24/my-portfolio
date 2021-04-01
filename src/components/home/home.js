import React from "react";
import "./home.css";
import Logo from "../../images/dbl-logo.png";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="mainPage">
          <div className="mainHome-div">
            <div className="mainHome-header">
              <div className="mainHead-inner">
                <div className="mainHead-left">
                  <div className="headLeft-span">
                    <img src={Logo} alt="logo" className="mainHead-logo" />
                  </div>
                </div>
                <div className="mainHead-right">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span>
                    <a href="#">About me</a>
                  </span>
                  <span>
                    <a href="#">Projects</a>
                  </span>
                  <span>
                    <a href="#">Mentorship</a>
                  </span>
                  <span>
                    <a href="#">Let's talk</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="mainHome-body">
              <div class="mainBody-inner"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
