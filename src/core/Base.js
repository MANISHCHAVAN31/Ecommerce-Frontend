import React from "react";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

const Base = ({
    title = "Ecommerce",
    description = "Description",
    className = "p-4",
    children,
}) => {
    const location = useLocation();
    return (
        <div>
            <Menu location={location} />
            <div className="container-fluid">
                <div className="jumbotron text-center">
                    <div className="display-4">{title}</div>
                    <div className="lead">{description}</div>
                </div>
                <div className={className}>{children}</div>
            </div>

            <footer className="footer mt-auto py-3">
                <div className="container-fluid bg-success text-dark py-4 text-center">
                    <h5>
                        If you got any questions, feel free to reach out our{" "}
                        <a href="#" className="text-dark">
                            support center
                        </a>
                    </h5>
                </div>
            </footer>
        </div>
    );
};

export default Base;
