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
        <div>
          <p>乾</p>
        </div>
        <div>
          <p>坎</p>
        </div>
        <div>
          <p>艮</p>
        </div>
        <div>
          <p>震</p>
        </div>
        <div>
          <p>巽</p>
        </div>
        <div>
          <p>离</p>
        </div>
        <div>
          <p>坤</p>
        </div>
        <div>
          <p>兑</p>
        </div>
      </div>
    );
  }
}

export default index;
