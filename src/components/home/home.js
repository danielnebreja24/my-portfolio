import React from "react";
import "./home.css";
import Logo from "../../images/dlb-logo7.png";
import {
  // DownOutlined,
  PhoneTwoTone,
  MenuOutlined,
  CloseOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import ScrollspyNav from "react-scrollspy-nav";

import About from "../about/about";
import Projects from "../projects/projects";
// import Mentor from "../mentor/mentor";
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

    // if(this.props.history.location.pathname === "dashnow"){

    // }
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
      this.setState({ position: "fixed", margin2: "-10px" });
      if (window.innerWidth > 630) {
        this.setState({ margin: "120px" });
      }
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
                  height: this.state.position === "fixed" ? "80px" : "20%",
                  minHeight: "80px",
                  backgroundColor:
                    this.state.position === "fixed" ? "#222" : "transparent",
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
                        // "section_4",
                        "section_5",
                      ]}
                      activeNavClass="is-active"
                      offset={-100}
                      scrollDuration={this.state.showScrollspy ? "80" : "100"}
                    >
                      <div className="mainHead-rightInner">
                        <span>
                          <a
                            href="#section_1"
                            className={this.state.introClass}
                          >
                            Home
                          </a>
                        </span>
                        <span>
                          <a href="#section_2">About me</a>
                        </span>
                        <span>
                          <a href="#section_3">My works</a>
                        </span>
                        {/* <span>
                          <a href="#section_4">Mentorship</a>
                        </span> */}
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
                          // "section_4",
                          "section_5",
                        ]}
                        activeNavClass="is-active"
                      >
                        <div className="drawerItem">
                          <span>
                            <a href="#section_1">Home</a>
                          </span>
                          <span>
                            <a href="#section_2">About me</a>
                          </span>
                          <span>
                            <a href="#section_3">My works</a>
                          </span>
                          {/* <span>
                            <a href="#section_4">Mentorship</a>
                          </span> */}
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
                  marginTop: this.state.margin === "120px" ? "270px" : "",
                }}
              >
                <div className="mainInner-one">I AM</div>
                <div className="mainInner-two">DANIEL</div>
                <div className="mainInner-three">
                  <span>
                    A SOFTWARE <br></br>
                    <span className="ml-4"> ENGINEER</span>
                  </span>
                </div>
              </div>
              <div
                className="mainBody-footer"
                style={{
                  marginTop: this.state.margin === "120px" ? "100px" : "",
                }}
              >
                <div className="mainFoot-inner">
                  <a
                    href="https://www.facebook.com/danielcalisin.nebreja"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookOutlined />
                  </a>{" "}
                  <a
                    href="https://www.instagram.com/chickendinnel/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramOutlined />
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/danielcalisinnebreja/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinOutlined />
                  </a>
                </div>
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
          {/* <div id="section_4" className="divider"></div>
          <Mentor /> */}
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
