import React, { Fragment } from 'react';
import './day.scss';
import UserNotifications from '../../../userNotifications/UserNotifications';

class Day extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hour: '__',
            day: props.scheduleDay,
            month: props.month,
            message: '',
            meetingNotification: '',
            showConfirmation: false
        }
    }

    selectHour = (hour) => {
        this.setState({ hour });
    }

    createMsg = (event) => {
        this.setState({ message: event.target.value })
    }

    createHours = () => {
        let hrs = [];
        for(let i = 8; i < 21; i++) {
            hrs.push(
                <label className='hrs-label' key={ i }> <span>{i}:00</span>
                    <input onClick={ (e) => this.selectHour(Number(e.target.value)) } className='hrs-radio' type='radio' value={ i } name='hour'/>
                </label>
            )
        }
        return hrs;
    }

    scheduleMeeting = (email, hour, day, month, message) => {
        fetch('https://sleepy-brook-88390.herokuapp.com/meeting', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            hour: hour,
            day: day,
            month: month,
            msg: message
        }),
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ meetingNotification: data });
            this.setState({ showConfirmation: true });
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    render() {
        const { hour, day, month, message, meetingNotification, showConfirmation } = this.state;
        const { userEmail } = this.props;
        return (
            <Fragment>
                <UserNotifications text={ meetingNotification } showConfirmation={ showConfirmation } />
            <div className='hrs-container'>
                <div className='hrs-container__inner hrs-container__inner--big'>
                    <h2 className='hrs-container__inner-title'>Odaberi vreme</h2>
                    {this.createHours()}
                </div>
                <div className='hrs-container__inner--big'>
                    <div className='hrs-container__inner hrs-container__inner--small'>
                    <p onClick={ () => this.props.showDayComponent(false) } className='hrs-container__inner-closebtn'>zatvori</p>
                        <h2 className='hrs-container__inner-title'>Poruka</h2>
                        <p className='hrs-container__inner-email'>{ userEmail }</p>
                        <textarea onChange={ this.createMsg }
                            className='hrs-container__inner-textarea' rows='4' placeholder='unesite poruku...'>
                        </textarea>
                    </div>
                    <div className='hrs-container__inner hrs-container__inner--small hrs-container__inner--final'>
                        <h3  className='hrs-container__inner-text hrs-container__inner-text--month'>{ month }</h3>
                        <p className='hrs-container__inner-text hrs-container__inner-text--day'>{ day }</p>
                        <p  className='hrs-container__inner-text hrs-container__inner-text--hour'>u { hour } časova</p>
                        <button onClick={ () => this.scheduleMeeting(userEmail, hour, day, month, message) }
                            className='hrs-container__inner-schedulebtn'>Proveri da li sam slobodan!
                        </button>
                    </div>
                </div>   
            </div>
            </Fragment>
        )
    }
}

export default Day;