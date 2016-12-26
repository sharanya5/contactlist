import React, { Component } from 'react';
import './Contactcard.css';
import logo from './logo.svg';

class ContactCard extends Component {
    
constructor(props) {
    super(props);
    this.state={ cardItem: props.contactData, editMode: false };
    this.newFieldValue=this.newFieldValue.bind(this);
    this.displayEditableFields=this.displayEditableFields.bind(this);
}

newFieldValue(e, field)  {
    var newValue = e.target.value; 
    this.setState({cardItem : newValue});
    this.props.editCard(this.state.cardItem.id, newValue, field);
}

componentWillReceiveProps(nextProps) {
    this.setState({ cardItem: nextProps.contactData })
}

displayEditableFields(){
    this.setState({editMode : !this.state.editMode})
}

render() {
    var cls = (this.state.editMode ? 'visible' : 'hidden');
    return(
        <div className='Cards' >
                <ol>
                <li><img src={logo} className="App-logo" alt="logo" />
                    <div className='Card'>
                        <div>ID   : {this.props.contactData.id}</div>
                        <div>NAME : {this.props.contactData.name}</div>
                        <div>AGE  : {this.props.contactData.age}</div>
                        <div>NUM  : {this.props.contactData.ph_no}</div>
                    </div>
                    <div className={cls} >
                        <input className='id' value={this.state.cardItem.id} onChange={(e)=>this.newFieldValue(e,'id')}/><br />
                        <input className='Name' value={this.state.cardItem.name} onChange={(e)=>this.newFieldValue(e,'name')}/><br />
                        <input className='Age' value={this.state.cardItem.age} onChange={(e)=>this.newFieldValue(e,'age')}/><br />
                        <input className='num' value={this.state.cardItem.ph_no} onChange={(e)=>this.newFieldValue(e,'ph_no')}/>
                    </div></li>
                    <div>
                        <button className='Deletebutton' onClick={()=>this.props.deleteCard(this.state.cardItem.id)}>Delete</button>
                        <input type="button" className="Editbutton" value="Edit" onClick={()=>this.displayEditableFields()}/>
                    </div>
                </ol>
            </div>
        );
    }
}

export default ContactCard;