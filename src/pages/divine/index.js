import React, { Component } from "react";
import { Link } from "react-router-dom";
import yang from "../../images/yang.png";
import ying from "../../images/ying.png";
import "./index.less";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCopperCash: "",
      centerCopperCash: "",
      rightCopperCash: "",
      gua: [],
      tongQian: [0, 1, 2]
    };
  }
  start = () => {
    const { gua } = this.state;
    let left = Math.ceil(Math.random() * 10) - 1;
    let center = Math.ceil(Math.random() * 10) - 1;
    let right = Math.ceil(Math.random() * 10) - 1;
    if (gua.length < 6) {
      let num = [left, center, right];
      gua.push(this.parityNumber(num));
      this.setState({
        leftCopperCash: left,
        centerCopperCash: center,
        rightCopperCash: right,
        gua: gua
      });
    } else {
      alert("卦象生成");
      console.log(gua);
    }
  };

  parityNumber = num => {
    let num2 = [];
    num.filter((e, i, arr) => {
      if (e % 2 === 0) {
        num2.push(e);
      }
    });
    switch (num2.length) {
      case 0:
        return "老阳"; //老阳
      case 1:
        return "少阳"; //少阳
      case 2:
        return "少阴"; //少阴
      case 3:
        return "老阴"; //老阴
      default:
        break;
    }
  };
  render() {
    const {
      leftCopperCash,
      centerCopperCash,
      rightCopperCash,
      gua
    } = this.state;
    return (
      <div className="divine">
        <div className="topEmpty" />
        <div className="start">
          <div>
            <button onClick={this.start}>起卦</button>
          </div>
          <p>起卦时间最好为白天，诚心诚意，心中默念要占卦的事情，点击左侧按钮六次，才能生成卦象</p>
        </div>
        <div className={"yaoOrder"}>
          <p>
            第{`${gua.length}`}爻
          </p>
        </div>
        <div className="elephant">
          <img src={leftCopperCash % 2 === 0 ? ying : yang} alt="铜钱" />
          <img src={centerCopperCash % 2 === 0 ? ying : yang} alt="铜钱" />
          <img src={rightCopperCash % 2 === 0 ? ying : yang} alt="铜钱" />
        </div>
        <div className="sixYao">
          <div className="hexagram">
            <div className={"benGua"}>
              <p>本卦</p>
            </div>
            <div className={"yao"}>
              {gua[5] === "老阳" || gua[5] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[4] === "老阳" || gua[4] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[3] === "老阳" || gua[3] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[2] === "老阳" || gua[2] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[1] === "老阳" || gua[1] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[0] === "老阳" || gua[0] === "少阳" ? <YangYao /> : <YingYao />}
            </div>
            <div className={"benCi"}>
              <Link to="/list">易</Link>
            </div>
          </div>
          <div className="change">
            <div className={"bianGua"}>
              <p>变卦</p>
            </div>
            <div className={"yao"}>
              {gua[5] === "老阴" || gua[5] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[4] === "老阴" || gua[4] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[3] === "老阴" || gua[3] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[2] === "老阴" || gua[2] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[1] === "老阴" || gua[1] === "少阳" ? <YangYao /> : <YingYao />}
              {gua[0] === "老阴" || gua[0] === "少阳" ? <YangYao /> : <YingYao />}
            </div>
            <div className={"bianCi"}>
              <Link to="/list">经</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
function YangYao(params) {
  return <div className={"yangYao"} />;
}
function YingYao(params) {
  return (
    <div className={"yingYao"}>
      <div className={"left"} />
      <div className={"right"} />
    </div>
  );
}
