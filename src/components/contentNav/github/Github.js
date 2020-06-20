import React from 'react';
import './github.scss';
import robofriends from '../../../images/robofriends.jpg';
import clock from '../../../images/clock.jpg';
import decisions from '../../../images/decisions.jpg';
import food from '../../../images/food.jpg';
import memory from '../../../images/memory-game.jpg';
import bicycles from '../../../images/bicycles.jpg';

class Github extends React.Component {

    render() {
        return(
            <div className='gitHub-main-container'>
                <h1>Moj GitHub</h1>
                <a className='github-link' href='https://github.com/igorgvozden'>github.com/igorgvozden</a>
                <div className='project-container'>
                    <Project projectName={ 'Robofriends' } projectDesc={ 'React app sa filter funkcijom' } address={ 'https://igorgvozden.github.io/react-robofriends/' } image={ robofriends }/>
                    <Project projectName={ 'Clock Js' } projectDesc={ 'JavaScript sat sa alarm funkcijom' } address={ 'https://igorgvozden.github.io/clockJS/index' } image={ clock }/>
                    <Project projectName={ 'Decision Maker' } projectDesc={ 'App za random donosenje odluka' } address={ 'https://igorgvozden.github.io/make-me-decide/index' } image={ decisions }/>
                    <Project projectName={ 'Food Blog' } projectDesc={ 'Static website sa light Js' } address={ 'https://igorgvozden.github.io/food-site/index' } image={ food }/>
                    <Project projectName={ 'Memory Game' } projectDesc={ 'Js card Memory game' } address={ 'https://igorgvozden.github.io/memory-game-js/' } image={ memory }/>
                    <Project projectName={ 'Bicycles Web Shop' } projectDesc={ 'Static website sa light Js u GULP' } address={ 'https://igorgvozden.github.io/bicycles-website/dist/index.html' } image={ bicycles }/>
                   </div>       
            </div>
        )
    }

}

function Project ({ projectName, address, projectDesc, image }) {
    return(
        <div className='project'>
            <div className='project__image'>
                <img src={image} alt=''></img>
            </div>
            <div className='project__info'>
                <h3 className='project__info-name'>{ projectName}</h3>
                <p className='project__info-desc'>{ projectDesc }</p>
            </div>
            <a className='project__info-btn' href={ address } >pogledaj</a>
        </div>
    )
}



export default Github;

