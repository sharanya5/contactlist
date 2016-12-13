import React, { Component } from 'react';
import ContactList from './ContactList';
import './ContactListPage.css';

class ContactListPage extends Component {
    
    constructor(props){
        super(props);
         this.state={contactDetails : props.data }
    }

    render(){
       return(<div>
                <div>
                  <h1 className='App'>contact list</h1>
                </div> 
                  <ContactList toItems={this.state.contactDetails} />
                <div>
                  <button className='AddButton'><a href='/AddNew'>Add New contact</a></button>
                </div>
              </div>);
    }
}

export default ContactListPage;