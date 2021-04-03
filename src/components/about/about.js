import React from "react";
import "./about.css";
import MyAvatar from "../../images/avatar2.png";
import Slider from "react-slick";

class CustomSlide extends React.Component {
  render() {
    const { src } = this.props;

    // console.log(this.props);
    return (
      <div className="slickItem">
        <img src={src} alt="item" style={{ width: "80%", height: "70%" }} />
      </div>
    );
  }
}

class CustomSlide2 extends React.Component {
  render() {
    const { src } = this.props;

    // console.log(this.props);
    return (
      <div className="slickItem-big">
        <img src={src} alt="item" style={{ width: "50%", height: "40%" }} />
      </div>
    );
  }
}

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        "https://www.php.net/images/logos/new-php-logo.svg",
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
        "data:image/png;base64,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",
        "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
        "https://cubettech.com/wp-content/uploads/2018/09/1280px-React-icon.svg_.png",
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
        "https://freepikpsd.com/wp-content/uploads/2019/10/bootstrap-logo-png-1-Transparent-Images-Free.png",
        "https://www.pngitem.com/pimgs/m/385-3850895_graphql-logo-svg-hd-png-download.png",
      ],
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      className: "slickDiv2",
    };
    return (
      <div className="mainAbout-div">
        <div className="mainAbout-inner">
          <div className="aboutInner-left">
            <div className="aboutLeft-item">
              <div className="aboutLeft-avatar">
                <span>
                  <img src={MyAvatar} alt="avatar" className="aboutAvatar" />
                </span>
              </div>
              <div className="aboutLeft-info">
                <div className="leftInfo-name">
                  <span>Daniel Nebreja</span>
                  <span>Frontend Web Developer</span>
                </div>
                <div className="leftInfo-skills">
                  <div className="leftSkills-inner">
                    <div className="leftSkills-slick">
                      <Slider
                        arrows={false}
                        asNavFor={this.state.nav2}
                        ref={(slider) => (this.slider1 = slider)}
                        className="slickDiv"
                      >
                        {this.state.skills.map((item, i) => (
                          <CustomSlide2 index={i + 1} key={i} src={item} />
                        ))}
                      </Slider>
                      <Slider
                        asNavFor={this.state.nav1}
                        ref={(slider) => (this.slider2 = slider)}
                        {...settings}
                      >
                        {this.state.skills.map((item, i) => (
                          <CustomSlide index={i + 1} key={i} src={item} />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutInner-right">
            <div className="innerRight-line"></div>
            <div className="innerRight-about">
              <div className="rightAbout-one">
                <div>A little bit about me,</div>
                <div>
                  My name is Daniel Nebreja, a frontend developer based here in
                  the Philippines. I love designing web applications and making
                  visualize designs into reality. Though my passion is to focus
                  on frontend developing I also have background in backend, in
                  my previous and current jobs as a frontend developer. I am
                  doing fullstack, working on front and back end of the project
                  to test every functionalities of the app.{" "}
                </div>
              </div>
              <div className="rightAbout-two">
                <div className="aboutTwo-title">
                  Some languages and technologies that I use
                </div>
                <div className="aboutTwo-inner">
                  <div>
                    <div>For frontend :</div>
                    <div></div>
                  </div>
                  <div>
                    <div>For backend :</div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="rightAbout-three"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
