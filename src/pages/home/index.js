import React, { Component } from "react";
import eight from "../../images/2.jpg";
import { Link } from "react-router-dom";
import css from "./index.less";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className={css.demo}>
        <div className={css.top}>
          <div className={css.eight}>
            <img src={eight} className={css.eightImg} alt="八卦图" />
          </div>
          <div className={css.title}>
            <Link to="/divine" className={css.explain}>
              同声相应，同气相求
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
