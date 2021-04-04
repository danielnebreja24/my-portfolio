import React from "react";
import "./home.css";
import Logo from "../../images/dbl-logo.png";
import { DownOutlined, PhoneTwoTone } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import ScrollspyNav from "react-scrollspy-nav";

import About from "../about/about";
import Projects from "../projects/projects.js";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "",
      aboutClass: "",
      introClass: "",
      mentorClass: "",
      projectClass: "",
      contactClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => this.handleScroll(), true);
  }

  handleScroll = (e) => {
    let scroll = window.pageYOffset;
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 50) {
      this.setState({ position: "fixed", margin: "130px" });
    } else {
      this.setState({ position: "", margin: "0px" });
    }

    if (scroll >= 600) {
      console.log("yeah");
      this.setState({ aboutClass: "is-active" });
    }
  };

  handleAbout = () => {
    // console.log(this.props);
    // this.props.history.push("#about");
  };

  render() {
    console.log(this.state.aboutClass);
    return (
      <>
        <div className="mainPage">
          <div id="section_1" className="mainHome-div">
            <div
              className="mainHome-header"
              style={{
                position: this.state.position,
                height: this.state.position === "fixed" ? "13%" : "20%",
                backgroundColor:
                  this.state.position === "fixed" ? "#111" : "transparent",
              }}
            >
              <div className="mainHead-inner">
                <div className="mainHead-left">
                  <div className="headLeft-span">
                    <img src={Logo} alt="logo" className="mainHead-logo" />
                  </div>
                </div>
                <div className="mainHead-right">
                  <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    activeNavClass="is-active"
                    // style={{ width: "100%" }}
                  >
                    <div className="mainHead-rightInner">
                      <span>
                        <a href="#section_1" class={this.state.introClass}>
                          Introduction
                        </a>
                      </span>
                      <span>
                        <a href="#section_2">About me</a>
                      </span>
                      <span>
                        <a
                          href="#section_3"
                          className={this.state.projectClass}
                        >
                          Projects
                        </a>
                      </span>
                      <span>
                        <a
                          href="#mentorship"
                          className={this.state.mentorClass}
                        >
                          Mentorship
                        </a>
                      </span>
                      <span>
                        <a href="#contact" className={this.state.contactClass}>
                          Let's talk
                        </a>
                      </span>
                    </div>
                  </ScrollspyNav>
                </div>
              </div>
            </div>
            <div className="mainHome-body">
              <div className="mainBody-inner">
                <div className="mainInner-one">
                  Hello there, my name is&nbsp;<a href="#section_1">Daniel</a>
                </div>
                <div className="mainInner-divider"></div>
                <div className="mainInner-two">WEB DEVELOPER</div>
                <div className="mainInner-three">
                  "I love designing and make web applications more beautiful in
                  my simple ways".
                </div>
                <a href="#section_2" className="mainInner-four">
                  <span>Want to know more about me?</span>
                  <span className="dropDownIcon">
                    <DownOutlined
                      className="dropdownIcon"
                      style={{ color: "rgb(173, 150, 14)", fontSize: "30px" }}
                    />
                  </span>
                  {/* <DownCircleTwoTone className="dropdownIcon" /> */}
                </a>
              </div>
            </div>
            <div className="mainHome-foot">
              sad
              <span style={{ marginTop: this.state.margin }}>
                <Tooltip title="Let's have a talk" placement="top">
                  <Avatar
                    size={50}
                    style={{
                      backgroundColor: "rgb(173, 150, 14)",
                    }}
                    icon={<PhoneTwoTone twoToneColor="#fff" />}
                  />
                </Tooltip>
              </span>
            </div>
          </div>
          <div id="section_2" className="divider"></div>
          <About />
          <div id="section_3" className="divider"></div>
          <Projects />
        </div>
      </>
    );
  }
}
