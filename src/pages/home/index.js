import React, { Component } from "react";
import eight from "../../images/2.jpg";
import { Link } from "react-router-dom";
import "./index.less";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="demo">
        <div className="top">
          <div className="eight">
            <img src={eight} className="eightImg" alt="八卦图" />
          </div>
          <div className="title">
            <Link to="/divine" className="explain">
              同声相应，同气相求
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
