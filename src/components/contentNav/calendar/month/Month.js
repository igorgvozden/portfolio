import React, { Component, Fragment } from 'react';
import Day from '../day/Day';

class Month extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dayOfWeek: null,
            date: null,
            month: null,
            year: null,
            firstDayOfMonth: null,
            lastDayOfMonth: null,
            daysInMonth: null,
            schedule: {
                dayIsShown: false,   
            },
            scheduleDay: null
        }
    }

    createToday = (month, year) => {
        if (month === -1 ) {
            month = 11;
            year = year - 1;
        } else if (month === 12) {
            month = 0;
            year = year + 1;
        }
        let today = new Date(`${month+1} ${new Date().getDate()}, ${year}`);
        this.setState({ date: today.getDate() });
        this.setState({ dayOfWeek: today.getDay() });
        this.setState({ month: today.getMonth() });
        this.setState({ year: today.getFullYear() });
        this.setState({ firstDayOfMonth: new Date(today.getFullYear(), today.getMonth()).getDay()});
        this.setState({ lastDayOfMonth: new Date(today.getFullYear(), today.getMonth()+1, 0)});
        this.setState({ daysInMonth: new Date(year, month+1, 0).getDate() })
    }

    componentDidMount() {
        this.createToday(new Date().getMonth(), new Date().getFullYear());
    }

    showDayComponent = (day, boolean) => {
        this.setState({
            ...this.state.schedule, dayIsShown: boolean
        })
        this.setState({ scheduleDay: day })
    }

    createDays = (numOfDays, firstDay) => {
        let days = [];
        for (let j = 1; j < firstDay; j++) {
            days.push(
                <div key={ 'empty' + j } className='calendarDay--empty'>
                </div>
            )
        }
        for(let i = 1; i <= numOfDays; i++) {
            if ( i === this.state.date && this.state.month === new Date().getMonth() ) {
                days.push(
                    <div key={ i } className='calendarDay--today' onClick={ () => this.showDayComponent(i, true) }>
                    { i }
                </div>
                )
            } else if ( i < this.state.date && this.state.month <= new Date().getMonth() ) {
                days.push(
                    <div key={ i } className='calendarDay calendarDay--past' onClick={() => this.showDayComponent(i, false) }>
                        { i }
                    </div>
                )   
            } else if (  this.state.month < new Date().getMonth() ) {
                days.push(
                    <div key={ i } className='calendarDay calendarDay--past' onClick={() => this.showDayComponent(i, false) }>
                        { i }
                    </div>
                ) 
            } else {
                days.push(
                    <div key={ i } className='calendarDay' onClick={() => this.showDayComponent(i, true) }>
                        { i }
                    </div>
                )   
            }   
        }
        return days;
    }

    render () {
        const { month, year, firstDayOfMonth, daysInMonth, scheduleDay } = this.state;
        const { userEmail } = this.props;
        const months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar']

        return (
            <div className='month-container'>
                <div className='month-container__choose-month'>
                    <div className='month-nav'>
                        <p onClick={() => this.createToday(month - 1, year)} className='pointer left-arrow'> &larr; </p>
                        <h3>{ months[month] }, { year }</h3>
                        <p onClick={() => this.createToday(month + 1, year)} className='pointer right-arrow'> &rarr; </p>
                    </div>
                    <ul className='month-container__week'>
                        <li>ponedeljak</li>
                        <li>utorak</li>
                        <li>sreda</li>
                        <li>četvrtak</li>
                        <li>petak</li>
                        <li>subota</li>
                        <li>nedelja</li>
                    </ul>
                </div>
                <div className='days-container'>
                    { this.createDays(daysInMonth, firstDayOfMonth)}
                </div>
                { this.state.dayIsShown? <Day userEmail={ userEmail } showDayComponent={ this.showDayComponent } month={ months[month] } scheduleDay={ scheduleDay } /> : <Fragment></Fragment> }
            </div>
        )
    }
}
    

export default Month;