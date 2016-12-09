import React, { Component } from 'react';
import './Contactcard.css';

class ContactCard extends Component {
    constructor(props){
        super(props);
        this.state={cardItem: props.contactData }
    }

newCard(e){
    const newValue = e.target.value; 
    this.setState({cardItem : newValue});
    this.props.editCard(this.state.cardItem.id, newValue);
}

 render(){
    var id=this.state.cardItem.id;
    console.log(id);
    return(<div className='Cards'>
             <ol>
              <div className='Card'>
              <input className='id' value={this.state.cardItem.id} onChange={(e)=>this.newCard(e)}/><br />
              <input className='Name'value={this.state.cardItem.name} onChange={()=>this.newCard()}/><br />
              <input className='Age' value={this.state.cardItem.age} onChange={()=>this.newCard()}/><br />
              <input className='num' value={this.state.cardItem.ph_no} onChange={()=>this.newCard()}/><br />
              <button className='Deletebutton' onClick={()=>this.props.deleteCard(id)}>Delete</button>
              <input type="button" className="Editbutton" value="Edit" onClick={(e)=>this.newCard(e)}/>
              </div>
             </ol>
           </div>);
       }
}

export default ContactCard;