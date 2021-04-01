import React from "react";
import "./home.css";
import Logo from "../../images/dbl-logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Redirect } from "react-router";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => this.handleScroll(), true);
  }

  handleScroll = (e) => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 50) {
      this.setState({ position: "fixed" });
    } else {
      this.setState({ position: "" });
    }
  };

  handleAbout = () => {
    console.log(this.props);
    this.props.history.push("#about");
  };

  render() {
    return (
      <>
        <div className="mainPage">
          <div className="mainHome-div">
            <div
              className="mainHome-header"
              style={{
                position: this.state.position,
                height: this.state.position == "fixed" ? "13%" : "20%",
                backgroundColor:
                  this.state.position == "fixed" ? "#111" : "transparent",
              }}
            >
              <div className="mainHead-inner">
                <div className="mainHead-left">
                  <div className="headLeft-span">
                    <img src={Logo} alt="logo" className="mainHead-logo" />
                  </div>
                </div>
                <div className="mainHead-right">
                  <span>
                    <a href="#">Introduction</a>
                  </span>
                  <span>
                    <a href="#about">About me</a>
                  </span>
                  <span>
                    <a href="#projects">Projects</a>
                  </span>
                  <span>
                    <a href="#mentorship">Mentorship</a>
                  </span>
                  <span>
                    <a href="#contact">Let's talk</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="mainHome-body">
              <div className="mainBody-inner">
                <div className="mainInner-one">
                  Hello there, my name is&nbsp;<a href="#">Daniel</a>
                </div>
                <div className="mainInner-divider"></div>
                <div className="mainInner-two">WEB DEVELOPER</div>
                <div className="mainInner-three">
                  "I love designing and make web applications more beautiful in
                  my simple ways".
                </div>
                <a href="#about" className="mainInner-four">
                  <span>Want to know more about me?</span>
                  <DownOutlined
                    className="dropdownIcon"
                    style={{ color: "rgb(173, 150, 14)", fontSize: "30px" }}
                  />
                  {/* <DownCircleTwoTone className="dropdownIcon" /> */}
                </a>
              </div>
            </div>
          </div>

          <div id="about" className="mainAbout-div"></div>
          <div id="projects" className="mainAbout-div"></div>
        </div>
      </>
    );
  }
}
