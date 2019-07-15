import React from "react";
import { NavLink } from "react-router-dom";

// Creating the header component to link between pages using NavLink components
const Header = () => (
  <div>
    <header className="header">
      <h1>Budget</h1>
      <nav>
        <NavLink exact to="/dashboard" activeClassName="is-active">
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">
          Create
        </NavLink>

        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </nav>
    </header>
  </div>
);

export default Header;
