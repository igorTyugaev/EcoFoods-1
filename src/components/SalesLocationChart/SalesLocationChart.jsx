import React, { Component } from 'react';
import './style.scss';

export default class SalesLocationChart extends Component {
    render() {
        const { statLocation } = this.props;
        return (
            <div className="sales-location-chart">
                <h2 className="sales-location-chart__title">Гео</h2>
                <div className="sales-location-chart__stat-list">
                    {statLocation.map((item) => (
                        <div className="stat-item" key={item.title}>
                            <div className="stat-item__row">
                                <h3>{item.title}</h3>
                                <span className="stat-item__percent">
                                    {item.value + '%'}
                                </span>
                            </div>
                            <div className="stat-item__chart">
                                <div
                                    style={{ width: item.value + '%' }}
                                    className="stat-item__chart-inner"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
