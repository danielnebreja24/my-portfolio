import React from "react";
import "./project.css";
import { Timeline } from "antd";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import Slider from "react-slick";

//make me up project images
import MakeMeUp1 from "../../images/make-me-up1.png";
import MakeMeUp2 from "../../images/make-me-up2.png";
import MakeMeUp3 from "../../images/make-me-up3.png";
import MakeMeUp4 from "../../images/make-me-up4.png";
import MakeMeUp5 from "../../images/make-me-up5.png";

//bi project images
import BI1 from "../../images/bi.jpg";
import BI2 from "../../images/bi1.png";
import BI3 from "../../images/bi2.png";
import BI4 from "../../images/bi3.png";
import BI5 from "../../images/bi4.png";
import BI6 from "../../images/bi5.png";
import BI7 from "../../images/bi6.png";

//doctors-call project images
import DoctorsCall1 from "../../images/doctors-call.png";
import DoctorsCall2 from "../../images/doctors-call1.png";
import DoctorsCall3 from "../../images/doctors-call2.png";
import DoctorsCall4 from "../../images/doctors-call3.png";
import DoctorsCall5 from "../../images/doctors-call4.png";
import DoctorsCall6 from "../../images/doctors-call5.png";
import DoctorsCall7 from "../../images/doctors-call6.png";

//frontend-boomcamp project images
import Frontend1 from "../../images/frontend-boomcamp.png";
import Frontend2 from "../../images/frontend-boomcamp1.png";

//allmyholidays project images
import AllMyHolidays1 from "../../images/allmyholidays.png";
import AllMyHolidays2 from "../../images/allmyholidays1.png";

//php-course project images
import PHP1 from "../../images/php-course.png";
import PHP2 from "../../images/php-course1.png";
import PHP3 from "../../images/php-course2.png";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          label: "PROJECT/COLLABORATED",
          title: "Make me up",
          tech: " HTML, CSS, Bootstrap, Node JS, MySQL, Firebase, AWS ",
          desc:
            "Make me up is an online shop and booking service. This app basically is made for buyers, sellers and other service providers. You can sell your products, order a product, book a service or offer a service.",
          img: [MakeMeUp1, MakeMeUp2, MakeMeUp3, MakeMeUp4, MakeMeUp5],
          view: ["github", "site"],
          links: { github: "", site: "" },
        },
        {
          label: "COLLABORATED",
          title: "Single traveler's profile",
          tech:
            " React JS, PHP, Laravel, Python Flask, Material-UI, Bootstrap ",
          desc:
            "Single traveler's profile is a government project of Bureau of Immigration. Main goal of this project is to save and record all the immigrants or travellers who are going inside and outside of the Phillipines. Using the form or scanned passport of a single traveller it will record and save the information. The user can retrieve the information via name or passport number. There is also an embedded map that can track the traveller's location of previous stays.",
          img: [BI1, BI2, BI3, BI4, BI5, BI6, BI7],
          view: ["github"],
          links: { github: "" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Doctor's call app",
          tech: " React JS, AWS Amplify, GraphQL, DynamoDB, Material-UI, CSS ",
          desc:
            "Doctor's call app is a web application created for the company who are selling their products to a certain doctor. The user can plan their schedule using the app and plot it to actual visit and record the time, important notes, products presented, signature of the doctor and the manager in-charge, etc. It covers also the inventory and records of the item, doctors, hospitals, etc. ",
          img: [
            DoctorsCall1,
            DoctorsCall2,
            DoctorsCall3,
            DoctorsCall4,
            DoctorsCall5,
            DoctorsCall6,
            DoctorsCall7,
          ],
          view: ["github", "site"],
          links: { github: "", site: "" },
        },
        {
          label: "COLLABORATED",
          title: "All my holidays",
          tech: " HTML, Bootstrap, Javascript, JQuery, PHP ",
          desc:
            "All my holiday is a site build for clients who are looking for a destinations to spend. It is also a online booking of flight through airlines. ",
          img: [AllMyHolidays1, AllMyHolidays2],
          view: [],
          links: {},
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "PHP Course",
          tech: " React JS, Ant Design, Gatsby, Material-UI ",
          desc:
            "PHP Course is a application made for the student/mentees of BoomCamp. The lessons, activities, materials, grades and other stuffs regarding the PHP Course that the mentees and the mentor needed are saved in this web application for them to easily access it whenever and whereever.",
          img: [PHP1, PHP2, PHP3],
          view: [],
          links: {},
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Frontend Boom Camp",
          tech: " React JS, Ant Design, Gatsby, Material-UI ",
          desc:
            "Frontend BoomCamp is a application made for the student/mentees of BoomCamp. The lessons, activities, grades and other stuffs that the mentees and the mentor needed are saved in this web application for them to easily access it whenever and whereever.",
          img: [Frontend1, Frontend2],
          view: ["site"],
          links: { site: "https://frontend.boom.camp/" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Handraiser",
          tech:
            " React JS, Node JS, Express JS, PostgreSQL, Socket IO, Material-UI, Ant-design, CSS ",
          desc:
            "Handraiser is a project created for mentor and student realtime interaction. The student can communicate or ask assistance from mentor through this app. It is also useful for mentor for them to easily collaborate and check for their respective mentees/students.",
          img: [],
          view: ["github"],
          links: { github: "" },
        },
        {
          label: "PERSONAL PROJECT",
          title: "IG Project",
          tech:
            " React JS, Node JS, Express JS, PostgreSQL, Socket IO, Material-UI, Ant-design, CSS ",
          desc:
            "IG Project is my personal project. The main goal of this app is to clone the existing successfull Instagram UI and functions using the React JS and Node JS and intergrating the chat app by using the socket IO. I just made this project to practice my skills and experience using the technologies and for portfolio purposes. ",
          img: [],
          view: ["github"],
          links: { github: "https://github.com/DanielNebreja/ig-project" },
        },
      ],
      mode: "alternate",
    };
  }

  componentDidMount() {
    if (window.innerWidth <= 730) {
      this.setState({ mode: "left" });
    } else {
      this.setState({ mode: "alternate" });
    }
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    if (window.innerWidth <= 730) {
      this.setState({ mode: "left" });
    } else {
      this.setState({ mode: "alternate" });
    }
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slickDiv",
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
    };

    // console.log(this.state.mode);
    return (
      <>
        <div className="mainProjects-div">
          <div className="mainProject-title">
            <span>Projects and Collaboration</span>
            <span>
              Here are some of projects I've been worked/collaborated on.
            </span>
          </div>
          <div className="mainProject-body">
            <Timeline mode={this.state.mode} style={{ marginTop: "70px" }}>
              {this.state.projects.length
                ? this.state.projects.map((item, i) => (
                    <Timeline.Item
                      label={
                        this.state.mode === "alternate" ? item.label : null
                      }
                      key={i}
                      style={{ color: "#ddd" }}
                    >
                      <div className="timeLine-item" key={i}>
                        <div className="timeLine-title">
                          <span>{item.title}</span>
                          <span>{item.tech}</span>
                          {this.state.mode === "left" ? (
                            <span>({item.label})</span>
                          ) : null}
                        </div>
                        <div className="timeLine-body">
                          <div className="timeLine-img">
                            <div className="imgLaptop">
                              <div className="laptopInner">
                                <Slider {...settings}>
                                  {item.img.map((img, index) => (
                                    <div key={index}>
                                      <div className="carouselItem">
                                        <img
                                          src={img}
                                          className="carouselImg"
                                          alt="carousel"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </Slider>
                                ,
                              </div>
                            </div>
                            <div className="imgButtons">
                              {item.view.length
                                ? item.view.map((view, i) => {
                                    if (view === "github") {
                                      if (item.links.github) {
                                        return (
                                          <a
                                            href={item.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={i}
                                          >
                                            <button key={i} className="btn">
                                              <GithubOutlined />
                                              &nbsp; GitHub
                                            </button>
                                          </a>
                                        );
                                      } else {
                                        return (
                                          <button key={i} className="btn">
                                            <GithubOutlined />
                                            &nbsp; GitHub
                                          </button>
                                        );
                                      }
                                    } else {
                                      if (item.links.site) {
                                        return (
                                          <a
                                            href={item.links.site}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <button key={i} className="btn">
                                              <GlobalOutlined />
                                              &nbsp; View Site
                                            </button>
                                          </a>
                                        );
                                      } else {
                                        return (
                                          <button key={i} className="btn">
                                            <GlobalOutlined />
                                            &nbsp; View Site
                                          </button>
                                        );
                                      }
                                    }
                                  })
                                : null}
                            </div>
                          </div>
                          <div className="timeLine-desc">
                            <span>{item.desc}</span>
                          </div>
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
