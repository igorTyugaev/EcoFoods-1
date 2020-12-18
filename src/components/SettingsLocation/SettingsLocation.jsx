import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { setUserInfo } from '../../store/actionCreators/usersActionCreators';
import user from '../../store/reducers/user';

const mapStateToProps = (state, ownProps) => ({
    address: state.user.value.address,
    phone: state.user.value.phone_number,
});

const mapDispatchToProps = (dispatch) => ({
    setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

class SettingsLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: props.address || '',
            phone: props.phone || '',
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const {address, phone} = this.state;
        return (
            <main className="settings-page">
                <h2 className="h2">Адрес</h2>
                <input onChange={this.handleChange} name="address" value={address} type="text" />             
                <h2 className="h2">Телефон</h2>
                <input onChange={this.handleChange} name="phone" value={phone} type="text" />
                <Link to='/personalArea'><button className="my-products-add-page__add-button" onClick={() => this.props.setUserInfo({
                    address: address,
                    phone_number: phone,
                })}>Сохранить</button></Link>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsLocation);
