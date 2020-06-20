import React, { Component, Fragment } from 'react';
import './admin.scss';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    };

    getUsers() {
        fetch('https://sleepy-brook-88390.herokuapp.com/getusers')
        .then(response => response.json())
        .then(response => this.setState({ users: response }));
    };

    deleteThisUser(id) {
        fetch('https://sleepy-brook-88390.herokuapp.com/adminsdelete', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            }),
        })
        .then(res => res.json())
        .catch(err => {
            console.log('oops, nismo obrisali', err)
        })
    };

    makeAdmin(id) {
        fetch('https://sleepy-brook-88390.herokuapp.com/makeadmin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            }),
        })
        .then(res => res.json())
        .catch(err => {
            console.log('oops', err)
        })
    };

    componentDidMount() {
        this.getUsers();   
    };

    render () {

        const { users } = this.state;
        return(
            <div className='admin-container'>
                <h1>Admin</h1>
                <div className='admin-container__users'>
                    <h2 className='admin-container__users-title'>Registrovani korisnici</h2>
                    <table className='db-user db-user--first-row'>
                            <thead className='db-user__table'>
                                <tr className='db-user__table-row'>
                                    <th className='db-user__table-th'>Broj</th>
                                    <th className='db-user__table-th'>Ime</th>
                                    <th className='db-user__table-th'>e-mail</th>
                                    <th className='db-user__table-th'>Id korisnika</th>
                                    <th className='db-user__table-th'>Admin</th>
                                    <th className='db-user__table-th'></th>
                                    <th className='db-user__table-th'></th>
                                </tr>
                            </thead>
                        </table>
                    <div className='admin-container__users-container'>
                        {
                            users.map((user, index) => 
                                <DbUser key={index} 
                                    index={index} name={user.name} email={user.email} id={user.id} isadmin={user.isadmin} 
                                    deleteThisUser={this.deleteThisUser} makeAdmin={this.makeAdmin}/>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class DbUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appointments: []
        }
    }

    render () {

        const { index, id, name, email, isadmin, deleteThisUser, makeAdmin } = this.props;

        return (
            <Fragment>
                <table className='db-user'>
                    <tbody className='db-user__table'>
                        <tr className='db-user__table-row'>
                            <th className='db-user__table-td'>{index + 1}</th>
                            <td className='db-user__table-td'>{name}</td>
                            <td className='db-user__table-td'>{email}</td>
                            <td className='db-user__table-td'>{id}</td>
                            { isadmin ? <td className='db-user__table-td'>da</td> : <td className='db-user__table-td'></td> }
                            <td className='db-user__table-td'><button className='db-user__table__btn' onClick={ () => makeAdmin(id) }>Dodaj kao admina</button></td>
                            <td className='db-user__table-td'><button className='db-user__table__btn' onClick={ () => deleteThisUser(id) }>Obriši korisnika</button></td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
    
}

export default Admin;