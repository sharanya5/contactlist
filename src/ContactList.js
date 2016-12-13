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
        console.log("kkkkkkkk")
        var newContactItems= this.state.contactItems;
        var index= newContactItems.indexOf(id);
        console.log(index+1)
         newContactItems.splice(index, 1);
        // console.log(newContactItems);
        this.setState({contactItems : newContactItems})
    }   

 editCard(newValue){
        //  console.log(newValue.id)
        //  console.log(newValue.name)
             console.log(newValue)
        //  if(newValue !== this.state.contactItems.item){
            //  this.state.contactItems.push(newValue)
            //  this.state.contactItems.map(function(item) {
            //      if(id== this.state.contactItems.id){
            //     item.id=newValue.id,
            //      item.name=newValue.name,
            //      item.age=newValue.age,
            //      item.ph_no=newValue.ph_no }
            //  });
        //     this.state.contactItems.push(newValue)
         this.setState({contactItems : newValue})
         console.log(this.state.contactItems)
 }

     render(){
        //  {this.state.contactItems}
         let returnObj = [];
         this.state.contactItems.forEach(function(item) {
            //  console.log(this);
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