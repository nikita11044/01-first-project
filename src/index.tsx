import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import SocialNetworkApp from "./App";
import SocialNetworkAppAntd from "./AppAntd";

ReactDOM.render(
    <React.StrictMode>
        <SocialNetworkAppAntd />
    </React.StrictMode>,
    document.getElementById('root')
);

