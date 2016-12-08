import React, { Component } from 'react';
import ContactCard from './ContactCard';

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={contactItems: props.toItems}
    }

     render(){
         let returnObj = [];
         this.state.contactItems.forEach(function(item) {
             returnObj.push(<ContactCard key={item.item.id} contactData={item.item}></ContactCard>);
         });
         return <div>{returnObj}</div>;
  }
}

export default ContactList; 