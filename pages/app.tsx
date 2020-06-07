// 怎么实现next.js的按文件目录加载呢
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  StaticRouter,
  BrowserRouter,
} from "react-router-dom";
import GoodBye from "./goodbye";
import Hello from "./hello";

// TODO: 不是放这里的。
export interface AppProps {
  // name: string;
  pageProps: any;
  location?: string;
}

const Main = (props: any) => {
  return (
    <Switch>
      <Route path="/goodbye">
        <GoodBye {...props} />
      </Route>
      <Route path="/hello">
        <Hello {...props} />
      </Route>
    </Switch>
  );
};

const App: React.SFC<AppProps> & SsrPage<AppProps> = ({ pageProps }) => {
  return (
    <BrowserRouter>
      <Main {...pageProps} />
    </BrowserRouter>
  );
};

const ServerApp: React.SFC<AppProps> & SsrPage<AppProps> = ({
  pageProps,
  location,
}) => {
  return (
    // https://reacttraining.com/react-router/web/api/StaticRouter
    <StaticRouter location={location}>
      <Main {...pageProps} />
    </StaticRouter>
  );
};

// App.getInitialProps = ({ req, res }) => {
//   return { name: req.params.name };
// };
export { ServerApp };
export default App;
