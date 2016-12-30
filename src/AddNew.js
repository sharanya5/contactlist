import React, { Component } from 'react';
import './AddNew.css';
import { fromJS } from 'immutable';
import { actions } from './redux/ContactList';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class AddNew extends Component {

    constructor(props) {
        super(props);
        this.state = { newItem: fromJS({}) }
        this.addNewContactCard = this.addNewContactCard.bind(this);
        this.addContactCard = this.addContactCard.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.validate = this.validate.bind(this);
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

    validate(values){
        let errors={};
        if(!values.id){
            errors.id = 'Required';
        }
       if(!values.name){
            errors.name = 'Required';
        }
        return errors
    }

   render(){
    return (<div>
        <h1>New Contact</h1>
        <form onSubmit={(e)=>this.addNewContactCard(e)}>
            <div>
                <label>id</label>
                <Field name="id" type="text" component="input" placeholder="id"/>
            </div>
            <div>
                <label>name</label>
                <Field name="name" type="text" component="input" placeholder="name"/>
            </div>
            <div>
                <label>age</label>
                <Field name="age" type="text" component="input" placeholder="age"/>
            </div>
            <div>
                <label>phone number</label>
                <Field name="phone_num" type="text" component="input" placeholder="phone number"/>
            </div>
            <div>
                <label>email</label>
                <Field name="email" type="email" component="input" placeholder="email"/>
            </div>
            <button onSubmit={(e)=>this.addNewContactCard(e)} >add </button>
        </form>
    </div>);
}
}

AddNew = reduxForm({
    form: 'AddNew'
})(AddNew)

const mapStateToProps = (state) => {
        return {
            ContactList : state.ContactList
        }
};

AddNew = connect(
    mapStateToProps,
    actions,
)(AddNew);
export default AddNew;