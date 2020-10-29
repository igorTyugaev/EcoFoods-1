import React, { Component } from 'react';
import './style.scss';

export default class TableBlock extends Component {
    render() {
        const { title, staticItems, dynamicItems } = this.props;
        let listItem = staticItems.map((item, index) => {
            return [item, dynamicItems[index]];
        });
        return (
            <section className="table-block">
                <h2 className="table-block__title">{title}</h2>
                <ul className="table-block__list">
                    {listItem.map((item) => (
                        <li
                            key={item[0] + item[1]}
                            className="table-block__list-item"
                        >
                            <span className="table-block__static">
                                {item[0]}
                            </span>
                            <span className="table-block__dynamic">
                                {item[1]}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
