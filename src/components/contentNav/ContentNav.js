import React, { Fragment, Component } from 'react';
import './contentNav.scss';
import Calendar from '../contentNav/calendar/Calendar';
import Github from './github/Github';
import About from './about/About';
import Admin from './admin/Admin';
import Mail from '../email/Email';
import Intro from '../intro/Intro';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

class ContentNav extends Component {

    render () {
        const { userEmail, isSignedIn, isAdmin } = this.props;
        
        
            return (
                <Router>
                    <Fragment>
                        <nav className='contentNav'>
                            <ul>
                                <li className='routerLink'><NavLink to="/mail" activeClassName="active">Početna</NavLink></li> 
                                <li className='routerLink'><NavLink to="/about" activeClassName="active">O meni</NavLink></li> 
                                <li className='routerLink'><NavLink to="/github" activeClassName="active">Moj GitHub</NavLink></li>
                                <li className='routerLink'><NavLink to="/calendar" activeClassName="active">Kalendar</NavLink></li>
                                { isAdmin
                                  ? <li className='routerLink'><NavLink to="/admin" activeClassName="active">Admin Page</NavLink></li>
                                  : <Fragment></Fragment>
                                }
                            </ul>
                            <Switch>
                                
                                <Route path="/mail">
                                    <Intro isSignedIn={ isSignedIn }/>
                                    <Mail />
                                </Route>
                                <Route path="/calendar">
                                    <Calendar userEmail={ userEmail }/>
                                </Route>
                                <Route path="/github">
                                    <Github />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/admin">
                                    <Admin />
                                </Route>
                
                                <Redirect path='/' to='/about'/>
                        
                            </Switch>   
                        </nav>
                        <p className='footer__last-line'>made by Igor Gvozden | a web developer in the making</p>
                    </Fragment>
                </Router>
            )     
    }

}

export default ContentNav;