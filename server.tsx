import ReactDOMServer from "react-dom/server";
import React from "react";
import express from "express";
import App, { ServerApp } from "./pages/app";
import path from "path";

const app = express();

app.set("view engine", "pug");

app.get("/app.bundle.js", function (req, res) {
  res.sendFile(path.resolve("app.bundle.js"));
});

app.get("/favicon.ico", (req, res) => {
  res.send("");
});

app.get("/:name", function (req, res) {
  // mock
  const name = req.params.name;
  const Page = require("./pages/" + name).default;

  // skip this
  const props = Page.getInitialProps?.({ req, res }) ?? {};
  // 如果是预编译的话，会在这一步生成？
  res.render("app", {
    props: JSON.stringify(props),
    ssrString: ReactDOMServer.renderToString(
      <ServerApp pageProps={props} location={req.url}></ServerApp>
    ),
  });
});

app.listen(3000);
