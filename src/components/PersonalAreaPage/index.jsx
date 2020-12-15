import React, { Component } from 'react';
import Profile from '../Profile';
import Header from '../Header'
import SettingsList from '../SettingsList'

export default class PersonalAreaPage extends Component {
    render() {
        return (
            <>
                <Header title="Аккаунт"></Header>
                <Profile></Profile>
                <SettingsList></SettingsList>
            </>
        );
    }
}
