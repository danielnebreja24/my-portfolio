import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      year: "",
    };
  }

  componentDidMount() {
    var date = new Date();
    var year = date.getFullYear();

    this.setState({ year: year });
    // alert(year);
  }

  render() {
    return (
      <div className="mainFoot-div">
        Daniel Nebreja &copy; {this.state.year}
      </div>
    );
  }
}
