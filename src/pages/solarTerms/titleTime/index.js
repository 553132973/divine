import React, { Component } from "react";
import "../index.less";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {day} = this.props
    return (
      <div className={"outline"}>
        <p>
          {day.time}
        </p>
      </div>
    );
  }
}

export default index;
