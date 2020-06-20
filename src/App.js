import React, { Component, Fragment } from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Navigation from './components/navigation/Navigation';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';


const particlesOptions ={
  "particles": {
      "number": {
          "value": 130
      },
      "size": {
          "value": 3
      },
      "move": {
        "speed": 2.5
      },
      "opacity": {
        "anim": {
          "enable": true,
          "opacity_min": 0.05,
          "speed": 2,
          "sync": false
      },
        "value": 0.4
      }
  }
}

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      route: 'home',
      isSignedIn : false,
      isAdmin: false,
      name: '',
      email: ''      
    }
  }

  loadUser = (data) => {
    this.setState({ name: data[0].name })
    this.setState({ email: data[0].email })
    this.setState({ isAdmin: data[0].isadmin })
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  signIn = (boolean) => {
    this.setState({ isSignedIn: boolean })
  }

  render () {
    return (
      <div>
        <Navigation  page={this.state.route} onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} signIn={this.signIn} activeUser={this.state}/>
        {
          this.state.route === 'login' ? <Login onRouteChange={this.onRouteChange} signIn={this.signIn} loadUser={this.loadUser}/>
          : this.state.route === 'register' ? <Register  onRouteChange={this.onRouteChange} signIn={this.signIn} loadUser={this.loadUser}/>
          : <Fragment>
              <Home user={this.state}/>
            </Fragment>
        }
        <Particles className='particles' params={ particlesOptions }/>
    </div>
    ) 
  }
}

export default App;
