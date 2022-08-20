import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="table-navigation">
      <ul>
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? "active-link" : "")}
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/transactions"
          className={(nav) => (nav.isActive ? "active-link" : "")}
        >
          <li>Transactions</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
