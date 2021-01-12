import React, { Component } from "react";
import YangYao from '../../../components/yao/yang'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
        <p>乾卦</p>
        <YangYao/>
        <YangYao/>
        <YangYao/>
        <YangYao/>
        <YangYao/>
        <YangYao/>
      </div>
    );
  }
}

export default index;
