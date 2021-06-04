import React from 'react';
import './App.scss';
import './components/Header/Header.module.css'
import './components/Navbar/Navbar.module.css'
import './components/Profile/Profile.module.css'
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp, RequestStatusType} from "./redux/app-reducer";
import {getAppStatus} from "./redux/selectors/app-selectors";
import { Login } from './components/Login/Login';
import {withSuspense} from "./hoc/withSuspense";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";


type MapStateToPropsType = {
    appStatus: RequestStatusType
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.appStatus === 'loading') {
            return <Preloader/>
        }
        debugger
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        appStatus: getAppStatus(state)
    }
}

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp}))(App)

let SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SocialNetworkApp