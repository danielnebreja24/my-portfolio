import React from "react";
import "./login.css";
import Logo from "../../images/dlb-logo7.png";
import Avatar from "../../images/avatar1.png";

import { Alert } from "antd";

const { REACT_APP_UNAME, REACT_APP_PWD } = process.env;

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      year: "",
      showAlert: false,
      disabled: false,
    };
  }

  componentDidMount() {
    var date = new Date();
    var year = date.getFullYear();

    this.setState({ year: year });

    if (localStorage.getItem("loglog") === "laLyka") {
      // this.props.history.push("/dashnow");
      window.location.pathname = "/dashnow";
    }

    // console.log(REACT_APP_UNAME, REACT_APP_PWD);
  }

  handleSubmit = (e) => {
    this.setState({ disabled: true });
    e.preventDefault();
    if (
      this.state.uname === REACT_APP_UNAME.toString() &&
      this.state.code === REACT_APP_PWD.toString()
    ) {
      console.log("correct");
      this.setState({
        showAlert: true,
        msg: "Success",
        type: "info",
        desc: "Credentials accepted. Welcome Mr. Wick!",
      });

      setTimeout(() => {
        this.setState({ disabled: false });
        localStorage.setItem("loglog", "laLyka");
        // this.props.history.push("/dashnow");
        window.location.pathname = "/dashnow";
      }, 2000);
    } else {
      //   console.log("boplaks");
      this.setState({
        showAlert: true,
        disabled: false,
        msg: "Sorry",
        type: "error",
        desc: "Incorrect credentials. Please try again",
      });
      localStorage.clear();
    }
  };

  render() {
    return (
      <>
        {this.state.showAlert ? (
          <Alert
            message={this.state.msg}
            description={this.state.desc}
            type={this.state.type}
            showIcon
            closable
            style={{
              position: "fixed",
              top: "20px",
              right: "30px",
              zIndex: "99",
            }}
          />
        ) : null}
        <div className="mainDiv-login">
          <div className="mainLogin-header">
            <img
              src={Logo}
              alt="logo"
              onClick={() => (window.location.pathname = "/")}
            />
          </div>
          <div className="mainLogin-body">
            {/* <img src={LoginGif} alt="Login GIF" className="mainBody-img" /> */}
            <form onSubmit={this.handleSubmit}>
              <div className="mainBody-card">
                <div className="loginCard-top">
                  <img src={Avatar} alt="Profile" className="cardAvatar" />
                </div>
                <div className="loginCard-bottom">
                  {/* <Input placeholder="Enter username" /> */}
                  <input
                    className="inputCard inputLog"
                    name="uname"
                    placeholder="Enter my username"
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <input
                    className="inputCard inputLog"
                    name="code"
                    type="password"
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                    placeholder="Enter your code"
                    required
                  />
                  <button
                    type="submit"
                    disabled={this.state.disabled}
                    className="btn btnLogin"
                  >
                    Let's Get In
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mainDiv-footer">
            {/* <Footer /> */}
            Daniel Nebreja &copy; {this.state.year}
          </div>
        </div>
      </>
    );
  }
}
