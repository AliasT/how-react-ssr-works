import ReactDOMServer from "react-dom/server"
import React from "react"
import express from "express"
import Hello from "./pages/hello"
import path from "path"

const app = express()

app.set("view engine", "pug")

app.get("/app.bundle.js", function (req, res) {
  res.sendFile(path.resolve("app.bundle.js"))
})

app.get("/hello-ssr-hydrate/:name", function (req, res) {
  const props = Hello.getInitialProps({ req, res })
  res.render("hello", {
    props: JSON.stringify(props),
    ssrString: ReactDOMServer.renderToString(
      <Hello {...props} />
    )
  })
})

app.listen(3000)
