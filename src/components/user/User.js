import React, { Component, Fragment } from 'react';
import './user.scss';
import userImg from '../../images/user-img.png';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expand: false,
            showPassInput: false,
            userPassword: '',
            expandSchedule: false,
            scheduled: false,
            scheduledData: []
        }
    }

    expandView = (expandState) => {
        if (expandState === true) {
            this.setState({ expand: false })
        } else {
            this.setState({ expand: true })
        }
    };
    
    collectUserPassword = (event) => {
        this.setState({ userPassword: event.target.value })
    };

    deleteUser = (email, password) => {
        fetch('https://sleepy-brook-88390.herokuapp.com/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    this.props.signIn(false);
                    console.log('Success: obrisan profil', data);
                    window.confirm('Obrisan profil!');
                }, 500)  
            })
            .catch((error) => {
                console.error('Error: ooopsy', error);
            });
    };

    createAppointments = (data) => {
        let newValue = [];
        if (data !== 'nemate zakazano') {
            data.forEach(element => {
                if (element.day != null) {
                    newValue.push(element);
                }
            });
        }
        this.setState({ scheduledData: newValue });
    }

    getSchedule = (email) => {
        fetch('https://sleepy-brook-88390.herokuapp.com/getschedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (!data[1]) {
                this.createAppointments('nemate zakazano');
                this.setState({ scheduled: false });
            } else {
                this.createAppointments(data);
                this.setState({ scheduled: true });
            }
        })
        .catch((error) => {
            console.error('Error: ooopsy', error);
        });
    };

    showPassInput = (boolean) => {
        this.setState({ showPassInput: boolean })
    };

    expandScheduleTab = (boolean, email) => {
        this.getSchedule(email);
        if (boolean === false) {
            this.setState({ expandSchedule: true })
        } else {
            this.setState({ expandSchedule: false })
        }  
    };

    deleteAppointment = (id, email) => {
        fetch('https://sleepy-brook-88390.herokuapp.com/deleteappointment', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            }),
        })
        .then(res => res.json())
        .then(this.setState({ expandSchedule: false }))
        .then(setTimeout(() => {this.expandScheduleTab(false, email)}, 500))
        .catch(err => {
            console.log('oops, nismo obrisali', err)
        })
    };

    render() {
        const { name, email } = this.props.user;
        const { userPassword, expandSchedule, scheduledData , scheduled} = this.state;
        return(
            <div className='user'>
                <div className='user-container' onClick={ () => this.expandView(this.state.expand) } >
                    <div className='user-image-container' >
                        <img style={{ height:'20px'}} src={ userImg } alt='user-img'></img>
                    </div>
                    <p>{ name }</p>
                </div>
                {
                    this.state.expand ?
                    <div className='user-container__expand shadow-5' onMouseLeave={ () => {this.expandView(this.state.expand); this.expandScheduleTab(true, email)} }>
                        <p onClick={ () => this.expandScheduleTab(expandSchedule, email) } className='pointer'>Zakazani termini</p>
                        {
                            (expandSchedule && scheduled) 
                            ? <Fragment>
                                { scheduledData.map((data, index) => 
                                    <p key={index} className='schedulled-paraf'>{data.day}. {data.month}, {data.hour}:00 h
                                        <button onClick={() => this.deleteAppointment(data.id, email)} className='schedulled-btn'>obriši</button>
                                    </p> 
                                    )     
                                }
                              </Fragment>
                            : (expandSchedule && !scheduled)
                            ? <p className='schedulled-paraf--nemate-zakazano'>nemate zakazanih termina</p>
                            : <Fragment></Fragment>
                        }
                        <p className='user-container__expand-email'>{ email }</p>
                        <p onClick={ () => this.showPassInput(true) } className='pointer'>Obriši svoj profil</p>
                        {this.state.showPassInput
                            ? <div className='user-pass__container'>
                                <input onChange={ this.collectUserPassword } type='password' name='pass' className='user-pass__input' placeholder='unesite svoj password...'/>
                                <button onClick={ () => this.deleteUser(email, userPassword) } type='button' className='user-pass__delbtn'>Obriši</button>
                                <button onClick={ () => this.showPassInput(false) } type='button' className='user-pass__cancelbtn'>Odustani</button>
                            </div>
                            : <Fragment></Fragment>
                        }
                            
                    </div>
                    : <Fragment></Fragment>
                }
                
            </div>
        )
    }
};

export default User;