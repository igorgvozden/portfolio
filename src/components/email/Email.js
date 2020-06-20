import React from 'react';
import './email.scss';
import NotificationCard from '../notificationCard/NotificationCard';

class Mail extends React.Component {
    constructor() {
        super();

        this.state = {
            emailIsSent: false,
            email: '',
            message: '',
            notification: ''
        }
    }

    emailWasSent = (serverResponse) => {
        this.setState({ emailIsSent: true });
        this.setState({ notification: serverResponse })
    }

    closeEmailNotification = () => {
        this.setState({ emailIsSent: false });
    }

    sendEmail = () => {
        fetch('https://sleepy-brook-88390.herokuapp.com/sendemail', {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  emailAddress: this.state.email,
                  message: this.state.message
              }),
            })
            .then(response => response.json())
            .then(response => {
                if (response === 'e-mail je poslat') {
                    this.emailWasSent(response);
                }
            })
            .catch((error) => {
              console.error('wooops:', error);
            });
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onMsgChange = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <NotificationCard emailIsSent={this.state.emailIsSent} closeEmailNotification={this.closeEmailNotification} notification={this.state.notification}/>
            <div className='emailForm pa4 black-80 shadow-5 center tc w-100'>
                <div className='emailForm-inner center h-100'>
                    <h1>Pošaljite mi email</h1>
                    <h3>a ja ću se potruditi da odgovorim što pre!</h3>
                    <input className='pa3 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100' 
                        name='email' 
                        type='email' 
                        placeholder='unesite Vaš email'
                        onChange={ this.onEmailChange }
                        />
                    <textarea className='pa3 input-reset ba b--none bg-transparent hover-bg-black hover-white w-100 h5' 
                        placeholder='poruka ...'
                        onChange={ this.onMsgChange }
                    ></textarea>
                    <input className="posaljiEmailBtn b ph3 pv2 input-reset b--none bg-transparent pointer f6 dib w-100" 
                        type="submit" 
                        value="Pošalji" 
                        onClick={ this.sendEmail }
                        />
                </div>  
            </div>
            </React.Fragment>
        )
    }
}

export default Mail;