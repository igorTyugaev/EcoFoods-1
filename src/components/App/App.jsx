import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../NavMenu';
import Main from '../Main';
import Registration from '../Registration';
import PreloaderMain from '../PreloaderMain';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isReg: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoad: true,
            });
        }, 1000);
    }
    handleAuth = (email, password) => {
        setTimeout(() => {
            this.setState({
                isReg: true,
            });
        }, 300);
    };

    render() {
        const { isLoad, isReg } = this.state;
        return (
            <>
                {isLoad && (
                    <BrowserRouter>
                        {isReg && <Main></Main>}
                        {isReg && <NavMenu></NavMenu>}
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
