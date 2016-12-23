import React, { Component } from 'react';
import ContactCard from './ContactCard';
import { fromJS } from 'immutable';
import { actions } from './redux/ContactList';
import { connect } from 'react-redux';

class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.state = { newItem: fromJS({}) , showAddContactCardFlag : false };
        this.deleteCard = this.deleteCard.bind(this);
        this.editCard =  this.editCard.bind(this);
        this.addNewContactCard = this.addNewContactCard.bind(this);
        this.addContactCard = this.addContactCard.bind(this);
        this.showAddContactCardForm = this.showAddContactCardForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    componentWillMount() {
        this.props.initialList();
    }

    deleteCard(id) {
        this.props.deleteContact({ id });
    }   

    editCard(id, newValue, field) {
        this.props.editContact({id,newValue,field});
    }

    addNewContactCard(e, field) {
        // this.props.newContact({ item: { [field]: e.target.value } });
        const item = {};
        item[field] = e.target.value;
        console.log(item);
        this.props.addNewContact( {item} )
        // const newItemObj = this.state.newItem.set(field, e.target.value);
        // this.setState({ newItem: newItemObj});
    }

    addContactCard() {
        this.props.addContactToList();
        // this.setState({ ContactList: this.props.ContactList.push(fromJS(this.state.newItem))});  
    }

    showAddContactCardForm(){
        this.setState({showAddContactCardFlag : !this.state.showAddContactCardFlag})
    }

    resetForm(){
        this.refs.name.value = '';
        this.refs.age.value = '';
        this.refs.id.value = '';
        this.refs.ph_no.value = '';
        this.setState({ newItem: {}})
    }

    render() {
        let returnObj=[];
        this.props.ContactList.forEach(function(item) {
                returnObj.push(<ContactCard
                key={item.get('id')}
                contactData={item.toJS()} 
                deleteCard={this.deleteCard}
                editCard={this.editCard}>
            </ContactCard>);
        }, this);
        var toMakeVisible=(this.state.showAddContactCardFlag? 'visible' : 'hidden');
        console.log(this.props.ContactList.toJS())
        return (
            <div>{returnObj}
            <button type="button" className="addContactButton" onClick={()=>this.showAddContactCardForm()}>Add</button>
            <br/>
            <br/>
            <div className={toMakeVisible}>
                <div>
                <h2 className="header">New Contact </h2>
                    <div className="secdiv" ref="form">
                        New id   : <input type="text" ref="id" value={this.state.newItem.id} onChange={(e)=>this.addNewContactCard(e,'id')}/> <br/>
                        New Name : <input type="text" ref="name" value={this.state.newItem.name} onChange={(e)=>this.addNewContactCard(e,'name')}/><br/>
                        New Age  : <input type="text" ref="age" value={this.state.newItem.age} onChange={(e)=>this.addNewContactCard(e,'age')} /><br/>
                        New num : <input type="text" ref="ph_no" value={this.state.newItem.ph_no} onChange={(e)=>this.addNewContactCard(e,'ph_no')}/>
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

const mapStateToProps = (state) => {
    return {
        ContactList: state.ContactList
    }
};

const ContactListComponent = connect(
    mapStateToProps,
    actions
)(ContactList);
export default ContactListComponent;