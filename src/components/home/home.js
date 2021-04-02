import React from "react";
import "./home.css";
import Logo from "../../images/dbl-logo.png";
import { DownOutlined, PhoneTwoTone } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import ScrollspyNav from "react-scrollspy-nav";
import MyAvatar from "../../images/avatar2.png";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "",
      skills: [
        "https://www.php.net/images/logos/new-php-logo.svg",
        "https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png",
        "data:image/png;base64,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",
        "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
        "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        "https://www.onlogic.com/company/io-hub/wp-content/uploads/2013/07/socket-io-logo.jpg",
        "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png",
        "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
        "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png",
        "https://material-ui.com/static/logo.png",
        "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
        "https://seeklogo.com/images/P/puppeteer-logo-254C5F1692-seeklogo.com.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png",
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => this.handleScroll(), true);
  }

  handleScroll = (e) => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 50) {
      this.setState({ position: "fixed", margin: "130px" });
    } else {
      this.setState({ position: "", margin: "0px" });
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
                        <a href="#section_1">Introduction</a>
                      </span>
                      <span>
                        <a href="#section_2">About me</a>
                      </span>
                      <span>
                        <a href="#section_3">Projects</a>
                      </span>
                      <span>
                        <a href="#mentorship">Mentorship</a>
                      </span>
                      <span>
                        <a href="#contact">Let's talk</a>
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
            <div
              className="mainHome-foot"
              style={{ marginTop: this.state.margin }}
            >
              <span>
                <Tooltip title="Let's have a talk" placement="top">
                  <Avatar
                    size="large"
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
          <div className="mainAbout-div">
            <div className="mainAbout-inner">
              <div className="aboutInner-left">
                <div className="aboutLeft-item">
                  <div className="aboutLeft-avatar">
                    <span>
                      <img
                        src={MyAvatar}
                        alt="avatar"
                        className="aboutAvatar"
                      />
                    </span>
                  </div>
                  <div className="aboutLeft-info">
                    <div className="leftInfo-name">
                      <span>Daniel Nebreja</span>
                      <span>Frontend Web Developer</span>
                    </div>
                    <div className="leftInfo-skills">
                      <div className="leftSkills-inner">
                        <div>
                          {this.state.skills.map((item, i) => (
                            <img
                              key={i}
                              src={item}
                              alt="item"
                              className="leftSkills-img"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutInner-right"></div>
            </div>
          </div>
          <div id="section_3" className="mainAbout-div"></div>
        </div>
      </>
    );
  }
}
