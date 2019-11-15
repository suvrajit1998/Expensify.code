import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Examlemainpage from "../components/examlemainpage";
import Editexpenspage from "../components/Editexoenspage";
import examlecreatpage from "../components/examlecreatpage";
import Helpexpensepage from "../components/helpexpensepage";
import notfoundpage from "../components/notfound";
import Header from "../components/header";

const joy = () => (
  <div>
    <p>Hello i am joy</p>
  </div>
);

const Approuter = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Examlemainpage} exact={true} />
        <Route path="/creat" component={examlecreatpage} />
        <Route path="/help" component={Helpexpensepage} />
        <Route path="/edit/:id" component={Editexpenspage} exact={true} />
        <Route path="/joy" component={joy} />
        <Route component={notfoundpage} />
      </Switch>
    </div>
  </HashRouter>
);

export default Approuter;
