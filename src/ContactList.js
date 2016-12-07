import React, { Component } from 'react';
import App from './App';
import ContactListPage from './ContactListPage';
import ContactCard from './ContactCard';

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={contactItems: props.toItems }
    }

     render(){
         return(
         this.state.contactItems.forEach(function(item) {
                     <ContactCard contactData={ item } />
         }, this)
         );
 }
}

export default ContactList; 