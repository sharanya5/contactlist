import React, { Component } from 'react';
import ContactList from './ContactList';
import './ContactListPage.css';
import { actions } from './redux/ContactList';
import { connect } from 'react-redux';

class ContactListPage extends Component {

  constructor(){
    super();
    this.searchHandler=this.searchHandler.bind(this)
  }

  searchHandler(e){
    var inputText = e.target.value;
    this.props.searchForInput({inputText});
    // this.props.ContactList.forEach(function(item){
    //   for(var i=0;i<this.props.ContactList.length;i++){
    //     if(inputText===this.props.ContactList[i]){
    //       let arr = this.props.ContactList[i]
    //       console.log(arr)
    //       return arr;
    //   }}
    // }, this
    // let obj = this.props.ContactList.find(item => item.get('id') === inputText);
    // console.log(obj)
  }

  render() {
       return ( <div>
                  <div>
                    <h1 className='App'>contact list</h1>
                  </div>
                  <div>
                  <div className="searchBar">
                    <input type="search" name="search" placeholder="search" onChange={(e)=>this.searchHandler(e)}/>
                  </div>
                  <div className="searchButton">
                    <input type="button" name="search" value="search"/>
                  </div> 
                  </div>
                  <div>
                     <ContactList />
                  </div>
                  <div>
                    <button className='AddButton'><a href='/AddNew'>Add New contact</a></button>
                  </div>
               </div> 
       );
    }
}

const mapStateToProps = (state) => {
    return {
        ContactList: state.ContactList
    }
};

const ContactListPageComponent = connect(
    mapStateToProps,
    actions
)(ContactListPage);

export default ContactListPageComponent;