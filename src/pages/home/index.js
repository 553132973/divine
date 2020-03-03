import React, { Component } from "react";
import css from "./index.less";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      console.log(css)
    return (
      <div>
        <p className={css.home}>ddddddd</p>
      </div>
    );
  }
}

export default index;
