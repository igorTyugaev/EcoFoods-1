import React, { Component } from 'react';
import './style.scss';
import arrow from './Arrow.svg'


export default class SettingsItem extends Component {
    render() {
        const {img,title,text,handler} = this.props
        return (
            <li className="settings-item" onClick={handler}>
                <div className="settings-item__block">
                    <img src={img} alt="" className="settings-item__img" />
                    <h3>{title}</h3>
                </div>
                <div className="settings-item__block">
                    <span>{text}</span>
                    <img src={arrow} alt="" className="settings-item__arrow"/>
                 </div>
           </li>
        );
    }
}
