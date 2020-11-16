import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import './style.scss';

export default class SalesCategoryChart extends Component {
    render() {
        return (
            <div className="sales-category-chart">
                <h2 className="sales-category-chart__title">
                    Категории продукта
                </h2>
                <Chart
                    width={'100%'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Категоря', 'Процент'], //диман, этот массив нужно править
                        ['Хлеб', 40],
                        ['Молоко', 15],
                        ['Овощи', 25],
                        ['Мед', 20],
                    ]}
                    options={{
                        legend: 'none',
                        pieSliceText: 'label',
                        pieStartAngle: 100,
                    }}
                    rootProps={{ 'data-testid': '4' }}
                />
            </div>
        );
    }
}
