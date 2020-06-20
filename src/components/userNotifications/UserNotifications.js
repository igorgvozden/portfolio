import React, { Component, Fragment } from 'react';
import './userNotifications.scss';

class UserNotifications extends Component {
    constructor (props) {
        super(props);

        this.state = {
            show: true
        }
    }

    closeNotification () {
        this.setState({ show: false })
    };
    
    render () {

        const { text, showConfirmation } = this.props;

        return (
            (this.state.show && showConfirmation)
            ? <div className='userNotifications-container'>
                <div className='userNotifications-container__inner'>
                    <h2 className='userNotifications-container__inner-text'>{ text }</h2>
                    <p onClick={ () => this.closeNotification() } className='userNotifications-container__inner-btn'>Ok</p>
                </div>
             </div>
            : <Fragment></Fragment>  
        )
    }
    
}

export default UserNotifications;