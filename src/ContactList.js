import React, { Component } from 'react';
import ContactCard from './ContactCard';

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={contactItems: props.toItems}
        this.deleteCard=this.deleteCard.bind(this);
        this.editCard=this.editCard.bind(this);
    }

 deleteCard(id) {
        //logic to delete an item from the array this.state.contactItems
        var newContactItems= this.state.contactItems;
        let selectedIndex;
        newContactItems.map(function(item, index){
                if(item.item.id===id) 
                return selectedIndex = index;
            });
         console.log(selectedIndex)        
         newContactItems.splice(selectedIndex , 1);
         this.setState({contactItems : newContactItems})
         console.log(this.state.contactItems);
        
    }   

 editCard(id, newValue, field){
             var newCardItems=this.state.contactItems;
             let newArray = newCardItems.map(function(item, index){
                if(item.item.id===id) {
                    item.item[field] = newValue;
                    return item;
                }
                else return item;
            });
            this.setState({contactItems : newArray})
 }

     render(){
         let returnObj = [];
         this.state.contactItems.forEach(function(item) {
             returnObj.push(<ContactCard 
             key={item.item.id}
             contactData={item.item} 
             deleteCard={this.deleteCard}
             editCard={this.editCard}>
              </ContactCard>);
         }, this);
         return <div>{returnObj}</div>;
  }
}

export default ContactList; 