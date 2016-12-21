import React, { Component } from 'react';
import ContactList from './ContactList';
import './ContactListPage.css';
import { fromJS } from 'immutable';

class ContactListPage extends Component {

  render() {

       const contacts= fromJS([ { id : 1,
                            name : "p1",
                            age : 20,
                            ph_no : 112233 },
                          { id : 2,
                            name : "p2",
                            age : 21,
                            ph_no : 111222 },
                          { id : 3,
                            name : "p3",
                            age : 22,
                            ph_no : 123123 },
                          { id : 4,
                            name : "p4",
                            age : 23,
                            ph_no : 121212 } ]) ;

       return ( <div>
                  <div>
                    <h1 className='App'>contact list</h1>
                      </div> 
                        <ContactList contactList={ contacts } />
                      <div>
                    <button className='AddButton'><a href='/AddNew'>Add New contact</a></button>
                 </div>
               </div> 
       );
    }
}

export default ContactListPage;