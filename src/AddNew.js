import React, { Component } from 'react';
import './AddNew.css';
import { fromJS } from 'immutable';
import { actions } from './redux/ContactList';
import { connect } from 'react-redux';

class AddNew extends Component {

    constructor(props) {
        super(props);
        this.state = { newItem: fromJS({}) }
        this.addNewContactCard = this.addNewContactCard.bind(this);
        this.addContactCard = this.addContactCard.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

     componentWillMount() {
        this.props.initialList();
    }
    
    addNewContactCard(e, field) {
        const newItemObj = this.state.newItem.set(field, e.target.value);
        this.setState({ newItem: newItemObj});
    }

    addContactCard() {
        this.props.addContactToList(this.state.newItem);
    }

    resetForm(){
        this.refs.name.value = '';
        this.refs.age.value = '';
        this.refs.id.value = '';
        this.refs.ph_no.value = '';
        this.setState({ newItem: fromJS({})})
    }

    render() {
        console.log(this.props.ContactList.toJS())
        return (
            <div>
                <h1 className="header">new contact </h1>
                <form>
                <div className="secdiv" ref="form">
                    New id   : <input type="text" ref="id" value={this.state.newItem.id} onChange={(e)=>this.addNewContactCard(e,'id')}/> <br/>
                    New Name : <input type="text" ref="name" value={this.state.newItem.name} onChange={(e)=>this.addNewContactCard(e,'name')}/><br/>
                    New Age  : <input type="text" ref="age" value={this.state.newItem.age} onChange={(e)=>this.addNewContactCard(e,'age')} /><br/>
                    New num : <input type="text" ref="ph_no" value={this.state.newItem.ph_no} onChange={(e)=>this.addNewContactCard(e,'ph_no')}/>
                </div>
                <div>
                    <button type="button" className="backButton"><a href="/">Back</a></button>
                    <button type="button" className="addButton" onClick={()=>this.addContactCard()}>Add</button>
                    <button type="button" className="resetButton" onClick={()=>this.resetForm()}>Reset</button>
                </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
        return {
            ContactList : state.ContactList
        }
};

const AddNewComponent = connect(
    mapStateToProps,
    actions
)(AddNew);
export default AddNewComponent;