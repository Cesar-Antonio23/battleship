import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
