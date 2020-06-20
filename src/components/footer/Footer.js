import React from 'react';
import './footer.scss';

function Footer () {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <h3 className='footer-container__title'>Kontakt</h3>
                <p>igorgvozden@yahoo.com</p>
                <p>+381 64 0 777 568</p>
                <a className='footer__github-link' href='https://github.com/igorgvozden'>github.com/igorgvozden</a>
            </div>
            <p className='footer__last-line'>made by Igor Gvozden | a web developer in the making</p>
        </div>
    )
}

export default Footer;