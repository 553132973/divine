import React, { Component } from "react";
import "./index.less";
import store from "../../store/solarTerms/reducer";
import { saveFormData } from "../../store/solarTerms/action";
import { Draw } from "../../config/getData";
import Title from './titleTime';
import Gua from './gua'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "乾", sky: "" }]
    };
  }
  componentDidMount() {
    const day = Draw();
    console.log(day);
  }
  // getData = () => {};
  render() {
    const day = Draw();
    return (
      <div className={"list"}>
        <Title day={day}/>
        <Gua/>
      </div>
    );
  }
}

export default index;
