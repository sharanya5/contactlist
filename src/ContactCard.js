import React, { Component } from 'react';
import './Contactcard.css';

class ContactCard extends Component {
    constructor(props){
        super(props);
        this.state={cardItem: props.contactData }
        this.newCard=this.newCard.bind(this);
        this.myFunction=this.myFunction.bind(this);
    }

newCard(e){
    
    console.log(e.target.value)
    var newValue = e.target.value; 
    console.log(newValue);
    this.setState({cardItem : newValue});
    this.props.editCard(this.state.cardItem, newValue);
}
myFunction() {
    document.getElementById('ki').style.visibility = "visible";
}

 render(){
    var id=this.state.cardItem.id;
// console.log(id);
    return(<div className='Cards'>
             <ol>
              <div className='Card'>
              <div>{this.state.cardItem.id}</div>
              <div>{this.state.cardItem.name}</div>
              <div>{this.state.cardItem.age}</div>
              <div>{this.state.cardItem.ph_no}</div></div>
              <div className='foredit' id='ki'>
              <input className='id' value={this.state.cardItem.id} onChange={(e)=>this.newCard(e)}/><br />
              <input className='Name'value={this.state.cardItem.name} onChange={(e)=>this.newCard(e)}/><br />
              <input className='Age' value={this.state.cardItem.age} onChange={(e)=>this.newCard(e)}/><br />
              <input className='num' value={this.state.cardItem.ph_no} onChange={(e)=>this.newCard(e)}/><br />
               </div>
              <button className='Deletebutton' onClick={()=>this.props.deleteCard(id)}>Delete</button>
              <input type="button" className="Editbutton" value="Edit" onClick={()=>this.myFunction()}/>
              </ol>
           </div>);
       }
}

export default ContactCard;