import React, { Component } from 'react';

export default class SettingsLocation extends Component {
    render() {
        return (
            <main className="settings-page">
                <h2 className="h2">Город</h2>
                <input type="text" />
                <h2 className="h2">Улица</h2>
                <input type="text" />
                <h2 className="h2">Дом</h2>
                <input type="text" />
                <h2 className="h2">Кв./Офис</h2>
                <input type="text" />
            </main>
        );
    }
}
