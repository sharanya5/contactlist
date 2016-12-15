import React, { Component } from 'react';
import './AddNew.css';

class AddNew extends Component {

    constructor(){
        super();
        this.state={ newContacts : [] ,
                        newId : '' }
        console.log(this.state.newContacts)
        this.newCards=this.newContactCards.bind(this);
    }

    newContactCards(e) {
        console.log(e.target.value)
        this.state.newId=e.target.value;
        this.state.newContacts.push({item : this.state.newId})
        console.log(this.state.newContacts)
        // var sliced=this.state.newContacts.slice();
        this.setState({newContacts : this.state.newContacts})
        console.log(this.state.newContacts)
   }
    render(){
        return (<div className="firstdiv">
                    <h2 className="header">New Contact </h2>
                    <div className="secdiv">
                        New id    : <input type="text" Name="id" onChange={(e)=>this.newContactCards(e)} /> <br/>
                        New Name  : <input type="text" Name="name" onChange={(e)=>this.newContactCards(e)} /><br/>
                        New Age   : <input type="text" Name="Age" onChange={(e)=>this.newContactCards(e)} /><br/>
                        New ph.no : <input type="text" Name="ph_no" onChange={(e)=>this.newContactCards(e)} /><br/>
                    </div>
                    <div>
                        <button type="button" className="add" onClick={(e)=>this.newContactCards(e)}>Add</button>
                        <button type="button" className="addButton" ><a href="/">Add</a></button>
                        <button type="button" className="resetButton"><a href="/AddNew">Reset</a></button>
                    </div>
                </div>
        )
    }
}

export default AddNew;