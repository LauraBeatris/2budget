import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./styles";

// Creating the header component to link between pages using NavLink components
const Header = () => (
  <div className="navbar-wrapper">
    <HeaderStyled className="header">
      <div className="navbar-1">
        <h1 className="logo">
          <span>2</span>Budget
        </h1>
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
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
        <NavLink className="logout" exact to="/" activeClassName="is-active">
          LogOut
        </NavLink>
      </div>
    </HeaderStyled>
  </div>
);

export default Header;
