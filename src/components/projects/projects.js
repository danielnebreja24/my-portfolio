import React from "react";
import "./project.css";
import { Timeline } from "antd";
// import { ClockCircleOutlined } from "@ant-design/icons";
// import Laptop from "../../images/laptop1.png";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          label: "Project/Collaborated",
          title: "Make me up",
          tech: "( HTML, CSS, Bootstrap, Node JS, Firebase, AWS )",
          desc:
            "Make me up is an online shop and booking service. This app basically is made for buyers, sellers and other service providers. You can sell your products, order a product, book a service or offer a service.",
          img: [],
        },
        {
          label: "Project/Collaborated",
          title: "Doctor's call app",
          tech:
            "( React JS, AWS Amplify, GraphQL, DynamoDB, Material-UI, CSS )",
          desc:
            "Doctor's call app is a web application created for the company who are selling their products to a certain doctor. The user can plan their schedule using the app and plot it to actual visit and record the time, important notes, products presented, signature of the doctor and the manager in-charge, etc. It covers also the inventory and records of the item, doctors, hospitals, etc. ",
          img: [],
        },
        {
          label: "Project/Collaborated",
          title: "PHP Course",
          tech: "( React JS, Ant Design, Gatsby, Material-UI )",
          desc:
            "PHP Course is a application made for the student/mentees of BoomCamp. The lessons, activities, grades and other stuffs that the mentees and the mentor needed are saved in this web application for them to easily access it whenever and whereever.",
          img: [],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="mainProjects-div">
          <div className="mainProject-title">
            <span>Projects and Collaboration</span>
          </div>
          <div className="mainProject-body">
            <Timeline mode="alternate" style={{ marginTop: "50px" }}>
              {this.state.projects.length
                ? this.state.projects.map((item) => (
                    <Timeline.Item label={item.label}>
                      <div className="timeLine-item">
                        <div className="timeLine-title">
                          <span>{item.title}</span>
                          <span>{item.tech}</span>
                        </div>
                        <div className="timeLine-body">
                          <div className="timeLine-img">
                            {/* <img
                          src={Laptop}
                          style={{ width: "100%", height: "80%" }}
                        /> */}
                            <div className="imgLaptop">
                              <div className="laptopInner"></div>
                            </div>
                          </div>
                          <div className="timeLine-desc">{item.desc}</div>
                        </div>
                      </div>
                    </Timeline.Item>
                  ))
                : null}
            </Timeline>
            ,
          </div>
        </div>
      </>
    );
  }
}
