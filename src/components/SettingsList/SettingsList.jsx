import React, { Component } from 'react';
import SettingsItem from '../SettingsItem'
import './style.scss';

import Group from './Group.svg'
import door from './door.svg'

export default class SettingsList extends Component {
    render() {
        return (
            <ul className="settings__list">
                <SettingsItem img={Group} title='Location' text='Yekaterinburg, Mira, 19'></SettingsItem>
                <SettingsItem img={Group} title='Location' text='Yekaterinburg, Mira, 19'></SettingsItem>
                <SettingsItem img={Group} title='Location' text='Yekaterinburg, Mira, 19'></SettingsItem>
                <SettingsItem img={Group} title='Location' text='Yekaterinburg, Mira, 19'></SettingsItem>
                <SettingsItem img={Group} title='Location' text='Yekaterinburg, Mira, 19'></SettingsItem>
                <SettingsItem img={Group} title='Location' text='Yekaterinburg, Mira, 19'></SettingsItem>
                <SettingsItem img={door} title='Log out' text='Всего хорошего'></SettingsItem>

            </ul>
        );
    }
}
