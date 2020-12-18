import React, { Component } from 'react';
import './style.scss';

export default class Avatar extends Component {
    render() {
        const avatar = undefined;
        const {name} = this.props;
        return (
            <div className="avatar">
                {avatar ? (
                    <img src="" alt="" className="" />
                ) : (
                    <div className="avatar__inner">
                        <span className="">{name}</span>
                    </div>
                )}
            </div>
        );
    }
}
