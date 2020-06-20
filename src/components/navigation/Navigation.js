import React from 'react';
import './navigation.scss';
import User from '../user/User';

function Navigation ({  page, onRouteChange, isSignedIn, signIn, activeUser }) { 
    if (!isSignedIn) {
        return (
        <nav>
            {
            page === 'home'
            ? <div className='nav'>
                <p onClick={ () => onRouteChange('login') } className='pointer pa2 dim'>Uloguj se</p>
                <p onClick={ () => onRouteChange('register') } className='pointer pa2 dim'>Registruj se</p>
            </div>
            : <div className='nav'>
                <p onClick={ () => onRouteChange('home') } className='pointer pa2 dim'>Početna</p>
                <p onClick={ () => onRouteChange('login') } className='pointer pa2 dim'>Uloguj se</p>
                <p onClick={ () => onRouteChange('register') } className='pointer pa2 dim'>Registruj se</p>
            </div> 
            }  
        </nav>
        )
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent:'space-between' }}>
                <User user={ activeUser } signIn={ signIn }/>
                <p onClick={ () => signIn(false) } className='pointer pa2 dim'>Izloguj se</p>
            </nav>
        )
    } 
}  
        


export default Navigation;