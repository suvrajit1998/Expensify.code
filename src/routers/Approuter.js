import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Examlemainpage from "../components/examlemainpage";
import Editexpenspage from "../components/Editexoenspage";
import examlecreatpage from "../components/examlecreatpage";
import Helpexpensepage from "../components/helpexpensepage";
import notfoundpage from "../components/notfound";
import Header from "../components/header";

const Approuter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Examlemainpage} exact={true} />
        <Route path="/creat" component={examlecreatpage} />
        <Route path="/help" component={Helpexpensepage} />
        <Route path="/edit" component={Editexpenspage} />
        <Route component={notfoundpage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Approuter;
