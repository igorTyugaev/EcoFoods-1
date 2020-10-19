import React, { Component } from 'react';
import './style.scss';
import arrow from './Arrow.svg'


export default class SettingsList extends Component {
    render() {
        const {img,title,text} = this.props
        return (
            <li className="settings-item">
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
