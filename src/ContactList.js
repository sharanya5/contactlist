import React, { Component } from 'react';
import ContactCard from './ContactCard';
import { actions } from './redux/ContactList';
import { connect } from 'react-redux';

class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.deleteCard = this.deleteCard.bind(this);
        this.editCard =  this.editCard.bind(this);
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
        return (
            <div>
                {returnObj}
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