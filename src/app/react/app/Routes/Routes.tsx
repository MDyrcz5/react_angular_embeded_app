import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Layout from "../components/Layout";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Layout>
            <Switch>
              <Route exact path="/react" component={MainPage} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
