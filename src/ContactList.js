import React, { Component } from 'react';
import ContactCard from './ContactCard';
import { fromJS, toJS } from 'immutable';

class ContactList extends Component {
    
    constructor(props) {
        super(props);
            this.state = { contactItems: props.toItems, newItem: {} , newVar : false }
            this.deleteCard = this.deleteCard.bind(this);
            this.editCard =  this.editCard.bind(this);
            this.newContactCards = this.newContactCards.bind(this);
            this.addContactCard = this.addContactCard.bind(this);
            this.contactCardForm = this.contactCardForm.bind(this);
    }

    deleteCard(id) {
        let newContactItems = this.state.contactItems;
        let selectedIndex;
        newContactItems.map(function(item, index) {
            if(item.get('id') === id) 
                return selectedIndex = index;
        });
        let itemDel = newContactItems.delete(selectedIndex)
        this.setState({ contactItems : itemDel });
    }   

    editCard(id, newValue, field) {
        console.log(id);
        let newCardItems = this.state.contactItems;
        let newArray = newCardItems.map(function(item, index) {
            console.log("item.id ", item.get('id'))
            if(item.get('id') === id) {
                console.log("Equal")
                let editItem = item.set(field , newValue)
                console.log(editItem.toJS())
                return editItem;
            }
            else return item;
        });
        // console.log({ newArray: newArray.toJS() })
        console.log(this.state.contactItems.toJS())
        this.setState({ contactItems : newArray })
        console.log(this.state.contactItems.toJS())
    }

    newContactCards(e, field) {
        this.state.newItem[field] = e.target.value;
    }

    addContactCard() {
        this.setState({ contactItems: this.state.contactItems.push(fromJS(this.state.newItem)) });
    }

    contactCardForm(){
        this.setState({newVar : !this.state.newVar})
    }

    render() {
        console.log(this.state.contactItems.toJS())
        let returnObj = [];
        this.state.contactItems.forEach(function(item) {
                returnObj.push(<ContactCard 
                key={item.get('id')}
                contactData={item.toJS()} 
                deleteCard={this.deleteCard}
                editCard={this.editCard}>
            </ContactCard>);
        }, this);
       
        var toMakeVisible = 'firstdiv' + (this.state.newVar? 'makeVisible' : '')
        return (
            <div>{returnObj}
            <button type="button" className="addContactButton" onClick={()=>this.contactCardForm()}>Add</button>
            <br/>
            <br/>
            <div className={toMakeVisible}>
                <div>
                <h2 className="header">New Contact </h2>
                    <div className="secdiv">
                        New id   : <input type="text" Name="id" onChange={(e)=>this.newContactCards(e,'id')}/> <br/>
                        New Name : <input type="text" Name="name" onChange={(e)=>this.newContactCards(e,'name')}/><br/>
                        New Age  : <input type="text" Name="Age" onChange={(e)=>this.newContactCards(e,'age')} /><br/>
                        New num : <input type="text" Name="ph_no" onChange={(e)=>this.newContactCards(e,'ph_no')}/>
                    </div>
                    <div>
                        <button type="button" className="addButton" onClick={()=>this.addContactCard()}>Add</button>
                        <button type="button" className="resetButton"><a href="/">Reset</a></button>
                    </div>
                 </div>  
                </div>
            </div>);
    }
}

export default ContactList; 