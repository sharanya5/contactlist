import React, { Component } from 'react';
// import React from 'react';        
import { Field, reduxForm } from 'redux-form';

validate(values){
        let errors={};
        if(!values.id){
            errors.id = 'Required';
        }
       if(!values.name){
            errors.id = 'Required';
        }
        if(!values.age){
            errors.id = 'Required';
        }
        if(!values.ph_num){
            errors.id = 'Required';
        }
        return errors
    }

let AddNewContact = () => 
    //    const { handlesubmit } = this.props
    <div>
        <h1>New Contact</h1>
        <form>
        <div>
        <label>id</label>
          <Field name="id" component="input" type="text" placeholder="id"/>
        </div>
        <div>
        <label>name</label>
          <Field name="name" component="input" type="text" placeholder="name"/>
        </div>
        <div>
        <label>age</label>
          <Field name="age" component="input" type="text" placeholder="age"/>
        </div>
        <div>
        <label>ph_num</label>
          <Field name="ph_num" component="input" type="text" placeholder="phone number"/>
        </div>
        </form>
    </div>


export default reduxForm({
  form: 'newForm'
})(AddNewContact)