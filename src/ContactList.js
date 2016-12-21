import React, { Component } from 'react';
import ContactCard from './ContactCard';
import { fromJS, toJS } from 'immutable';

class ContactList extends Component {
    
    constructor(props) {
        super(props);
            this.state = { contactItems: props.contactList, newItem: {} , showAddContactCardFlag : false }
            this.deleteCard = this.deleteCard.bind(this);
            this.editCard =  this.editCard.bind(this);
            this.addNewContactCard = this.addNewContactCard.bind(this);
            this.addContactCard = this.addContactCard.bind(this);
            this.showAddContactCardForm = this.showAddContactCardForm.bind(this);
            this.resetForm = this.resetForm.bind(this);
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
        // console.log(id);
        let newCardItems=this.state.contactItems;
        let newArray = newCardItems.map(function(item) {
            if(item.get('id') === id) {
                let editItem = item.set(field , newValue)
                console.log(editItem.toJS())
                return editItem;
            }
            else return item;
        });
        // console.log(newArray.toJS())
        console.log(this.state.contactItems.toJS())
        this.setState({ contactItems : newArray })
        console.log(this.state.contactItems.toJS())
    }

    addNewContactCard(e, field) {
        this.state.newItem[field] = e.target.value;
        console.log(this.state.newItem)
    }

    addContactCard() {
        this.setState({ contactItems: this.state.contactItems.push(fromJS(this.state.newItem))});  
    }

    showAddContactCardForm(){
        this.setState({showAddContactCardFlag : !this.state.showAddContactCardFlag})
    }

    resetForm(){
        this.refs.name.value = '';
        this.refs.age.value = '';
        this.refs.id.value = '';
        this.refs.ph_no.value = '';
    }

    render() {
        let returnObj=[];
        this.state.contactItems.forEach(function(item) {
                returnObj.push(<ContactCard 
                key={item.get('id')}
                contactData={item.toJS()} 
                deleteCard={this.deleteCard}
                editCard={this.editCard}>
            </ContactCard>);
        }, this);
        var toMakeVisible=(this.state.showAddContactCardFlag? 'makeVisible' : 'firstdiv')
        return (
            <div>{returnObj}
            <button type="button" className="addContactButton" onClick={()=>this.showAddContactCardForm()}>Add</button>
            <br/>
            <br/>
            <div className={toMakeVisible}>
                <div>
                <h2 className="header">New Contact </h2>
                    <div className="secdiv" ref="form">
                        New id   : <input type="text" Name="id" ref="id"value={this.state.newItem.id} onChange={(e)=>this.addNewContactCard(e,'id')}/> <br/>
                        New Name : <input type="text" Name="name" ref="name" value={this.state.newItem.name} onChange={(e)=>this.addNewContactCard(e,'name')}/><br/>
                        New Age  : <input type="text" Name="Age" ref="age"value={this.state.newItem.age} onChange={(e)=>this.addNewContactCard(e,'age')} /><br/>
                        New num : <input type="text" Name="ph_no" ref="ph_no"value={this.state.newItem.ph_no} onChange={(e)=>this.addNewContactCard(e,'ph_no')}/>
                    </div>
                    <div>
                        <button type="button" className="addButton" onClick={()=>this.addContactCard()}>Add</button>
                        <button type="button" className="resetButton" onClick={()=>this.resetForm()}>Reset</button>
                    </div>
                 </div>  
                </div>
            </div>);
    }
}

export default ContactList; 