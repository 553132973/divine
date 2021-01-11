import React, { Component } from "react";
import "./index.less";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.eight();
  }

  eight = () => {
    var canvas = document.getElementById("c0");
    var ctx = canvas.getContext("2d"); //1.绘制最外边的大圆
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 360 * Math.PI / 180);
    ctx.closePath();
    ctx.stroke();
    //2.绘制左边的实心半圆

    ctx.beginPath();
    ctx.arc(200, 200, 100, -90 * Math.PI / 180, 90 * Math.PI / 180, true);
    //true是逆时针，false默认值---顺时针
    ctx.closePath();
    ctx.fill();
    //3.绘制黑色圆
    ctx.beginPath();

    ctx.arc(200, 250, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    //4.上面的白色圆
    ctx.beginPath();
    ctx.arc(200, 150, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "#fff";
    ctx.fill();
    //5.绘制一黑一白圆形
    ctx.beginPath();
    ctx.arc(200, 250, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill(); //黑色圆
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(200, 150, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  };

  divine = () => {
    console.log(this.pro);
  };

  render() {
    return (
      <div className="demo">
        <div className="top">
          <canvas id="c0" width="400" height="400" />
        </div>
        <div className="title">
          <p onClick={this.divine}>同声相应，同气相求</p>
        </div>
      </div>
    );
  }
}

export default index;
