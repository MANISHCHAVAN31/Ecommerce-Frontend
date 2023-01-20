import React from "react";
import { Link, useNavigate } from "react-router-dom";
import customTheme from "../theme/root";
import { signout, isAuthenticated } from "../auth/helper";

const Menu = (location) => {
  const navigate = useNavigate();
  // current tab ui
  const currentTab = (location, path) => {
    if (location.location.pathname === path) {
      return { color: "#000", backgroundColor: customTheme.Green };
    } else {
      return { color: "#fff" };
    }
  };

  return (
    <div>
      <ul
        className="nav nav-tabs py-2 ps-3"
        style={{
          borderBottom: "1px solid",
          borderBottomColor: customTheme.Green,
        }}
      >
        <li className="nav-item">
          <Link style={currentTab(location, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(location, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(location, "/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(location, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            Admin Dashboard
          </Link>
        </li>

        {!isAuthenticated() && (
          <React.Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(location, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(location, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </React.Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link"
              style={currentTab(location, "/signout")}
              onClick={() => {
                signout(() => {
                  navigate("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
