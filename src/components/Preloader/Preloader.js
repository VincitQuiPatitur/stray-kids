import React from "react";
import "./Preloader.scss";
function Preloader() {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Preloader;