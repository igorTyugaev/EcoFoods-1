import React, { Component } from 'react';
import './style.scss';

export default class Avatar extends Component {
    render() {
        const avatar = undefined;
        return (
            <div className="avatar">
                {avatar ? (
                    <img src="" alt="" className="" />
                ) : (
                    <div className="avatar__inner">
                        <span className="">NK</span>
                    </div>
                )}
            </div>
        );
    }
}
