import React from "react";
import "./contact.css";
import axios from "axios";
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    var token =
      "daniel.nebreja29@gmail.com:F9A4B14A-4064-84A7-A18C-F7B28474D49A";
    // var headers = {};

    // headers.Set("Access-Control-Allow-Origin", "*");
    // axios({
    //   method: "POST",
    //   url:
    //     "https://cors-anywhere.herokuapp.com/https://api.semaphore.co/api/v4/messages",
    //   headers: {
    //     // Authorization: `Bearer ${token}`,
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //     crossorigin: true,
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Headers": "Authorization, Origin, Content-type",
    //   },

    //   data: {
    //     apikey: token,
    //     number: "09156572864",
    //     message: "Hello tita Lyka! I love you!!!",
    //     sendername: "Daniel Nebreja",
    //   },
    // })
    let converted = btoa(token).trim();

    // console.log(this.state);
    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://rest.clicksend.com/v3/sms/send",
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Basic ${converted}`,
      },
      data: {
        messages: [
          {
            body:
              "name: " +
              this.state.fullname +
              ", email: " +
              this.state.email +
              ", phone: " +
              this.state.phone +
              ", message: " +
              this.state.message,
            to: "09351749597",
            from: "09103764455",
          },
        ],
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <form onSubmit={this.handleSubmit}>
                <div className="rightCard-form">
                  <input
                    className="inputCard"
                    placeholder="Please enter your name"
                    name="fullname"
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <input
                    className="inputCard"
                    placeholder="Please enter your phone number"
                    name="phone"
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
                    required
                  />
                </div>
                <div className="rightCard-button">
                  <button type="submit" className="btn btnCard">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
