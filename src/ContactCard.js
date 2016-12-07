import React, { Component } from 'react';
import App from './App';
import ContactList from './ContactList';

class ContactCard extends Component {
    constructor(props){
        super(props);
        this.state= {card : props.contactData }
        this.deleteContact= this.deleteContact.bind(this);;
    }
    deleteContact(e){
        this.state.card.pop(this.props.id);
    }
    render(){
        console.log(this.state.card);
         let contactNames = [];
         contactNames= this.state.card;
        return(<li><div>{contactNames}</div>
                <button type="button" onClick={(e)=>this.deleteContact()}>Delete</button>
                <button type="button">Edit</button></li>);
       }
}

export default ContactCard;