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

import { Link } from 'react-router-dom';

export default class SettingsList extends Component {
    render() {
        return (
            <ul className="settings__list">
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={nameImg}
                        title="Имя"
                        text="Nikita"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={nameImg}
                        title="Фамилия"
                        text="Koltashov"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={userImg}
                        title="Аватар"
                        text="Сменить аватар"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={locationImg}
                        title="Location"
                        text="Yekaterinburg, Mira, 19"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={telephoneImg}
                        title="Телефон"
                        text="8 (951) 270-00-00"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={emailImg}
                        title="Email"
                        text="jenkinstix@gmail.com"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={padlockImg}
                        title="Сменить пароль"
                        text="*******"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={exchangeImg}
                        title="Сменить роль"
                        text="Стать продавцом"
                    ></SettingsItem>
                </Link>
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={doorImg}
                        title="Log out"
                        text="Всего хорошего"
                        handler={() => token.remove()}
                    ></SettingsItem>
                </Link>
            </ul>
        );
    }
}
