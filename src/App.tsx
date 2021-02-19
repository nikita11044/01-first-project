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
import {
    AddPostActionType,
    RootStateType,
    SendMessageActionType,
    UpdateNewMessageBodyActionType,
    UpdateTextActionType
} from "./redux/state";

export type AppType = {
    state: RootStateType
    dispatch: (action: AddPostActionType | UpdateTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType) => void
}

const App: React.FC<AppType> = ({state, dispatch}) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}
                                                                  newPostText={state.profilePage.newPostText}
                                                                  dispatch={dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                  messages={state.dialogsPage.messages}
                                                                  newMessageBody={state.dialogsPage.newMessageBody}
                                                                  dispatch={dispatch}/>}/>
                </div>
            </div>
    );
}

export default App;
