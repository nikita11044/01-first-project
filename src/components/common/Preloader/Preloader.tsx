import preloader from "./Preloader.module.css";
import React from "react";
import {Spin} from "antd";

const Preloader: React.FC = () => {
    return <div className="spin-container"><Spin size="large" /></div>
    // return <div className={preloader.ldsRing}>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    // </div>
}

export default Preloader