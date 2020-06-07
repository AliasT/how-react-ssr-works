// 怎么实现next.js的按文件目录加载呢
import React from "react";
import { Link } from "react-router-dom";

const GoodBye: React.SFC<{}> = (props) => {
  return (
    <>
      <div>GoodBye</div>
      <Link to="/hello">Hello</Link>
    </>
  );
};

export default GoodBye;
