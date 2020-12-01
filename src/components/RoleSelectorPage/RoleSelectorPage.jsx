import React, { Component } from 'react';
import './style.scss';
import seller from './seller.png';
import buyer from './buyer.png';
export default class RoleSelectorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
        };
    }
    handleClick = (role) => {
        this.setState({
            role,
        });
    };
    render() {
        const { role } = this.state;
        const { handleChangeRole } = this.props;
        return (
            <div className="role-selector">
                <h2>Выберите тип учетной записи</h2>
                <p>
                    Привет! <br />
                    Пожалуйста, выберите роль, чтобы продолжить
                </p>
                <div className="role-selector__selector-block">
                    <div
                        onClick={() => this.handleClick('seller')}
                        className={
                            'role-selector__selector-item ' +
                            (role === 'seller'
                                ? 'role-selector__selector-item_active'
                                : undefined)
                        }
                    >
                        <img
                            src={seller}
                            alt=""
                            className="role-selector__img"
                        />
                        <span>Продавец</span>
                    </div>
                    <div
                        onClick={() => this.handleClick('buyer')}
                        className={
                            'role-selector__selector-item ' +
                            (role === 'buyer'
                                ? 'role-selector__selector-item_active'
                                : undefined)
                        }
                    >
                        <img
                            src={buyer}
                            alt=""
                            className="role-selector__img"
                        />
                        <span>Покупатель</span>
                    </div>
                </div>
                <button
                    onClick={() => handleChangeRole(role)}
                    className={role ? 'active' : undefined}
                >
                    Начать
                </button>
            </div>
        );
    }
}
