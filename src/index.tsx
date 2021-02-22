import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {AppStateType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let renderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});

reportWebVitals();
