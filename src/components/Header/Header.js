import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.jpg";
// import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        {loggedInUser.name ? (
          <button onClick={() => setLoggedInUser({})}>Sign Out</button>
        ) : (
          <button onClick={() => history.push("/login")}>Sign In</button>
        )}
        <p style={{ color: "white" }}>Email: {loggedInUser.name}</p>
      </nav>
    </div>
  );
};

export default Header;
