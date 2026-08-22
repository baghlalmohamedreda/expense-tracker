import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
          Expense Tracker
        </div>

        <div className="nav-links">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/transactions">Transactions</NavLink>
          <NavLink to="/analytics">Analytics</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </div>

      </nav>
    </header>
  );
}

export default Header;