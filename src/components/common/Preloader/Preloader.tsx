import preloader from "./Preloader.module.css";
import React from "react";

const Preloader: React.FC = () => {
    return <div className={preloader.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader