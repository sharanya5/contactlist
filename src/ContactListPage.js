import React, { Component } from 'react';
import ContactList from './ContactList';

class ContactListPage extends Component {
    
    constructor(props){
        super(props);
         this.state= {contactDetails : props.data }
         console.log(this.state.contactDetails);
    }

    render(){
       return(<div>
                <div>
                  <h1 className='App'>contact list</h1>
                </div>
                <div> 
                 contacts : {this.contactDetails} 
                </div>
                <div>
                  <button type="button">add new</button>
                </div>
              </div>);
    }
}

export default ContactListPage;