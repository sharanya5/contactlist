import React, { Component } from 'react';
import ContactList from './ContactList';
import './ContactListPage.css';

class ContactListPage extends Component {

  render() {
       return ( <div>
                  <div>
                    <h1 className='App'>contact list</h1>
                      </div> 
                        <ContactList />
                      <div>
                    <button className='AddButton'><a href='/AddNew'>Add New contact</a></button>
                 </div>
               </div> 
       );
    }
}

export default ContactListPage;