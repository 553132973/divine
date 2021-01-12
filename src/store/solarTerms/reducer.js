import * as home from "./action-type";
let defaultState = {
  orderSum: 1000, //金额
  name: "王八", //姓名
  phoneNo: 139656445454, //手机号
  imgpath: "" //图片地址
};

export const formData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVEFORMDATA:
      return { ...state, ...{ [action.datatype]: action.value } };
    case home.SAVEIMG:
      return { ...state, ...{ imgpath: action.path } };
    case home.CLEARDATA:
      return { ...state, ...defaultState };
    default:
      return state;
  }
};
