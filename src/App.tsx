import React from 'react';
import './App.css';
import './components/Header/Header.module.css'
import './components/Navbar/Navbar.module.css'
import './components/Profile/Profile.module.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionTypes} from "./redux/store";
import {AppStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type AppType = {
    state: AppStateType
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<AppType> = ({state, dispatch}) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={state.profileReducer.posts}
                                                                  newPostText={state.profileReducer.newPostText}
                                                                  dispatch={dispatch}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer dialogs={state.dialogReducer.dialogs}
                                                                  messages={state.dialogReducer.messages}
                                                                  newMessageBody={state.dialogReducer.newMessageBody}
                                                                  dispatch={dispatch}/>}/>
                </div>
            </div>
    );
}

export default App;
