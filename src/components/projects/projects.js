import React from "react";
import "./project.css";
import { Timeline } from "antd";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import Slider from "react-slick";

// CFEI
import CF1 from "../../images/cfei1.png";
import CF2 from "../../images/cfei2.png";
import CF3 from "../../images/cfei3.png";
import CF4 from "../../images/cfei4.png";
import CF5 from "../../images/cfei5.png";

// DBO-Admin
import DA from "../../images/dbo-admin.png";
import DA1 from "../../images/dbo-admin2.png";
import DA2 from "../../images/dbo-admin3.png";
import DA3 from "../../images/dbo-admin4.png";
import DA4 from "../../images/dbo-admin5.png";

// QC-SSDD (4 apps)
import SF1 from "../../images/4ssdd1.png";
import SF2 from "../../images/4ssdd2.png";
import SF3 from "../../images/4ssdd3.png";
import SF4 from "../../images/4ssdd4.png";
import SF5 from "../../images/4ssdd5.png";
import SF6 from "../../images/4ssdd6.png";

// aeloop brokers
import A1 from "../../images/a1.png";
import A2 from "../../images/a2.png";
import A3 from "../../images/a3.png";
import A4 from "../../images/a4.png";
import A5 from "../../images/a5.png";
import A6 from "../../images/a6.png";
import A7 from "../../images/a7.png";
import A8 from "../../images/a8.png";
import A9 from "../../images/a9.png";
import A10 from "../../images/a10.png";
import A11 from "../../images/a11.png";
import A12 from "../../images/a12.png";
import A13 from "../../images/a13.png";
import A14 from "../../images/a14.png";
import A15 from "../../images/a15.png";
import A16 from "../../images/a16.png";
import A17 from "../../images/a17.png";
import A18 from "../../images/a18.png";
import A19 from "../../images/a19.png";
import A20 from "../../images/a20.png";
import A21 from "../../images/a21.png";
import A22 from "../../images/a22.png";
import A23 from "../../images/a23.png";
import A24 from "../../images/a24.png";
import A25 from "../../images/a25.png";
import A26 from "../../images/a26.png";
import A27 from "../../images/a27.png";
import A28 from "../../images/a28.png";
import A29 from "../../images/a29.png";
import A30 from "../../images/a30.png";
import A31 from "../../images/a31.png";
import A32 from "../../images/a32.png";
import A33 from "../../images/a33.png";
import A34 from "../../images/a34.png";

// sparkfost-vax
import SparkVax from "../../images/sparksoftvax.png";

// qc-vax
import QC1 from "../../images/qc1.jpg";
import QC2 from "../../images/qc2.jpg";
import QC3 from "../../images/qc3.jpg";
import QC4 from "../../images/qc4.jpg";
import QC5 from "../../images/qc5.jpg";
import QC6 from "../../images/qc6.jpg";
import QC7 from "../../images/qc7.jpg";

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
    // let aeloopImg = [];
    // for (let i = 1; i <= 34; i++) {
    //   // console.log(i)
    //   aeloopImg.push(`A${i}`);
    // }
    // // console.log(aeloopImg);
    this.state = {
      projects: [
        {
          label: "PROJECT/COLLABORATED",
          title: "DBO Application (ADMIN PANEL)",
          tech: " ReactJS, AWS-Amplify, GraphQL, S3-Buckets, AppSync, DynamoDB, Ant-Design ",
          desc: "DBO Admin is a separate and stand alone app of DBO Main Application, the purpose of this app is to update the status of a pending building application and also to upload the necessary documents/files that the applicant needed for his/her application to be approved by the City Engineering's Office.",
          img: [DA, DA1, DA2, DA3, DA4],
          view: [],
          links: { github: "", site: "" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "QC-SSDD (4 Application)",
          tech: " ReactJS, AWS-Amplify, GraphQL, FormIO, NodeJS, AppSync, DynamoDB, API integration ",
          desc: "QC SSDD app is the user management and dashboard that is used by the SSDD admin/employee to access the 4 application including the Appointment System, Benefit Tracker, Document Management System and the Queueing System.",
          img: [SF1, SF2, SF3, SF4, SF5, SF6],
          view: [],
          links: { github: "", site: "" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "QC-CFEI",
          tech: " ReactJS, AWS-Amplify, GraphQL, AppSync, DynamoDB, Ant-Design, API Integration ",
          desc: "QC CFEI (Certificate of Final Electrical Inspection) is a separate and stand alone application of DBO Main Application, it is made for the DBO Admin (Electrical Inspector) to access the applicant who applied for CFEI and his/her current status.",
          img: [CF1, CF2, CF3, CF4, CF5],
          view: [],
          links: { github: "", site: "" },
        },
        {
          label: "PROJECT",
          title: "Aeloop Brokers",
          tech: " ReactJS, AWS-Amplify, GraphQL, FB Developer, Google Console, Google API's (Map, Places, etc.) ",
          desc: "Aeloop brokers is a real estate e-commerce site. Broker and agent can list their property (Condo, House, Lot, etc.) in this site, it also consist of an appointment system where client can schedule their visit thru online or in-person. It's a full functional real estate system/e-commerce site with the following roles: Admin, Broker, Agent and Client. ",
          img: [
            A1,
            A2,
            A3,
            A4,
            A5,
            A6,
            A7,
            A8,
            A9,
            A10,
            A11,
            A12,
            A13,
            A14,
            A15,
            A16,
            A17,
            A18,
            A19,
            A20,
            A21,
            A22,
            A23,
            A24,
            A25,
            A26,
            A27,
            A28,
            A29,
            A30,
            A31,
            A32,
            A33,
            A34,
          ],
          view: ["site"],
          links: {
            github: "",
            site: "https://master.d3g2vr1xtedbix.amplifyapp.com/",
          },
        },
        {
          label: "PROJECT",
          title: "Sparksoft Vax",
          tech: " Form IO, ReactJS, AWS-Amplify, GraphQL, FB Developer, Google Console ",
          desc: "Sparksoft Vax is a vaccination app made for the company private clients. It is a replication of the QC Vax, I just made some changes in terms of frontend.",
          img: [SparkVax, QC2, QC3, QC4, QC5, QC6, QC7],
          view: [],
          links: { github: "", site: "" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "QC Vax",
          tech: " Form IO, ReactJS, AWS-Amplify, GraphQL, FB Developer, Google Console ",
          desc: "QC Vax is an online vaccination site used by Quezon City citizens to make an appointment thru their mobile or web. They can register their account and after that, they have to fill in a form used by the Health Office. After they filled out they can now make an appointment on time, date, and location that are available and where they are comfortable.",
          img: [QC1, QC2, QC3, QC4, QC5, QC6, QC7],
          view: [],
          links: { github: "", site: "" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Make me up",
          tech: " HTML, CSS, Bootstrap, Node JS, MySQL, Firebase, AWS ",
          desc: "Make me up is an online shop and booking service. This app basically is made for buyers, sellers and other service providers. You can sell your products, order a product, book a service or offer a service.",
          img: [MakeMeUp1, MakeMeUp2, MakeMeUp3, MakeMeUp4, MakeMeUp5],
          view: ["github", "site"],
          links: { github: "", site: "" },
        },
        {
          label: "COLLABORATED",
          title: "Single traveler's profile",
          tech: " React JS, PHP, Laravel, Python Flask, Material-UI, Bootstrap ",
          desc: "Single traveler's profile is a government project of Bureau of Immigration. Main goal of this project is to save and record all the immigrants or travellers who are going inside and outside of the Phillipines. Using the form or scanned passport of a single traveller it will record and save the information. The user can retrieve the information via name or passport number. There is also an embedded map that can track the traveller's location of previous stays.",
          img: [BI1, BI2, BI3, BI4, BI5, BI6, BI7],
          view: ["github"],
          links: { github: "" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Doctor's call app",
          tech: " React JS, AWS Amplify, GraphQL, DynamoDB, Material-UI, CSS ",
          desc: "Doctor's call app is a web application created for the company who are selling their products to a certain doctor. The user can plan their schedule using the app and plot it to actual visit and record the time, important notes, products presented, signature of the doctor and the manager in-charge, etc. It covers also the inventory and records of the item, doctors, hospitals, etc. ",
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
          desc: "All my holiday is a site build for clients who are looking for a destinations to spend. It is also a online booking of flight through airlines. ",
          img: [AllMyHolidays1, AllMyHolidays2],
          view: [],
          links: {},
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "PHP Course",
          tech: " React JS, Ant Design, Gatsby, Material-UI ",
          desc: "PHP Course is a application made for the student/mentees of BoomCamp. The lessons, activities, materials, grades and other stuffs regarding the PHP Course that the mentees and the mentor needed are saved in this web application for them to easily access it whenever and whereever.",
          img: [PHP1, PHP2, PHP3],
          view: [],
          links: {},
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Frontend Boom Camp",
          tech: " React JS, Ant Design, Gatsby, Material-UI ",
          desc: "Frontend BoomCamp is a application made for the student/mentees of BoomCamp. The lessons, activities, grades and other stuffs that the mentees and the mentor needed are saved in this web application for them to easily access it whenever and whereever.",
          img: [Frontend1, Frontend2],
          view: ["site"],
          links: { site: "https://frontend.boom.camp/" },
        },
        {
          label: "PROJECT/COLLABORATED",
          title: "Handraiser",
          tech: " React JS, Node JS, Express JS, PostgreSQL, Socket IO, Material-UI, Ant-design, CSS ",
          desc: "Handraiser is a project created for mentor and student realtime interaction. The student can communicate or ask assistance from mentor through this app. It is also useful for mentor for them to easily collaborate and check for their respective mentees/students.",
          img: [],
          view: ["github"],
          links: { github: "" },
        },
        {
          label: "PERSONAL PROJECT",
          title: "IG Project",
          tech: " React JS, Node JS, Express JS, PostgreSQL, Socket IO, Material-UI, Ant-design, CSS ",
          desc: "IG Project is my personal project. The main goal of this app is to clone the existing successfull Instagram UI and functions using the React JS and Node JS and intergrating the chat app by using the socket IO. I just made this project to practice my skills and experience using the technologies and for portfolio purposes. ",
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
