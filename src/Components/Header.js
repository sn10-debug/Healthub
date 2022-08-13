import React from "react";

import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor_info: JSON.parse(sessionStorage.getItem("doctor-details")),
    };
  }

  render() {
    return (
      <header>
        <div className="header__header-links">
          <NavLink
            to="/"
            className="header__header-link"
            activeClassName="active-header"
            exact={true}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/prescription"
            className="header__header-link"
            activeClassName="active-header"
          >
            Prescription
          </NavLink>
          <NavLink
            to="/appointments"
            className="header__header-link"
            activeClassName="active-header"
          >
            Appointments
          </NavLink>
          <NavLink
            to="/profile"
            className="header__header-link"
            activeClassName="active-header"
          >
            Profile
          </NavLink>
        </div>
        <div className="header__action-buttons">
          <p>Welcome {this.state.doctor_info.name}</p>
        </div>
      </header>
    );
  }
}
export default Header;
