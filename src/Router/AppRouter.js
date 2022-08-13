import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import Prescription from "../Components/Prescription";
import Appointments from "../Components/Appointments";
import Profile from "../Components/Profile";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/prescription" component={Prescription} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
