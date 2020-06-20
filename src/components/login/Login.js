import React, { Fragment } from 'react';
import './login.scss';

class Login extends React.Component {

    constructor (props) {
        super(props);

        this.state= {
            signInEmail: '',
            signInPassword: '',
            signInResponse: ''
        }
    }

    fetchSignInData = () => {
        fetch('https://sleepy-brook-88390.herokuapp.com/signin', {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: this.state.signInEmail,
                  password: this.state.signInPassword
              }),
            })
            .then(response => response.json())
            .then(data => {
              
              
              if(data[0].email === this.state.signInEmail) {
                this.props.loadUser(data);
                this.props.onRouteChange('home');
                this.props.signIn(true);
              } else {
                this.setState({ signInResponse: data })  
              }
            })
            .catch((error) => {
              console.error('wooops, nije uspesan login:', error);
            });
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        this.fetchSignInData(); 
    }

    render () {
        const { signInResponse } = this.state;
        return (
            <Fragment>
                <main className="pa4 black-80 shadow-5 center tc mt6 br4" style={{ width: '300px', background: 'white' }}>
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Uloguj se</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Lozinka</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div>
                    <p className='small-notification'>{ signInResponse }</p>
                        <input 
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Uloguj se" 
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => this.props.onRouteChange('register')} className="f6 dim black db pointer">Registruj se</p>
                    </div>
                </div>
            </main>
            <div className='login-info'>
                <p>*Možete se ulogovati kao gost, sa email-om "gost@email.com", i lozinkom "1234"</p>
                <p>Uzmite u obzir da ce se ovi kredencijali koristiti ukoliko budete želeli da se služite sredstvima komunikacije na sajtu.</p>
                <p>"Gost" opcija je prisutna isključivo radi demonstracije ako ne želite da se registrujete.</p>
            </div>
        </Fragment>
        )
    }
}

export default Login;