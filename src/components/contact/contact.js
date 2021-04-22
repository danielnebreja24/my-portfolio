import React from "react";
import "./contact.css";
import axios from "axios";
import { Alert, Spin } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showAlert: false,
      type: "info",
      msg: "Success",
      desc: "Thank you for reaching out. I'll respond as soon as I can.",
      disabled: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/https://api.kvstore.io/collections",
      headers: {
        "Content-type": "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
        "Access-Control-Allow-Headers": "*",
        // kvstoreio_api_key:
        kvstoreio_api_key:
          "b4dc4cfc09c112435eb2401eb13accf0530d2b1e91a702baaf1274e053252582",
      },
    }).then((res) => {
      console.log(res.data);
    });

    // var token = "daniel.nebreja29@gmail.com:Dane222714@";
    // let converted = btoa(token).trim();
    // this.setState({ disabled: true });
    // axios({
    //   url:
    //     "https://cors-anywhere.herokuapp.com/https://rest.clicksend.com/v3/sms/send",
    //   method: "post",
    //   headers: {
    //     "Content-type": "application/json",
    //     Authorization: `Basic ${converted}`,
    //   },
    //   data: {
    //     messages: [
    //       {
    //         body:
    //           "name:" +
    //           this.state.fullname +
    //           ",email:" +
    //           this.state.email +
    //           ",phone:" +
    //           this.state.phone +
    //           ",msg:" +
    //           this.state.message,
    //         to: "+639351749597",
    //         from: this.state.phone,
    //       },
    //     ],
    //   },
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.response_code === "SUCCESS") {
    //       this.setState({
    //         showAlert: true,
    //         msg: "Success",
    //         type: "info",
    //         desc: "Thank you for reaching out. I'll respond as soon as I can.",
    //       });
    //       setTimeout(() => {
    //         this.setState({ showAlert: false, disabled: false });
    //       }, 4000);
    //     } else {
    //       this.setState({
    //         showAlert: true,
    //         msg: "Sorry",
    //         type: "error",
    //         desc: "Message not sent. Please try again later.",
    //       });
    //       setTimeout(() => {
    //         this.setState({ showAlert: false, disabled: false });
    //       }, 4000);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // this.setState({ disabled: true });
    //     this.setState({
    //       showAlert: true,
    //       msg: "Sorry",
    //       type: "error",
    //       desc: "Message not sent. Please try again later.",
    //     });
    //     setTimeout(() => {
    //       this.setState({ showAlert: false, disabled: false });
    //     }, 4000);
    //   });
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
              zIndex: "99",
            }}
          />
        ) : null}
        <div className="mainContact-div">
          {/* <div className="mainContact-title">Let's Talk</div> */}
          <div className="contactDiv-inner">
            <div className="contactInner-left">
              <div className="innerLeft-top">
                <div>Contact</div>
                <div>
                  I hope I satisfied you with my portfolio and looking forward
                  to work with you. If you are not yet satisfied you can contact
                  me to ask and know me more, if you are satisfied please
                  contact me also. You can reach me through these details
                  provided. I will respond as soon I can. Thank you
                </div>
              </div>
              <div className="innerLeft-bottom">
                <div className="leftBottom-one">
                  <span>
                    <PhoneOutlined
                      rotate="90"
                      style={{ marginRight: "10px" }}
                    />
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
                    <a
                      href="https://www.facebook.com/danielcalisin.nebreja"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookOutlined />
                    </a>
                    <a
                      href="https://www.instagram.com/chickendinnel/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramOutlined />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/danielcalisinnebreja/"
                      target="_blank"
                      rel="noreferrer"
                    >
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
                    <input
                      className="inputCard"
                      placeholder="Please enter your name"
                      name="fullname"
                      maxLength="30"
                      onChange={(e) =>
                        this.setState({ [e.target.name]: e.target.value })
                      }
                      required
                    />
                    <input
                      className="inputCard"
                      placeholder="Please enter your contact number"
                      name="phone"
                      maxLength="15"
                      onChange={(e) =>
                        this.setState({ [e.target.name]: e.target.value })
                      }
                      required
                    />
                    <input
                      className="inputCard"
                      placeholder="Please enter your email address"
                      name="email"
                      type="email"
                      maxLength="40"
                      onChange={(e) =>
                        this.setState({ [e.target.name]: e.target.value })
                      }
                      required
                    />
                    <textarea
                      style={{ resize: "none" }}
                      rows="3"
                      className="inputCard"
                      placeholder="Please enter your message"
                      name="message"
                      onChange={(e) =>
                        this.setState({ [e.target.name]: e.target.value })
                      }
                      maxLength="75"
                      required
                    />
                  </div>
                  <div className="rightCard-button">
                    <button
                      type="submit"
                      className="btn btnCard"
                      disabled={this.state.disabled}
                    >
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
