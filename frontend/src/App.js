import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Routes from "./routes";

function App() {
  return (
    <Layout>
      <Switch>
        {Routes.map((route, i) => {
          return (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Layout>
  );
}

export default App;
