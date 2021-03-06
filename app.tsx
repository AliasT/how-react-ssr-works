// 浏览器代码
// 每一个page其实对应一个app ？，但是均为动态生成，可以理解为webpack multi entry
// 通过代码动态构建可以生成。
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app";

const container = document.getElementById("container");
const props = window.__props;
ReactDOM.hydrate(<App pageProps={props} />, container);
