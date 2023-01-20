import React from "react";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";
import customTheme from "../theme/root";

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
                    <div className="display-5 mb-2">{title}</div>
                    <div className="lead">{description}</div>
                </div>
                <div className={className}>{children}</div>
            </div>

            <footer
                className="footer mt-auto"
                style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            >
                <div
                    style={{ backgroundColor: customTheme.Green }}
                    className="container-fluid text-dark py-3 text-center"
                >
                    <h5>
                        If you got any questions, feel free to reach out our{" "}
                        <a href="#" className="ps-2 text-dark fw-bold">
                            support center
                        </a>
                    </h5>
                </div>
            </footer>
        </div>
    );
};

export default Base;
