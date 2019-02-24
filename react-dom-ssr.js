import ReactDOMServer from "react-dom/server"
import React from "react"
import express from "express"
import Hello from "./hello.jsx"
import fs from "fs"
import path from "path"

const app = express()

app.get("/app.bundle.js", function(req, res) {
  res.sendFile(path.resolve("app.bundle.js"))
})

// static
app.get("/hello/:name", function(req, res) {
  return res.send("<div>hello " + req.params.name + "</div>")
})

// ssr
app.get("/hello-ssr/:name", function(req, res) {
  return res.send(ReactDOM.renderToString(<Hello name={req.params.name} />))
})

app.get("/hello-ssr-hydrate/:name", function(req, res) {
  // 原始生成
  const reactString = ReactDOMServer.renderToString(
    <Hello name={req.params.name} />
  )

  // 将页面中主要的部分替换
  let content = fs.readFileSync("./index.html", "utf8")

  content = content.replace("{{app}}", reactString)
  // 属性复制到脚本标签中
  content = content.replace(
    "{{props}}",
    JSON.stringify({ name: req.params.name })
  )

  return res.send(content)
})

app.listen(3000)
