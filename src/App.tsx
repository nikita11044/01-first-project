import React from 'react';
import './App.css';
import './components/Header/Header.module.css'
import './components/Navbar/Navbar.module.css'
import './components/Profile/Profile.module.css'
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DataContainerWithUrl from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App: React.FC = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId' render={() => <DataContainerWithUrl />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
    );
}

export default App;
