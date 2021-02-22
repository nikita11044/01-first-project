import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {AppStateType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let renderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
                </StoreContext.Provider>
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
