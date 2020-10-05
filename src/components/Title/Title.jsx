import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {
    render() {
        const { h2, aText, aHref } = this.props;
        return (
            <div className="title">
                {h2 && <h2>{h2}</h2>}
                {aText && <a href={aHref}>{aText}</a>}
            </div>
        );
    }
}
