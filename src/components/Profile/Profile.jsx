import React, { Component } from 'react';
import Rating from '../Rating';
import Avatar from '../Avatar';
import './style.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    user: state.user.value,
});

class Profile extends Component {
    render() {
        const avatar = undefined;
        const {last_name, first_name} = this.props.user;
        console.log(this.props.user);
        return (
            <div className="profile__wrapper">
                <div className="profile">
                    <div className="profile__avatar">
                        <Avatar></Avatar>
                    </div>
                    <div className="profile__desc">
                        <b>{`${first_name} ${last_name}`}</b>
                        <span>jenkinstix@gmail.com</span>
                        {/*<Rating value={4.4}></Rating>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Profile);