import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../NavMenu';
import Main from '../Main';
import Registration from '../Registration';
import PreloaderMain from '../PreloaderMain';
import RoleSelectorPage from '../RoleSelectorPage';
import { Route, Switch } from 'react-router-dom';
import { register, login } from '../../store/actionCreators/tokenActionCreators';
import { getUserInfo, setUserInfo, changeRole } from '../../store/actionCreators/usersActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        isLoad: state.token.loaded && state.user.loaded,
        token: state.token.value,
        isReg: !!state.token.value,
        role: state.user.value.role,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        register: (email, password) => dispatch(register(email, password)),
        getUserInfo: () => dispatch(getUserInfo()),
        setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
        changeRole: () => dispatch(changeRole()),
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isReg: false,
            role: '',
            token: '',
        };
    }

    handleChangeRole = (role) => {
        console.log(role);
        this.props.setUserInfo({is_merchant: role === 'seller',});
    };

    componentDidMount() {
        this.props.getUserInfo();
    }

    handleAuth = (email, password, isLogin) => {
        if (isLogin) {
            this.props.login(email, password);
        } else {
            this.props.register(email, password);
            this.props.changeRole();
        }
    };

    render() {
        const { isLoad, isReg, role } = this.props;
        console.log(this.props);
        return (
            <>
                {isLoad && (
                    <BrowserRouter>
                        {role && isReg && <Main role={role}></Main>}
                        {role && isReg && (
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="home"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/favorites"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="favorites"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/add"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="add"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/cart"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="cart"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/orders"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="orders"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/personalArea"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="personalArea"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/my-products"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="my-products"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="home"
                                        ></NavMenu>
                                    )}
                                />
                            </Switch>
                        )}
                        {isReg && !role && (
                            <RoleSelectorPage
                                handleChangeRole={this.handleChangeRole}
                            ></RoleSelectorPage>
                        )}
                        {!isReg && (
                            <Registration
                                handleAuth={this.handleAuth}
                            ></Registration>
                        )}
                    </BrowserRouter>
                )}
                {!isLoad && <PreloaderMain></PreloaderMain>}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);