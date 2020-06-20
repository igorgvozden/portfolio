import React, { Fragment } from 'react';
import './register.scss';

class Register extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: '',
            registerNotification: ''
        }
    }

    fetchSignInData = () => {
        fetch('https://sleepy-brook-88390.herokuapp.com/signin', {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    email: this.state.registerEmail,
                    password: this.state.registerPassword
              }),
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
              if(data[0].email === this.state.registerEmail) {
                this.props.loadUser(data);
                this.props.onRouteChange('home');
                this.props.signIn(true);
              }
            })
            .catch((error) => {
              console.error('wooops, nije uspesan login:', error);
            });
    }

    fetchRegisterData = () => {
        fetch('https://sleepy-brook-88390.herokuapp.com/register', {
              method: 'POST', 
              mode: 'no-cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: this.state.registerName,
                  email: this.state.registerEmail,
                  password: this.state.registerPassword
              }),
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              this.fetchSignInData();
            })
            .catch((error) => {
              console.error('wooops:', error);
            });
    }

    validateCredentials = (state) => {
        let validation = false;
        if (state.registerName.length < 1) {
            this.setState({ registerNotification: 'Unesi ime' });
            return validation;
        }
        if (!state.registerEmail.includes('@')) {
            this.setState({ registerNotification: 'e-mail format nije kul' });
            return validation;
        }
        if (state.registerPassword.length < 1) {
            this.setState({ registerNotification: 'Unesi lozinku' });
            return validation;
        }
        validation = true;
        return validation;
    }

    registerNameChange = (event) => {
        this.setState({ registerName: event.target.value })
    }

    registerEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }

    registerPassword = (event) => {
        this.setState({ registerPassword: event.target.value })
    }

    registerSubmit = () => {
        if(this.validateCredentials(this.state)) {
            console.log(this.state);
            this.fetchRegisterData();
            this.props.onRouteChange('home'); 
        } 
    }

    render () {
        const { registerNotification } = this.state;
        return (
            <Fragment>
                <main className="pa4 black-80 shadow-5 center tc mt6 br4" style={{ width: '300px', background: 'white' }}>
                <div className="measure center">
                    <fieldset className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Registruj se</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Ime</label>
                        <input 
                            onChange={ this.registerNameChange }
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            onChange={ this.registerEmailChange }
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Lozinka</label>
                        <input 
                            onChange={ this.registerPassword }
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                        />
                    </div>
                    </fieldset>
                    <div >
                        <p className='small-notification'>{ registerNotification }</p>
                        <input 
                            onClick={ this.registerSubmit }
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Registruj se" 
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={ () => this.props.onRouteChange('login')  } className="f6 dim black db pointer">Uloguj se</p>
                    </div>
                </div>
            </main>
            <div className='register-info'>
                <p>Ne morate uneti pravu e-mail adresu, ali uzmite u obzir da će se registrovana adresa koristiti kao Vaše korisničke informacije u svrhu komunikacije na sajtu.</p>
                <p>Vaša e-mail adresa se neće koristiti ni u koje druge svrhe, osim kao korisničke informacije na sajtu.</p>
            </div>
            </Fragment>
        )
    }  
}

export default Register;