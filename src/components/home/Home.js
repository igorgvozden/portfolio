import React, { Fragment, Component } from 'react';
import ContentNav from '../contentNav/ContentNav';
import Email from '../email/Email';
import Footer from '../footer/Footer';
import Intro from '../intro/Intro';

class Home extends Component {

  constructor (props) {
    super(props);

    this.state = {

    }
  }

  render () {
    const { isSignedIn, email, isAdmin } = this.props.user;
    return (
      <div className="home">
        {
          isSignedIn 
          ? <ContentNav userEmail={ email } isSignedIn={ isSignedIn } isAdmin={ isAdmin }/>
          : <Fragment>
              <Intro  />
              <Email />
              <Footer />
            </Fragment>
        }
          
      </div>
    );
  }
}

export default Home;