import React from "react";
import "./contact.css";
import axios from "axios";
import { Alert, Spin } from "antd";
import { PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showAlert: false,
      type: "info",
      msg: "Success",
      desc: "Thank you for reaching out. I'll respond as soon as I can.",
      disabled: false
    };
  }

  handleSubmit = async (e) => {
    this.setState({ disabled: true });
    e.preventDefault();

    //For date
    var date = new Date();
    var month = date.getMonth() + 1;
    var finalMonth = month.toString().length === 1 ? `0${month}` : month;
    var day = date.getDate().length === 1 ? `0${date.getDate()}` : date.getDate();
    var year = date.getFullYear();
    var fullDate = `${finalMonth}-${day}-${year}`;

    //For data to be send to api
    var jsondata = {
      name: this.state.fullname,
      email: this.state.email,
      contact: this.state.phone,
      message: this.state.message,
      date: fullDate
    };

    //For times the user send a message
    var times = localStorage.getItem("times") ? localStorage.getItem("times") : 0;

    if (parseInt(times) >= 5) {
      this.setState({
        showAlert: true,
        msg: "Sorry",
        type: "error",
        desc: "You exceeded the maximum message sent. Please try again later"
      });
      setTimeout(() => {
        this.setState({ disabled: false });
      }, 1000);
      setTimeout(() => {
        this.setState({ showAlert: false });
      }, 4000);
    } else {
      // alert("success");
      localStorage.setItem("times", parseInt(times) + 1);
      axios({
        async: true,
        crossDomain: true,
        url: "https://daniel-9dca.restdb.io/rest/messages",
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-apikey": "608402fe28bf9b609975a617",
          "cache-control": "no-cache"
        },
        processData: false,
        data: JSON.stringify(jsondata)
      })
        .then((res) => {
          if (res.data) {
            this.setState({
              showAlert: true,
              msg: "Success",
              type: "info",
              desc: "Thank you for reaching out. I'll respond as soon as I can."
            });
          }
          setTimeout(() => {
            this.setState({ disabled: false });
          }, 1000);
          setTimeout(() => {
            this.setState({ showAlert: false });
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            showAlert: true,
            msg: "Sorry",
            type: "error",
            desc: "Message not sent. Please try again later."
          });
          setTimeout(() => {
            this.setState({ disabled: false });
          }, 1000);
          setTimeout(() => {
            this.setState({ showAlert: false });
          }, 4000);
        });
    }

    console.log(times);
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
              top: "90px",
              right: "30px",
              zIndex: "99"
            }}
          />
        ) : null}
        <div className="mainContact-div">
          <div className="contactDiv-inner">
            <div className="contactInner-left">
              <div className="innerLeft-top">
                <div>Contact</div>
                <div>
                  I hope I satisfied you with my portfolio and looking forward to work with you. If you are not yet satisfied you can contact me to ask and know me more, if you are satisfied please
                  contact me also. You can reach me through these details provided. I will respond as soon I can. Thank you
                </div>
              </div>
              <div className="innerLeft-bottom">
                <div className="leftBottom-one">
                  <span>
                    <PhoneOutlined rotate="90" style={{ marginRight: "10px" }} />
                    Phone
                  </span>
                  <span>+63 935 174 9597</span>
                </div>
                <div className="leftBottom-two">
                  <span>
                    <MailOutlined style={{ marginRight: "10px" }} /> Email
                  </span>
                  <span>daniel.nebreja29@gmail.com</span>
                </div>
                <div className="leftBottom-three">
                  <span>Social Media</span>
                  <span>
                    <a href="https://www.facebook.com/danielcalisin.nebreja" target="_blank" rel="noreferrer">
                      <FacebookOutlined />
                    </a>
                    <a href="https://www.instagram.com/chickendinnel/" target="_blank" rel="noreferrer">
                      <InstagramOutlined />
                    </a>
                    <a href="https://www.linkedin.com/in/danielcalisinnebreja/" target="_blank" rel="noreferrer">
                      <LinkedinOutlined />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="contactInner-right">
              <div className="innerRight-card">
                <div className="rightCard-title">Let's have a talk</div>
                <div className="rightCard-subTitle">Coffee is on me!</div>
                <form onSubmit={this.handleSubmit}>
                  <div className="rightCard-form">
                    <input className="inputCard" placeholder="Please enter your name" name="fullname" maxLength="40" onChange={(e) => this.setState({ [e.target.name]: e.target.value })} required />
                    <input
                      className="inputCard"
                      placeholder="Please enter your contact number"
                      name="phone"
                      maxLength="20"
                      onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                      required
                    />
                    <input
                      className="inputCard"
                      placeholder="Please enter your email address"
                      name="email"
                      type="email"
                      maxLength="50"
                      onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                      required
                    />
                    <textarea
                      style={{ resize: "none" }}
                      rows="3"
                      className="inputCard"
                      placeholder="Please enter your message"
                      name="message"
                      onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                      maxLength="150"
                      required
                    />
                  </div>
                  <div className="rightCard-button">
                    <button type="submit" className="btn btnCard" disabled={this.state.disabled}>
                      {this.state.disabled ? <Spin /> : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
