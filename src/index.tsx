import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree);

reportWebVitals();
