import React, { Component } from 'react';
import './AddNew.css';
import ContactListPage from './ContactListPage';

class AddNew extends Component {
    render(){
        return (<div className="firstdiv">
                    <h2 className="header">New Contact </h2>
                    <div className="secdiv">
                        New id : <input type="text" Name="id"/><br/>
                        New Name :<input type="text" Name="name"/><br />
                        New Age :<input type="text" Name="Age"/><br />
                        New ph_no :<input type="text" Name="ph_no"/><br />
                    </div>
                    <div>
                        <button type="button" className="addButton"><a href="/">Add</a></button>
                        <button type="button" className="resetButton"><a href="/AddNew">Reset</a></button>
                    </div>
                </div>
        )
    }
}

export default AddNew;