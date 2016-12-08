import React, { Component } from 'react';
import './Contactcard.css';

class ContactCard extends Component {
    constructor(props){
        super(props);
        this.state={cardItem: props.contactData}
    }

    render(){
        return(<div className='Cards'>
                <ol>
                <div className='Card'>
                <div className='Name'>Name  :{this.state.cardItem.name}</div>
                <div className='Age'> Age   :{this.state.cardItem.age}</div>
                <div className='num'> Ph No.:{this.state.cardItem.ph_no}</div>
                <button className='Deletebutton'>Delete</button>
                <input type="button" className="Editbutton" value="Edit"/>
                </div>
                </ol>
                <br />
                
                </div>);
       }
}

export default ContactCard;