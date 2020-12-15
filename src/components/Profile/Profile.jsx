import React, { Component } from 'react';
import Rating from '../Rating';
import Avatar from '../Avatar';
import './style.scss';

export default class Profile extends Component {
    render() {
        const avatar = undefined;
        return (
            <div className="profile__wrapper">
                <div className="profile">
                    <div className="profile__avatar">
                        <Avatar></Avatar>
                    </div>
                    <div className="profile__desc">
                        <b>Nikita Koltashov</b>
                        <span>jenkinstix@gmail.com</span>
                        {/*<Rating value={4.4}></Rating>*/}
                    </div>
                </div>
            </div>
        );
    }
}
