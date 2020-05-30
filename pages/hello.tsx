// 怎么实现next.js的按文件目录加载呢
import React from "react"

export interface HelloProps {
  name: string
}

const HelloPage: React.SFC<HelloProps> & SsrPage<HelloProps> = props => {
  return <div onClick={() => console.log(props.name)}>{props.name}</div>
}

HelloPage.getInitialProps = ({ req, res }) => {
  return { name: req.params.name }
}

export default HelloPage
