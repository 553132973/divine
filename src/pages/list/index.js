import React, { Component } from "react";
import "./index.less";
// import store from '../../store/list/reducer';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(store.initValues)
  }
  
  render() {
    return (
      <div className={"list"}>
          <p>水水水水</p>
      </div>
    );
  }
}

export default index;
