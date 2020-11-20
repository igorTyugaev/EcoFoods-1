import React, { Component } from 'react';
import SettingsItem from '../SettingsItem';
import './style.scss';
import token from '../../utils/token';

import locationImg from './location.svg';
import doorImg from './door.svg';
import nameImg from './name.svg';
import userImg from './user.svg';
import telephoneImg from './telephone.svg';
import emailImg from './email.svg';
import padlockImg from './padlock.svg';
import exchangeImg from './exchange.svg';

export default class SettingsList extends Component {
    render() {
        return (
            <ul className="settings__list">
                <SettingsItem
                    img={nameImg}
                    title="Имя"
                    text="Nikita"
                ></SettingsItem>
                <SettingsItem
                    img={nameImg}
                    title="Фамилия"
                    text="Koltashov"
                ></SettingsItem>
                <SettingsItem
                    img={userImg}
                    title="Аватар"
                    text="Сменить аватар"
                ></SettingsItem>
                <SettingsItem
                    img={locationImg}
                    title="Location"
                    text="Yekaterinburg, Mira, 19"
                ></SettingsItem>
                <SettingsItem
                    img={telephoneImg}
                    title="Телефон"
                    text="8 (951) 270-00-00"
                ></SettingsItem>
                <SettingsItem
                    img={emailImg}
                    title="Email"
                    text="jenkinstix@gmail.com"
                ></SettingsItem>
                <SettingsItem
                    img={padlockImg}
                    title="Сменить пароль"
                    text="*******"
                ></SettingsItem>
                <SettingsItem
                    img={exchangeImg}
                    title="Сменить роль"
                    text="Стать продавцом"
                ></SettingsItem>
                <SettingsItem
                    img={doorImg}
                    title="Log out"
                    text="Всего хорошего"
                    handler={() => token.remove()}
                ></SettingsItem>
            </ul>
        );
    }
}
