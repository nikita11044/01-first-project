import React from 'react';
import './App.scss';
import './components/Header/Header.module.css'
import './components/Navbar/Navbar.module.css'
import './components/Profile/Profile.module.css'
import {HashRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp, RequestStatusType} from "./redux/app-reducer";
import {getAppStatus} from "./redux/selectors/app-selectors";
import {Layout} from "antd";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {withSuspense} from "./hoc/withSuspense";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";


type MapStateToPropsType = {
    appStatus: RequestStatusType
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    state = {
        collapsed: false,
        breakpoint: false
    };

    onCollapse = (collapsed: boolean) => {
        this.setState({ ...this.state, collapsed });
        console.log(this.state)
    };

    onBreakpoint = (breakpoint: boolean) => {
        this.setState({ ...this.state, breakpoint });
        console.log(this.state)
    };

    render() {
        const { collapsed } = this.state;
        if (this.props.appStatus === 'loading') {
            return <Preloader/>
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible breakpoint="lg" onBreakpoint={this.onBreakpoint} collapsedWidth="0" collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Navbar/>
                </Sider>
                <Layout className={`site-layout ${!this.state.collapsed && this.state.breakpoint ? 'blurMode' : ''}`}>
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <HeaderContainer/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ margin: '50px 0', padding: 24, minHeight: 360 }}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                                <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                <Route path='/login' render={() => <Login/>}/>
                                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Social Network ©2021 Created by nikita11044</Footer>
                </Layout>
            </Layout>
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