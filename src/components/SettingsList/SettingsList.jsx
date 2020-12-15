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

import { changeRole } from '../../store/actionCreators/usersActionCreators';
import { removeToken } from '../../store/actionCreators/tokenActionCreators';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    changeRole: () => dispatch(changeRole()),
    removeToken: () => dispatch(removeToken()),
});


class SettingsList extends Component {
    render() {
        const { changeRole, removeToken } = this.props;
        return (
            <ul className="settings__list">
                <Link to="/personalArea/settings">
                    <SettingsItem
                        img={locationImg}
                        title="Локация"
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
                {/*<Link to="/personalArea/settings">*/}
                {/*    <SettingsItem*/}
                {/*        img={emailImg}*/}
                {/*        title="Email"*/}
                {/*        text="jenkinstix@gmail.com"*/}
                {/*    ></SettingsItem>*/}
                {/*</Link>*/}
                <Link to="/personalArea/">
                    <SettingsItem
                        img={padlockImg}
                        title="Сменить пароль"
                        text="*******"
                    ></SettingsItem>
                </Link>
                <Link to="/">
                    <SettingsItem
                        img={exchangeImg}
                        title="Сменить роль"
                        text="Стать продавцом"
                        handler={() => changeRole()}
                    ></SettingsItem>
                </Link>
                <Link to="/">
                    <SettingsItem
                        img={doorImg}
                        title="Выйти"
                        text="Всего хорошего"
                        handler={() => removeToken()}
                    ></SettingsItem>
                </Link>
            </ul>
        );
    }
}

export default connect(null, mapDispatchToProps)(SettingsList);