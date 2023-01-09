import React from "react";
import { Link } from "react-router-dom";

const Menu = (location) => {
    // current tab ui
    const currentTab = (location, path) => {
        if (location.location.pathname === path) {
            return { color: "red" };
        } else {
            return { color: "#fff" };
        }
    };

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        style={currentTab(location, "/")}
                        className="nav-link"
                        to="/"
                    >
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
                        to="/dashboard"
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
                <li className="nav-item">
                    <Link
                        style={currentTab(location, "/signout")}
                        className="nav-link"
                        to="/signout"
                    >
                        Signout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
