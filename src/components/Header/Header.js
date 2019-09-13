import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled, Hamburger } from "./styles";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

import { Link } from "react-router-dom";

// Creating the header component to link between pages using NavLink components
export const Header = ({ startLogout }) => (
  <div className="navbar-wrapper">
    <HeaderStyled className="header">
      <div className="navbar-1">
        <Link id="logo-container" to="/dashboard">
          <h1 className="logo">
            <span>2</span>Budget
          </h1>
        </Link>
        <nav>
          <NavLink exact to="/dashboard" activeClassName="is-active">
            Dashboard
          </NavLink>
          <NavLink to="/create" activeClassName="is-active">
            Create Expense
          </NavLink>
        </nav>
      </div>

      <div className="navbar-2">
        <Hamburger>
          <h1 className="logo">
            <span>2</span>Budget
          </h1>
          <input id="burger" type="checkbox" />
          <label htmlFor="burger">
            <span />
            <span />
            <span />
          </label>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/dashboard" activeClassName="is-active">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/create" activeClassName="is-active">
                  Create Expense
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={startLogout}
                  exact
                  to="/"
                  activeClassName="is-active"
                >
                  LogOut
                </NavLink>
              </li>
            </ul>
          </nav>
        </Hamburger>
        <NavLink
          onClick={startLogout}
          className="logout"
          exact
          to="/"
          activeClassName="is-active"
        >
          LogOut
        </NavLink>
      </div>
    </HeaderStyled>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
