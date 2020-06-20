import React from 'react';
import './calendar.scss';
import Month from './month/Month';

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            
        }
    }
    
    render() {
        const{ userEmail } = this.props;
        return(
            <div className='mainContainer-calendar'>
                
                <h1>Kalendar</h1>
                <div>
                    <Month userEmail={ userEmail }/> 
                </div>
                <p className='mainContainer-text'>*klikom na dane u kalendaru, možete zakazati termin za razgovor sa mnom</p>

            </div>
        )
    }

}

export default Calendar;