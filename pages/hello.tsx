// 怎么实现next.js的按文件目录加载呢
import React from "react";
import { Link } from "react-router-dom";

export interface HelloProps {
  name?: string;
}

const Hello: React.SFC<HelloProps> & SsrPage<HelloProps> = (props) => {
  return (
    <>
      <div onClick={() => console.log(props.name)}>{props.name}</div>;
      <Link to="/goodbye">goodbye</Link>
    </>
  );
};

Hello.getInitialProps = ({ req, res }) => {
  return { name: req.params.name };
};

export default Hello;
