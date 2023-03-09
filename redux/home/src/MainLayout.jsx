import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";

import {Header} from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={Header} />
            {/* <Route path="/product/:id" component={PDPContent} />
            <Route path="/cart" component={CartContent} /> */}
          </Switch>
          </div>
      </div>
    </Router>
  );
}