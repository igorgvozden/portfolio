import React from 'react';
import './notificationCard.css';

class NotificationCard extends React.Component {

    render() {
        const { emailIsSent, closeEmailNotification, notification } = this.props;

        if (emailIsSent) {
            return (
                <div className='alert-container'>
                    <div className='alert'>
                    <p className='alert-zatvori pointer hover-red' onClick={() => closeEmailNotification()} >zatvori</p>
                    <h1 className='alert-text'>Vaš email je uspešno prosledjen! { notification }</h1>
                </div>
                </div>
                
            )
        } else {
            return(
               <React.Fragment></React.Fragment>
            )
        }
    }   
}

export default NotificationCard;