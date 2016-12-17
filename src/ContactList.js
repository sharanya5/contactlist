import React, { Component } from 'react';
import ContactCard from './ContactCard';

class ContactList extends Component {
    
    constructor(props) {
        super(props);
            this.state = { contactItems: props.toItems, newItem: {} , newVar : false }
            this.deleteCard = this.deleteCard.bind(this);
            this.editCard =  this.editCard.bind(this);
            this.newContactCards = this.newContactCards.bind(this)
    }

    deleteCard(id) {
        let newContactItems = this.state.contactItems;
        let selectedIndex;
        newContactItems.map(function(item, index) {
            if(item.item.id === id) 
                return selectedIndex = index;
        });
        newContactItems.splice(selectedIndex , 1);
        this.setState({ contactItems : newContactItems });
    }   

    editCard(id, newValue, field) {
        let newCardItems = this.state.contactItems;
        let newArray = newCardItems.map(function(item, index) {
            if(item.item.id === id) {
                item.item[field] = newValue;
                return item;
            }
            else return item;
        });
        this.setState({contactItems : newArray})
    }

    newContactCards(e, field) {
        this.state.newItem[field] = e.target.value;
    }

    addContactCard() {
        let newItem = Object.assign({}, this.state.newItem);
        let newItems = Object.assign([], this.state.contactItems);
        newItems.push({ item: newItem });
        this.setState({ contactItems: newItems });
    }

    contactCardForm(){
        this.setState({newVar : !this.state.newVar})
    }

    render() {
        let returnObj = [];
        this.state.contactItems.forEach(function(item) {
            returnObj.push(<ContactCard 
                key={item.item.id}
                contactData={item.item} 
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
                    <div className='secdiv'>
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