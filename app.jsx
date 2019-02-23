// 浏览器代码

import React from "react"
import ReactDOM from "react-dom"
import Hello from "./hello.jsx"

const container = document.getElementById("container")

const props = window.__props

ReactDOM.hydrate(<Hello name={props.name} />, container, () => {
  console.log("匹配")
})
