import React, { Component } from 'react';
import Header from '../Header';
import SettingsLocation from '../SettingsLocation';
import './style.scss';

export default class SettingsPage extends Component {
    handleBack = () => {
        window.history.back();
    };
    render() {
        const { type } = this.props;
        let title = '';
        switch (type) {
            case 'location': // if (x === 'value1')
                title = 'Адрес';
                break;
            default:
                title = 'Настройки';
                break;
        }
        return (
            <>
                <Header button={this.handleBack} title={title}></Header>
                {type === 'location' && <SettingsLocation></SettingsLocation>}
            </>
        );
    }
}
