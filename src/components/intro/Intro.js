import React, { Fragment } from 'react';
import './intro.scss';
import javascript from '../../../src/images/javascript.png';
import css from '../../../src/images/css.png';
import sass from '../../../src/images/sass.png';
import html from '../../../src/images/html.png';
import node from '../../../src/images/node.png';
import reactlogo from '../../../src/images/react.png';
import postgres from '../../../src/images/postgres.png';
import github from '../../../src/images/github.png';


class Intro extends React.Component {

    render () {

        const { isSignedIn } = this.props;

        return (
            <div className='intro center'>

                <h1 className='intro__h1'> 
                    Dobrodošli!
                </h1>
                <h2 className='intro__h2'>
                    Ovo je online prikaz onoga što ste dobili kao .document verziju mog CV-ja.
                </h2>
                <h3 className='intro__h3'>
                    Da bih namestio ovaj sajt, koristio sam većinu tehnologija koje poznajem. 
                    Ovde možete upoznati način na koji se sluzim tim tehnologijama.
                </h3>
                {
                    !isSignedIn? 
                    <div className='intro__codeblock-container'>
                        <p> Da bi dobili pun pristup sajtu, potrebno je Registrovati ili Ulogovati se.</p>
                    </div>
                    : <Fragment></Fragment>
                }
                
                <h2 className='intro__h2 tc mt6'>
                    Tehnologije koje sam koristio na ovom sajtu:
                </h2>
                <div className='intro__tech-container'>
                    <Technology src={ html }/>
                    <Technology src={ javascript }/>
                    <Technology src={ css }/>
                    <Technology src={ sass }/>
                    <Technology src={ reactlogo }/>
                    <Technology src={ node }/>
                    <Technology src={ postgres }/>
                    <Technology src={ github }/>
                </div>
            </div>
        )
    }
}

function Technology ({ src }) {
    return(
        <div className='technology-component-container'>
            <img className='technology-component' src={ src } alt='technology-icon'/>
        </div>
    )
}

export default Intro;