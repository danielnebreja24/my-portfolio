import React from "react";
import "./contact.css";
// import { Input } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  //   UserOutlined,
} from "@ant-design/icons";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mainContact-div">
        {/* <div className="mainContact-title">Let's Talk</div> */}
        <div className="contactDiv-inner">
          <div className="contactInner-left">
            <div className="innerLeft-top">
              <div>Contact</div>
              <div>
                I hope I satisfied you with my portfolio and looking forward to
                work with you. If you are not yet satisfied you can contact me
                to ask and know me more, if you are satisfied please contact me
                also. You can reach me through these details provided. I will
                respond as soon I can. Thank you
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
              <div className="rightCard-form">
                <input
                  className="inputCard"
                  placeholder="Please enter your name"
                  name="fullname"
                />
                <input
                  className="inputCard"
                  placeholder="Please enter your phone number"
                  name="phone"
                />
                <input
                  className="inputCard"
                  placeholder="Please enter your email address"
                  name="address"
                />
                <textarea
                  style={{ resize: "none" }}
                  className="inputCard"
                  placeholder="Please enter your message"
                  name="message"
                />
              </div>
              <div className="rightCard-button">
                <button className="btn btnCard">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
