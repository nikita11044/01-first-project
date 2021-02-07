import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, RootStateType, subscribe, updateText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateText={updateText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state)

subscribe(renderEntireTree);

reportWebVitals();
