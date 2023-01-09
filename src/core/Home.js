import React from "react";
import { API } from "../backend";
import Base from "./Base";

const Home = () => {
    console.log("API: ", API);
    return (
        <Base title="Home">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
            </div>
        </Base>
    );
};

export default Home;
