import React, { Component } from 'react';
import './Contactcard.css';
import logo from './logo.svg';

class ContactCard extends Component {
    constructor(props){
        super(props);
        this.state={cardItem: props.contactData }
        this.newCard=this.newCard.bind(this);
    }

newCard(e, field){
    var newValue = e.target.value; 
    this.setState({cardItem : newValue});
    this.props.editCard(this.state.cardItem.id, newValue, field);
}

componentWillReceiveProps(nextProps) {
    this.setState({cardItem: nextProps.contactData})
}

render(){
    var id=this.state.cardItem.id;
    console.log(id, this.state.cardItem)
    return(<div className='Cards' >
             <ol draggable='true'>
              <img src={logo} className="App-logo" alt="logo" />
              <div className='Card'>
                <div>{this.state.cardItem.id}</div>
                <div>{this.state.cardItem.name}</div>
                <div>{this.state.cardItem.age}</div>
                <div>{this.state.cardItem.ph_no}</div>
              </div>
              <div className='foredit' id='ki'>
                <input className='id' value={this.state.cardItem.id} onChange={(e)=>this.newCard(e, 'id')}/><br />
                <input className='Name'value={this.state.cardItem.name} onChange={(e)=>this.newCard(e, 'name')}/><br />
                <input className='Age' value={this.state.cardItem.age} onChange={(e)=>this.newCard(e, 'age')}/><br />
                <input className='num' value={this.state.cardItem.ph_no} onChange={(e)=>this.newCard(e, 'ph_no')}/><br />
               </div>
               <div>
                <button className='Deletebutton' onClick={()=>this.props.deleteCard(id)}>Delete</button>
                <input type="button" className="Editbutton" value="Edit" onClick={()=>this.myFunction()}/>
              </div>
              </ol>
           </div>);
       }
}

export default ContactCard;