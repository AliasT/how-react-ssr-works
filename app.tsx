// 浏览器代码
// 每一个page其实对应一个app ？，但是均为动态生成，可以理解为webpack multi entry
// 通过代码动态构建可以生成。
import React from "react"
import ReactDOM from "react-dom"
import Hello, { HelloProps } from "./pages/hello"

const container = document.getElementById("container")
const props = window.__props as HelloProps

ReactDOM.hydrate(<Hello  {...props} />, container)
