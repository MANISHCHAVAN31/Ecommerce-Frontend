import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./core/Home";
import AdminDashboard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashBoard";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/signin" exact element={<Signin />} />
                <Route path="/dashboard" exact element={<UserDashboard />} />
                <Route
                    path="/admin/dashboard"
                    exact
                    element={<AdminDashboard />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
