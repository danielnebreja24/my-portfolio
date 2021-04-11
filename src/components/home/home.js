import React from "react";
import "./home.css";
import Logo from "../../images/dlb-logo4.png";
import {
  DownOutlined,
  PhoneTwoTone,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import ScrollspyNav from "react-scrollspy-nav";

import About from "../about/about";
import Projects from "../projects/projects";
import Mentor from "../mentor/mentor";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      drawerState: false,
      showScrollspy: false,
      position: "",
      aboutClass: "",
      introClass: "",
      mentorClass: "",
      projectClass: "",
      contactClass: "",
    };
  }

  componentDidMount() {
    if (window.innerWidth <= 630) {
      this.setState({ showScrollspy: false });
    } else {
      this.setState({ showScrollspy: true });
    }
    window.addEventListener("scroll", (e) => this.handleScroll(), true);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", (e) => this.handleScroll(), false);
  }

  updateDimensions = () => {
    if (window.innerWidth <= 630) {
      this.setState({ showScrollspy: false });
    } else {
      this.setState({ showScrollspy: true });
    }
  };

  handleScroll = (e) => {
    let scroll = window.pageYOffset;
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 30) {
      this.setState({ position: "fixed", margin: "120px", margin2: "-10px" });
    } else {
      this.setState({ position: "", margin: "0px" });
    }

    if (scroll >= 600) {
      // console.log("yeah");
      this.setState({ aboutClass: "is-active" });
    }
  };

  handleDrawer = () => {
    this.setState({ drawerState: !this.state.drawerState });
  };

  render() {
    // console.log(this.state.showScrollspy);
    return (
      <>
        <div className="mainPage">
          <div id="section_1" className="mainHome-div">
            {this.state.showScrollspy ? (
              <div
                className="mainHome-header"
                style={{
                  position: this.state.position,
                  height: this.state.position === "fixed" ? "13%" : "20%",
                  minHeight: "80px",
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
                      scrollTargetIds={[
                        "section_1",
                        "section_2",
                        "section_3",
                        "section_4",
                        "section_5",
                      ]}
                      activeNavClass="is-active"
                      offset={-100}
                      scrollDuration={this.state.showScrollspy ? "400" : "100"}
                    >
                      <div className="mainHead-rightInner">
                        <span>
                          <a
                            href="#section_1"
                            className={this.state.introClass}
                          >
                            Introduction
                          </a>
                        </span>
                        <span>
                          <a href="#section_2">About me</a>
                        </span>
                        <span>
                          <a href="#section_3">My works</a>
                        </span>
                        <span>
                          <a href="#section_4">Mentorship</a>
                        </span>
                        <span>
                          <a href="#section_5">Let's talk</a>
                        </span>
                      </div>
                    </ScrollspyNav>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mainHome-header">
                <div className="mainHead-inner">
                  <div className="mainHead-left">
                    <div className="headLeft-span">
                      <img src={Logo} alt="logo" className="mainHead-logo" />
                    </div>
                  </div>
                  <div className="mainHead-right"></div>
                  <div className="responsiveDrawer">
                    <img src={Logo} alt="logo" className="mainHead-logo" />
                    <span className="menuDiv">
                      {!this.state.drawerState ? (
                        <MenuOutlined onClick={() => this.handleDrawer()} />
                      ) : (
                        <CloseOutlined onClick={() => this.handleDrawer()} />
                      )}
                    </span>
                    <div
                      style={{
                        height: !this.state.drawerState ? "0" : "250px",
                      }}
                      className="drawerItem-div"
                    >
                      <ScrollspyNav
                        scrollTargetIds={[
                          "section_1",
                          "section_2",
                          "section_3",
                          "section_4",
                          "section_5",
                        ]}
                        activeNavClass="is-active"
                      >
                        <div className="drawerItem">
                          <span>
                            <a href="#section_1">Introduction</a>
                          </span>
                          <span>
                            <a href="#section_2">About me</a>
                          </span>
                          <span>
                            <a href="#section_3">My works</a>
                          </span>
                          <span>
                            <a href="#section_4">Mentorship</a>
                          </span>
                          <span>
                            <a href="#section_5">Let's talk</a>
                          </span>
                        </div>
                      </ScrollspyNav>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mainHome-body">
              {/* {this.state.margin} */}
              <div
                className="mainBody-inner"
                style={{
                  marginTop: this.state.margin === "120px" ? "200px" : "",
                }}
              >
                <div className="mainInner-one">
                  Hello there, my name is&nbsp;<a href="#section_1">Daniel</a>
                </div>
                <div className="mainInner-divider"></div>
                <div className="mainInner-two">WEB DEVELOPER</div>
                <div className="mainInner-three">
                  Love to turn your ideal designs into reality.
                </div>
                <a href="#section_2" className="mainInner-four">
                  <span>Want to know more about me?</span>
                  <span className="dropDownIcon">
                    <DownOutlined
                      className="dropdownIcon"
                      style={{ color: "rgb(173, 150, 14)", fontSize: "25px" }}
                    />
                  </span>
                  {/* <DownCircleTwoTone className="dropdownIcon" /> */}
                </a>
              </div>
            </div>
            <div className="mainHome-foot">
              <span
                style={{
                  marginTop: this.state.showScrollspy
                    ? this.state.margin
                    : this.state.margin2,
                }}
              >
                <a href="#section_5">
                  <Tooltip title="Let's have a talk" placement="top">
                    <Avatar
                      size={50}
                      style={{
                        backgroundColor: "rgb(173, 150, 14)",
                      }}
                      icon={<PhoneTwoTone twoToneColor="#fff" />}
                    />
                  </Tooltip>
                </a>
              </span>
            </div>
          </div>
          <div id="section_2"></div>
          <About />
          <div id="section_3" className="divider"></div>
          <Projects />
          <div id="section_4" className="divider"></div>
          <Mentor />
          <div
            id="section_5"
            className="divider"
            style={{ height: "70px" }}
          ></div>
          <Contact />
          <Footer />
        </div>
      </>
    );
  }
}
